import './SavedMovies.css'
import { useState, useEffect } from 'react'
import MoviesCardList from '../Movies/MoviesCardList/MoviesCardList'
import SearchForm from '../Movies/SearchForm/SearchForm'
import { DURATION_SHORT } from '../../utils/constants';

function SavedMovies ({ movies, onDelete }) {
  useEffect(() => {
    localStorage.setItem("currentPath", "/saved-movies");
  }, []);
  const [query, setQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [isShortFilm, setIsShortFilm] = useState(false);

    useEffect(() => {
    filterMovies(query, isShortFilm);
  }, [movies, query, isShortFilm]);

  const handleSearch = (newQuery, newIsShortFilm) => {
    setIsShortFilm(newIsShortFilm);

    const filteredMovies = movies.filter((movie) => {
      const includesQuery =
        movie.nameRU.toLowerCase().includes(newQuery.toLowerCase()) ||
        movie.nameEN.toLowerCase().includes(newQuery.toLowerCase());

      if (newIsShortFilm) {
        return includesQuery && movie.duration <= DURATION_SHORT;
      } else {
        return includesQuery;
      }
    });

    setSearchResults(filteredMovies);
  };
  const filterMovies = (query, isShortFilm) => {
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
  };

    return (
        <main className='movies-section section'>
            <SearchForm
              query={query}
              setQuery={setQuery}
              isShortFilm={isShortFilm}
              setIsShortFilm={setIsShortFilm}
              onSearch={handleSearch}
              onFilter={filterMovies}
            />
            <MoviesCardList
              savedMoviesList={searchResults}
              onDelete={onDelete}
            />{' '}
        </main>
    )
}

export default SavedMovies