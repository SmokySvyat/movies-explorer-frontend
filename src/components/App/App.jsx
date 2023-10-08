import './App.css';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import { useState,useEffect, useCallback } from 'react';

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
import { ProtectedRoute, ProtectedAuthRoute } from '../ProtectedRoute/ProtectedRoute'

import { apiMovies } from '../../utils/MoviesApi';
import {api} from '../../utils/MainApi'

function App() {
  const navigate = useNavigate();
  const location = useLocation();
  const currentPath = location.pathname;
  const [currentUser, setCurrentUser] = useState(localStorage.getItem('currentUser') ?? {});
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const [allCards, setAllCards] = useState([]);
  const [savedMovies, setSavedMovies] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  const [errorRegisterMessage, setRegisterErrorMessage] = useState("");
  const [errorLoginMessage, setErrorLoginMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const getUser = () => {
    api
      .getProfile()
      .then((currentUser) => {
        setCurrentUser(currentUser);
      })
      .catch((err) => console.log(err));
  };

  const checkToken = useCallback(() => {
    // setIsLoading(true)
    if(localStorage.getItem('jwt')) {
    let jwt = localStorage.getItem("jwt");
    // console.log(isLoading)
      api
        .getProfile()
        .then((res) => {
            setLoggedIn(true);
            // getUser();
            setCurrentUser(res)
            getSavedMovies();
            navigate(currentPath, {replace:true})
        })
        .catch((err) => console.log(err))
        .finally(() => {
          setIsLoading(false);
        });
    }
  }, []);
  useEffect(() => {
    checkToken();
  }, [isLoggedIn]);

  const handleRegister = ({ name, email, password }) => {
    setIsLoading(true);
    setRegisterErrorMessage('')
    api
      .register({ name, email, password })
      .then(() => {
        handleLogin({ email,password })
        navigate("/movies");
      })
      .catch((err) => {
        setRegisterErrorMessage(err.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const handleLogin = ({ email,password }) => {
    if (!email || !password) {
      return;
    }
    setIsLoading(true)
    setErrorLoginMessage('')
    api
      .authorize(email, password)
      .then((res) => {
        console.log(res)
          localStorage.setItem("jwt", res.token);
          setLoggedIn(true);
          checkToken()
          navigate('/movies', {replace:true});
        
      })
      .catch((err) => {
        console.log(err);
        setErrorLoginMessage(err.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const handleUpdateUser = ({ id, name, email }, next) => {
    setIsLoading(true);
    api
      .patchProfile({ id, name, email })
      .then((res) => {
        setSuccessMessage('Профиль успешно обновлен');
        setErrorMessage('');
        getUser();
      })
      .catch((err) => {
        console.log(err);
        setSuccessMessage('');
        setErrorMessage(err.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const handleSignOut = () => {
    localStorage.clear();
    setLoggedIn(false);
    navigate('/');
  };

  const getCards = () => {
    setIsLoading(true)
      return apiMovies.getCard()
        .then((card) => {
          setAllCards(card);
          // console.log(movies)
          return card;
         })
        .catch((err) => {
          console.log(err);
        })
        .finally(
          setIsLoading(false)
        );
  };

  const handleSaveMovie = (card) => {
    const isSaved = savedMovies.some(
      (item) => card.id === item.movieId
    );

    if (!isSaved) {
      api
        .saveCard(card)
        .then((newMovie) => {
          setSavedMovies([newMovie, ...savedMovies]);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      const movieToDelete = savedMovies.find(
        (item) => item.movieId === card.id
      );

      if (movieToDelete && movieToDelete._id) {
        const movieId = savedMovies.find(
          (item) => item.movieId === card.id
        )._id;
        api
          .deleteCard(movieId)
          .then(() => {
            setSavedMovies((cards) =>
              cards.filter((item) => item._id !== movieId)
            );
          })
          .catch((err) => {
            console.error('Ошибка при удалении:', err);
          });
      } else {
        console.error('Не удалось найти id');
      }
    }
  };

  function handleDeleteMovie(card) {
    return api
      .deleteCard(card._id)
      .then(() => {
        setSavedMovies((savedCards) =>
          savedCards.filter((item) => item._id !== card._id)
        );
      })
      .catch((err) => {
        console.error('Ошибка при удалении:', err);
      });
  }
  const getSavedMovies = () => {
    api
      .getSavedMovies()
      .then((movies) => {
        setSavedMovies(movies);
      })
      .catch((err) => console.log(err));
  };
  return (
    <CurrentUserContext.Provider value={{currentUser, setCurrentUser}}>
      <div className='app'>
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
                  <ProtectedRoute isLoggedIn={isLoggedIn}>
                    <Header
                      loggedIn = {isLoggedIn}
                    />
                    <Movies
                      loggedIn={isLoggedIn}
                      currentUser={currentUser}
                      movies={allCards}
                      savedMovies={savedMovies}
                      onSave={handleSaveMovie}
                      getMovies={getCards}
                    />
                    <Footer />
                  </ProtectedRoute>
                </>
              }
          />
          <Route
              path="/saved-movies"
              element={
                <>
                  <ProtectedRoute isLoggedIn={isLoggedIn}>
                    <Header
                      loggedIn = {isLoggedIn}
                    />
                    <SavedMovies
                      movies={savedMovies}
                      onDelete={handleDeleteMovie}
                      loggedIn={isLoggedIn}
                      currentUser={currentUser}
                      getSavedMovies={getSavedMovies}
                    />
                  <Footer />
                </ProtectedRoute>
                </>
              }
          />
          <Route 
              path="/profile"
              element={
                <>
                  <ProtectedRoute isLoggedIn={isLoggedIn}>
                  <Header
                    loggedIn = {isLoggedIn}
                  />
                  <Profile
                    loggedIn={isLoggedIn}
                    onUpdateUser={handleUpdateUser}
                    handleSignOut={handleSignOut}
                    errorMessage={errorMessage}
                    successMessage={successMessage}
                    isLoading={isLoading}
                    setErrorMessage={setErrorMessage}
                    setSuccessMessage={setSuccessMessage}
                  />
                  </ProtectedRoute>
                </>
              }
          />
          <Route
            path="/signup"
            element={
              <>
                <ProtectedAuthRoute
                  loggedIn={isLoggedIn}
                  element={Register}
                  handleRegister={handleRegister}
                  title="Добро пожаловать!"
                  btnValue="Зарегистрироваться"
                  errorMessage={errorRegisterMessage}
                  setErrorMessage={setRegisterErrorMessage}
                  isLoading={isLoading}
                />
              </>
            }
          />
          <Route
            path="/signin"
            element={
              <>
                <ProtectedAuthRoute
                  loggedIn={isLoggedIn}
                  element={Login}
                  handleLogin={handleLogin}
                  title="Рады видеть!"
                  btnValue="Войти"
                  errorMessage={errorLoginMessage}
                  isLoading={isLoading}
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
