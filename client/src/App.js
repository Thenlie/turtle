import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink } from '@apollo/client';
import Home from './pages/Home';
import Forms from './pages/Forms';
import Header from './components/Header';
import Footer from './components/Footer';

const httpLink = createHttpLink({
  uri: '/graphql',
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

function App() {
  const [user, setUser] = useState('');

  const getUser = async () => {
    const response = await fetch('/auth/user');
    const data = await response.json();
    if (data.message) {
      setUser(null);
    } else {
      setUser(data);
    }
  }

  useEffect(() => {
    getUser();
  }, [setUser])
  

  return (
    <ApolloProvider client={client}>
      <div className='flex flex-col h-full'>
        <Router>
          <Header />
          <Routes>
            <Route exact path='/' element={<Home user={user} />} />
            <Route exact path='/forms' element={<Forms user={user} setUser={setUser} />} />
          </Routes>
          <Menu />
          <Footer />
        </Router>
        </div>
    </ApolloProvider>
  );
}

const Menu = () => {
  return (
     <div>
         <ul>
             <a>Hello!</a>
             <a>Hello!</a>
             <a>Hello!</a>
         </ul>
     </div> 
  );
}

export default App;
