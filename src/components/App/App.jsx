import './App.css';
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import { useState,useEffect } from 'react';

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
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute'

import { apiMovies } from '../../utils/MoviesApi';
import {api} from '../../utils/MainApi'
import * as auth from '../../utils/Auth'

function App() {
  const [currentUser, setCurrentUser] = useState({});
  const [isLoggedIn, setLoggedIn] = useState(false);          //LOGIN
  const [allMovies, setAllMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const [savedMovies, setSavedMovies] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  const [errorRegisterMessage, setRegisterErrorMessage] = useState("");
  const [loginErrorMessage, setLoginErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [isFormActivated, setFormActivated] = useState(false);

  const getUser = () => {
    api
      .getProfile()
      .then((currentUser) => {
        setCurrentUser(currentUser);
      })
      .catch((err) => console.log(err));
  };

  // const getSavedMovies = () => {
  //   api
  //     .getSavedMovies()
  //     .then((movies) => {
  //       setSavedMovies(movies);
  //     })
  //     .catch((err) => console.log(err));
  // };

  const checkToken = () => {
    const jwt = localStorage.getItem("jwt");
    if (jwt) {
      api
        .getProfile()
        .then((res) => {
          if (res) {
            setLoggedIn(true);
            getUser();
            // getSavedMovies();
          }
        })
        .catch((err) => console.log(err))
        .finally(() => {
          setIsLoading(false);
        });
      return;
    }
    setIsLoading(false);
  };
  useEffect(() => {
    checkToken();
  }, []);

  const handleRegister = ({ name, email, password }) => {
    setIsLoading(true);
    auth.register({ name, email, password })
      .then(() => {
        navigate("/signin");
      })
      .catch((err) => {
        console.log(err);
        setFormActivated(true);
        setRegisterErrorMessage(err.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const handleLogin = ({ email,password }) => {
    setIsLoading(true)
    auth.authorize(email, password)
      .then((data) => {
        // console.log(data)
        if (data.token) {
          localStorage.setItem("jwt", data.token);
          setLoggedIn(true);
          checkToken()
          setCurrentUser(data)
          navigate("/");
        }
      })
      .catch((err) => {
        console.log(err);
        setLoginErrorMessage(err.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const handleUpdateUser = ({ id, name, email }) => {
    setIsLoading(true);
    api
      .patchProfile({ id, name, email })
      .then((res) => {
        setCurrentUser(res);
        // setFormActivated(false);
        // setSuccessMessage(SECSESS_UPDATE_PROFILE);
        // setErrorMessage("");
      })
      .catch((err) => {
        console.log(err.message);
        // setFormActivated(true);
        // setSuccessMessage("");
        // setErrorMessage(err.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const handleSignOut = () => {
    localStorage.removeItem("jwt");
    localStorage.removeItem("query");
    localStorage.removeItem("isShortFilm");
    localStorage.removeItem("searchResults");
    localStorage.removeItem("currentPath");
    setLoggedIn(false);
    navigate('/');
  };

  const getMovies = () => {
    setIsLoading(true)
      return apiMovies.getCard()
        .then((movies) => {
          setAllMovies(movies);
          // console.log(movies)
          return movies;
         })
        .catch((err) => {
          console.log(err);
        })
        .finally(
          setIsLoading(false)
        );
  };
  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className='root'>
        <Routes>
          <Route path="*" element={<NotFound />} />

          <Route
              path="/"
              element={
                <>
                  <Header
                    loggedIn = {isLoggedIn}
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
                    loggedIn = {isLoggedIn}
                  />
                  <ProtectedRoute
                    element={Movies}
                    loggedIn={isLoggedIn}
                    currentUser={currentUser}
                    movies={allMovies}
                    savedMovies={savedMovies}
                    // onSave={handleSaveMovie}
                    getMovies={getMovies}
              />
                  <Footer />
                </>
              }
          />
          <Route
              path="/saved-movies"
              element={
                <>
                  <Header
                    loggedIn = {isLoggedIn}
                  />
                  <ProtectedRoute
                    loggedIn={isLoggedIn}
                    element={SavedMovies}
                  />
                  <Footer />
                </>
              }
          />
          <Route 
              path="/profile"
              element={
                <>
                  <Header
                    loggedIn = {isLoggedIn}
                  />
                  <ProtectedRoute
                    loggedIn={isLoggedIn}
                    element={Profile}
                    onUpdateUser={handleUpdateUser}
                    handleSignOut={handleSignOut}
                  />
                </>
              }
          />
          <Route
            path="/signup"
            element={
              <>
                <Register
                  handleRegister={handleRegister}
                  title="Добро пожаловать!"
                  btnValue="Зарегистрироваться"
                />
              </>
            }
          />
          <Route
            path="/signin"
            element={
              <>
                <Login
                  handleLogin={handleLogin}
                  title="Рады видеть!"
                  btnValue="Войти"
                />
              </>
            }
          />
        </Routes>      
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
