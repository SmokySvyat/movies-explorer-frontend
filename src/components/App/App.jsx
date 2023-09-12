import logo from './logo.svg';
import './App.css';
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import NotFound from '../NotFound';
import Header from '../Header';
import Footer from '../Footer';
import Main from '../Main';
import Movies from '../Movies';
import Profile from '../Profile';
import SavedMovies from '../SavedMovies';
import Register from '../Register';
import Login from '../Login';

function App() {
  const [currentUser, setCurrentUser] = useState([]);
  const [loggedIn, setLoggedIn] = useState(true);           //LOGIN

  return (
    // <CurrentUserContext.Provider value={currentUser}>
      <div>
        <Routes>
          <Route path="*" element={<NotFound />} />

          <Route
              path="/"
              element={
                <>
                  <Header />
                  <Main />
                  <Footer />
                </>
              }
          />
          <Route
              path="/movies"
              element={
                <>
                  <Header />
                  <Movies />
                  <Footer />
                </>
              }
          />
          <Route
              path="/saved-movies"
              element={
                <>
                  <Header />
                  <SavedMovies />
                  <Footer />
                </>
              }
          />
          <Route 
              path="/profile"
              element={
                <>
                  <Header />
                  <Profile />
                </>
              }
          />
          <Route
            path="/sign-up"
            element={
              <>
                <Header />
                <Register />
              </>
            }
          />
          <Route
            path="/sign-in"
            element={
              <>
                <Header />
                <Login />
              </>
            }
          />
        </Routes>      
      </div>
    // </CurrentUserContext.Provider>
  );
}

export default App;
