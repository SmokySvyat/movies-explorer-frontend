import './SavedMovies.css'
import MoviesCardList from '../Movies/MoviesCardList/MoviesCardList'
import {cards} from '../../utils/constants'
import SearchForm from '../Movies/SearchForm/SearchForm'

function SavedMovies () {
    return (
        <main className='movies-section section'>
            <SearchForm />
            <MoviesCardList
                cards = {cards}
            />
        </main>
    )
}

export default SavedMovies