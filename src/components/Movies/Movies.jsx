import './Movies.css'
import SearchForm from './SearchForm/SearchForm'
import MoviesCardList from './MoviesCardList/MoviesCardList'

function Movies () {
    return (
        <main className='movies section'>
            <SearchForm />
            <MoviesCardList />
        </main>
    )
}

export default Movies