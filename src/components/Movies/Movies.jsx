import './Movies.css'
import MoviesCardList from './MoviesCardList/MoviesCardList'
import {cards} from '../../utils/constants'

function Movies () {
    return (
        <main className='movies-section section'>
            <MoviesCardList
                cards = {cards}
            />
        </main>
    )
}

export default Movies