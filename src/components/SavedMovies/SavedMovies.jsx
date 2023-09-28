import './SavedMovies.css'
import MoviesCardList from '../Movies/MoviesCardList/MoviesCardList'
import {cards} from '../../utils/constants'

function SavedMovies () {
    return (
        <main className='movies-section section'>
            <MoviesCardList
                cards = {cards}
            />
        </main>
    )
}

export default SavedMovies