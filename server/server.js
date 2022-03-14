require('dotenv').config();
const { ApolloServer } = require('apollo-server-express');
const { ApolloServerPluginDrainHttpServer } = require('apollo-server-core');
const express = require('express');
const session = require('express-session')
const http = require('http');
const path = require('path');
const cors = require('cors');
const { typeDefs, resolvers } = require('./schema');
const db = require('./config/connection');
const PORT = process.env.PORT || 3001;

async function startApolloServer(typeDefs, resolvers) {
    const app = express();
    const httpServer = http.createServer(app);

    const MongoDBStore = require('connect-mongodb-session')(session);

    const store = new MongoDBStore({
        uri: 'mongodb://localhost/turtle',
        collection: 'sessions'
    });

    store.on('error', function (error) {
        console.log(error);
    });

    app.use(require('express-session')({
        secret: process.env.SESSION_SECRET,
        cookie: {
            maxAge: 1000 * 60 * 60 * 24 * 7 // 1 week
        },
        store: store,
        // Boilerplate options, see:
        // * https://www.npmjs.com/package/express-session#resave
        // * https://www.npmjs.com/package/express-session#saveuninitialized
        resave: true,
        saveUninitialized: true
    }));

    const server = new ApolloServer({
        typeDefs,
        resolvers,
        plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
        context: ({ req, res }) => ({ req, res, session: req.session})
    });

    await server.start();
    server.applyMiddleware({ app });

    // set url to allow origin (client URL)
    if (process.env.NODE_ENV === 'production') {
        var corsOptions = {
            origin: 'https://typeplusplus.herokuapp.com/',
        };
    } else {
        var corsOptions = {
            origin: 'http://localhost:3000',
        };
    }
    app.use(cors(corsOptions));

    app.use(express.urlencoded({ extended: true }));
    app.use(express.json());
    if (process.env.NODE_ENV === 'production') {
        app.use(express.static(path.join(__dirname, '../client/build')));
    }
    app.use(express.static(path.join(__dirname, 'public')));
    app.use(require('./controllers'));

    // app.get('/', function (req, res) {
    //     res.send('Hello ' + JSON.stringify(req.session));
    // });

    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, '../client/build/index.html'));
    });

    db.once('open', async () => {
        await new Promise(resolve => httpServer.listen({ port: PORT }, resolve));
        console.log(`🚀 Server ready at http://localhost:${PORT}${server.graphqlPath}`);
    });
};

startApolloServer(typeDefs, resolvers);