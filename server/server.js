require('dotenv').config();
const { ApolloServer } = require('apollo-server-express');
const express = require('express');
const session = require('express-session')
// const { authMiddleware } = require('./utils/auth');
const { typeDefs, resolvers } = require('./schema');
const path = require('path');
// const cors = require('cors');
const db = require('./config/connection');
const app = express();
const PORT = process.env.PORT || 3001;

const MongoDBStore = require('connect-mongodb-session')(session);

const store = new MongoDBStore({
    uri: 'mongodb://localhost/turtle',
    collection: 'sessions'
})

store.on('error', function(error) {
    console.log(error);
});

app.use(require('express-session')({
    secret: 'This is a secret',
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
    uploads: false,
    typeDefs,
    resolvers,
    // context: authMiddleware,
});

// server.applyMiddleware({ app });
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../client/build')));
}

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res) {
    res.send('Hello ' + JSON.stringify(req.session));
});
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

const { createServer } = require('http');
const httpServer = createServer(app);

db.once('open', () => {
    console.log(
        `GraphQL server ready at http://localhost:${PORT}${server.graphqlPath}`
    );
    httpServer.listen(PORT, () =>
        console.log(`Listening on localhost:${PORT}`)
    );
});