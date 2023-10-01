import './Movies.css'
import MoviesCardList from './MoviesCardList/MoviesCardList'
import SearchForm from '../Movies/SearchForm/SearchForm'
import {cards} from '../../utils/constants'

function Movies () {
    return (
        <main className='movies-section section'>
            <SearchForm />
            <MoviesCardList
                cards = {cards}
            />
        </main>
    )
}

export default Movies