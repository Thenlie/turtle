require('dotenv').config();
const { ApolloServer } = require('apollo-server-express');
const express = require('express');
const { authMiddleware } = require('./utils/auth');
const { typeDefs, resolvers } = require('./schema');
const path = require('path');
const db = require('./config/connection');
const app = express();
const PORT = process.env.PORT || 3001;

const server = new ApolloServer({
    uploads: false,
    typeDefs,
    resolvers,
    context: authMiddleware,
});

server.applyMiddleware({ app });
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../client/build')));
}

app.use(express.static(path.join(__dirname, 'public')));

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