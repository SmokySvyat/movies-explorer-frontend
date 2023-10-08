import './Movies.css'
import { useEffect, useState } from 'react';
import MoviesCardList from './MoviesCardList/MoviesCardList'
import SearchForm from '../Movies/SearchForm/SearchForm'
import Preloader from './Preloader/Preloader';
import {
  CARDS_TO_ADD_DESKTOP,
  CARDS_TO_ADD_MOBILE,
  CARDS_TO_RENDER_DESKTOP,
  CARDS_TO_RENDER_MOBILE,
  CARDS_TO_RENDER_TABLET,
  DESKTOP_RES,
  DURATION_SHORT,
  MOBILE_RES
} from '../../utils/constants';

function Movies ({
  movies,
  savedMovies,
  onSave,
  getMovies,
  isLiked,
  setIsLiked
}) {
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
    if (screenWidth >= DESKTOP_RES) {
      return CARDS_TO_RENDER_DESKTOP;
    } else if (screenWidth >= MOBILE_RES) {
      return CARDS_TO_RENDER_TABLET;
    } else {
      return CARDS_TO_RENDER_MOBILE;
    }
  }
  const handleShowMoreClick = () => {
    const screenWidth = window.innerWidth;
    if (screenWidth >= DESKTOP_RES) {
      setVisibleCards((prevVisibleCards) => prevVisibleCards + CARDS_TO_ADD_DESKTOP);
    } else if (screenWidth >= MOBILE_RES) {
      setVisibleCards((prevVisibleCards) => prevVisibleCards + CARDS_TO_ADD_MOBILE);
    } else {
      setVisibleCards((prevVisibleCards) => prevVisibleCards + CARDS_TO_ADD_MOBILE);
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
      filteredMovies = filteredMovies.filter((movie) => movie.duration <= DURATION_SHORT);
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
      filteredMovies = movies.filter((movie) => movie.duration <= DURATION_SHORT);
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
                    savedMovies={savedMovies}
                    onSave={onSave}
                    isLiked={isLiked}
                    setliked={setIsLiked}
                  />
                )}
            {searchResults === 0 || visibleCards < searchResults.length ? (
              <div className='more'>
                <button id='more' className={`more__btn ${ isLoading ? 'd-none' : ''}`} type='button' onClick={handleShowMoreClick}>Ещё</button>
              </div>
        ) : null}
            
            
        </main>
    )
}

export default Movies