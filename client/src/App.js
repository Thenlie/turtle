import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ApolloClient, InMemoryCache, ApolloProvider, ApolloLink, createHttpLink, useQuery } from '@apollo/client';
import Home from './pages/Home';
import Forms from './pages/Forms';

const httpLink = createHttpLink({
  uri: '/graphql',
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div>
        <Router>
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route exact path='/forms' element={<Forms />} />
          </Routes>
        </Router>
      </div>
    </ApolloProvider>
  );
}

export default App;
