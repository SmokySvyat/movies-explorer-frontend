import './MoviesCardList.css'
import MoviesCard from '../MoviesCard/MoviesCard'
import { useLocation } from "react-router-dom"

function MoviesCardList ({
    moviesList,
    savedMovies,
    savedMoviesList,
    onSave,
    onDelete,
  }) {
    const location = useLocation();
    const isLocationSavedMovies = () => {
        if (location.pathname === '/saved-movies'){
            return true
        } else {return false}
    }
    const cardsToRender = isLocationSavedMovies() ? savedMoviesList : moviesList;

    return (
        <section className='movies'>
            <ul className='cards-list'>
            {cardsToRender.map((movie) => {
              return (
                <MoviesCard
                  key={movie.id ?? movie._id}
                  isSavedPage={isLocationSavedMovies()}
                  movie={movie}
                  savedMovies={savedMovies}
                  onSave={onSave}
                  onDelete={onDelete}
                />
              )
            })
            }
            </ul>
            
        </section>
    )
}

export default MoviesCardList;