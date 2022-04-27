import React, { useCallback, useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink } from '@apollo/client';
import Home from './pages/Home';
import Forms from './pages/Forms';
import Header from './components/Header';
import EndGame from './pages/EndGame';
import DailyGame from './pages/DailyGame';
import ContGame from './pages/ContGame';
import Profile from './pages/Profile';
import NotFound from './pages/NotFound';
import { Login, Logout, Signup } from './components/Forms';

const httpLink = createHttpLink({
  uri: '/graphql',
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

function App() {
  const [user, setUser] = useState('');
  const [currentPage, setCurrentPage] = useState('home')

  const wrapperSetUser = useCallback(val => {
    setUser(val);
  }, [setUser]);

  const getUser = async () => {
    const response = await fetch('/auth/user');
    const data = await response.json();
    if (data.message) {
      setUser(null);
    } else {
      setUser(data);
    };
  };

  useEffect(() => {
    if (localStorage.getItem('turtleUID')) {
      setUser(localStorage.getItem('turtleUID'));
    } else {
      getUser();
    }
  }, []);
  
  return (
    <ApolloProvider client={client}>
      <div className='flex flex-col lg:flex-row h-full'>
        <Router>
        {currentPage !== 'home' &&
          <Header currentPage={currentPage} setCurrentPage={setCurrentPage}/>
        }
          <Routes>
            <Route exact path='*' element={<NotFound />} />
            <Route exact path='/' element={<Home user={user} setCurrentPage={setCurrentPage}/>} />
            <Route element={<Forms user={user} />} >
              {user === null ? (
                <>
                  <Route exact path='login' element={<Login user={user} setUser={wrapperSetUser} />} />
                  <Route exact path='signup' element={<Signup user={user} setUser={wrapperSetUser} />} />
                </>
              ) : (
                <Route exact path='logout' element={<Logout setUser={wrapperSetUser} />} />
              )
              }
            </Route>
            {user !== null && 
              <>
                <Route exact path='/daygame' element={<DailyGame user={user} />} />
                <Route exact path='/contgame' element={<ContGame />} />
                <Route exact path='/endgame' element={<EndGame user={user} />} />
                <Route path='/profile' element={<Profile user={user} />} >
                  <Route path='dashboard' element={<Profile />}/>
                  <Route path=':id'element={<Profile />} />
                </Route>
              </>
            }
          </Routes>
        </Router>
        </div>
    </ApolloProvider>
  );
}

export default App;
