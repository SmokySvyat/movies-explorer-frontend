import './App.css';
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import NotFound from '../NotFound/NotFound';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import Profile from '../Profile/Profile';
import SavedMovies from '../SavedMovies/SavedMovies';
import Register from '../Register/Register';
import Login from '../Login/Login';

function App() {
  const [currentUser, setCurrentUser] = useState([]);
  const [loggedIn, setLoggedIn] = useState(true);           //LOGIN

  return (
    // <CurrentUserContext.Provider value={currentUser}>
      <div className='root'>
        <Routes>
          <Route path="*" element={<NotFound />} />

          <Route
              path="/"
              element={
                <>
                  <Header
                    loggedIn = {loggedIn}
                  />
                  <Main />
                  <Footer />
                </>
              }
          />
          <Route
              path="/movies"
              element={
                <>
                  <Header
                    loggedIn = {loggedIn}
                  />
                  <Movies />
                  <Footer />
                </>
              }
          />
          <Route
              path="/saved-movies"
              element={
                <>
                  <Header
                    loggedIn = {loggedIn}
                  />
                  <SavedMovies />
                  <Footer />
                </>
              }
          />
          <Route 
              path="/profile"
              element={
                <>
                  <Header
                    loggedIn = {loggedIn}
                  />
                  <Profile
                      name={"Вася"}
                      email={'vasya@mail.com'}
                  />
                </>
              }
          />
          <Route
            path="/sign-up"
            element={
              <>
                <Register
                  title="Добро пожаловать!"
                  btnValue="Зарегистрироваться"
                />
              </>
            }
          />
          <Route
            path="/sign-in"
            element={
              <>
                <Login
                  title="Рады видеть!"
                  btnValue="Войти"
                />
              </>
            }
          />
        </Routes>      
      </div>
    // </CurrentUserContext.Provider>
  );
}

export default App;
