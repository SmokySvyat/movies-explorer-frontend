import './MoviesCardList.css'
import MoviesCard from '../MoviesCard/MoviesCard'

function MoviesCardList ({
    moviesList,
    isSavedMoviesPage,
    savedMovies,
    savedMoviesList,
    onSave,
    onDelete,
  }) {
    const cardsToRender = isSavedMoviesPage ? savedMoviesList : moviesList;

    return (
        <section className='movies'>
            <ul className='cards-list'>
            {cardsToRender.map((movie) => {
              return (
                <MoviesCard
                  movie={movie}
                  key={movie.id ?? movie._id}
                  isSavedMoviesPage={isSavedMoviesPage}
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