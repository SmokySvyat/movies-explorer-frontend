import './Movies.css'
import { useEffect, useState } from 'react';
import MoviesCardList from './MoviesCardList/MoviesCardList'
import SearchForm from '../Movies/SearchForm/SearchForm'
import {cards} from '../../utils/constants'
import { apiMovies } from '../../utils/MoviesApi';
import Preloader from './Preloader/Preloader';

function Movies ({ movies, savedMovies, onSave, getMovies }) {
  const [searchResults, setSearchResults] = useState(
    JSON.parse(localStorage.getItem("searchResults")) || []
  );
  useEffect(() => {
    localStorage.setItem("currentPath", "/movies");
  }, []);
  const [query, setQuery] = useState(localStorage.getItem("query") || "");
  const [hasSearched, setHasSearched] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [visibleCards, setVisibleCards] = useState(getInitialVisibleCards());
  const [isShortFilm, setIsShortFilm] = useState(
    localStorage.getItem("isShortFilm") === "true" || false
  );

  const updateQuery = (newQuery) => {
    setQuery(newQuery);
  };

  const updateIsShortFilm = (newValue) => {
    setIsShortFilm(newValue);
  };

  useEffect(() => {
    localStorage.setItem("query", query);
  }, [query]);

  useEffect(() => {
    localStorage.setItem("isShortFilm", isShortFilm);
  }, [isShortFilm]);

  function getInitialVisibleCards() {
    const screenWidth = window.innerWidth;
    if (screenWidth >= 1279) {
      return 16;
    } else if (screenWidth >= 1040) {
      return 12;
    } else if (screenWidth >= 641) {
      return 8;
    } else {
      return 5;
    }
  }
  const handleShowMoreClick = () => {
    const screenWidth = window.innerWidth;
    if (screenWidth >= 1279) {
      setVisibleCards((prevVisibleCards) => prevVisibleCards + 4);
    } else if (screenWidth >= 1040) {
      setVisibleCards((prevVisibleCards) => prevVisibleCards + 3);
    } else {
      setVisibleCards((prevVisibleCards) => prevVisibleCards + 2);
    }
  };

  useEffect(() => {
    function handleResize() {
      setVisibleCards(getInitialVisibleCards());
    }

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const filterMovies = (query, isShortFilm) => {
    setIsLoading(true);

    let filteredMovies = movies;

    if (isShortFilm) {
      filteredMovies = filteredMovies.filter((movie) => movie.duration <= 40);
    }

    const filteredResults = filteredMovies.filter((movie) => {
      return (
        movie.nameRU.toLowerCase().includes(query.toLowerCase()) ||
        movie.nameEN.toLowerCase().includes(query.toLowerCase())
      );
    });

    setSearchResults(filteredResults);
    localStorage.setItem("searchResults", JSON.stringify(filteredResults));

    setTimeout(() => {
      setIsLoading(false);
    }, 300);
  };

  const handleSearch = async (query, isShortFilm) => {
    setIsLoading(true);
    let filteredMovies = movies;
    if (movies.length === 0) {
      filteredMovies = await getMovies();
    }
    console.log(movies)

    let searchResults;

    if (isShortFilm) {
      filteredMovies = movies.filter((movie) => movie.duration <= 40);
      searchResults = filteredMovies.filter((movie) => {
        return (
          movie.nameRU.toLowerCase().includes(query.toLowerCase()) ||
          movie.nameEN.toLowerCase().includes(query.toLowerCase())
        );
      });
    } else {
      searchResults = filteredMovies.filter((movie) => {
        return (
          movie.nameRU.toLowerCase().includes(query.toLowerCase()) ||
          movie.nameEN.toLowerCase().includes(query.toLowerCase())
        );
      });
    }
    setSearchResults(searchResults);
    setHasSearched(true);
    localStorage.setItem("searchResults", JSON.stringify(searchResults));
    setVisibleCards(getInitialVisibleCards());

    setTimeout(() => {
      setIsLoading(false);
    }, 800);
    return;
  };
    return (
        <main className='movies-section section'>
            <SearchForm
            query={query}
            setQuery={updateQuery}
            isShortFilm={isShortFilm}
            setIsShortFilm={updateIsShortFilm}
            onSearch={handleSearch}
            onFilter={filterMovies}/>
            {isLoading ? (
                <Preloader />
                ) : !movies || (hasSearched && searchResults.length === 0) ? (
                  <p className="movies__info">Ничего не найдено.</p>
                ) : (
                  <MoviesCardList
                    moviesList={searchResults.slice(0, visibleCards)}
                    isSavedMoviesPage={false}
                    savedMovies={savedMovies}
                    onSave={onSave}
                  />
                )}
            {searchResults === 0 || visibleCards < searchResults.length ? (
              // <button
              //   className={`addMoviesTable__button ${
              //     isLoading ? "addMoviesTable__button_off" : ""
              //   }`}
              //   onClick={handleShowMoreClick}
              // >
              //   Еще
              // </button>
              <div className='more'>
                <button id='more' className={`more__btn ${ isLoading ? 'd-none' : ''}`} type='button' onClick={handleShowMoreClick}>Ещё</button>
              </div>
        ) : null}
            
            
        </main>
    )
}

export default Movies