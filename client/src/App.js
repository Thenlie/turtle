import React, { useState } from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider, ApolloLink, createHttpLink } from '@apollo/client';
import Test from './components/Test/Test';

const httpLink = createHttpLink({
  uri: '/graphql',
});

const client = new ApolloClient({
  link: ApolloLink.from([httpLink]),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div>
        <Test />
      </div>
    </ApolloProvider>
  );
}

export default App;
