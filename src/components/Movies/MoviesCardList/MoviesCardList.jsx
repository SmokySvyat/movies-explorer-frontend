import './MoviesCardList.css'
import Preloader from '../Preloader/Preloader'
import MoviesCard from '../MoviesCard/MoviesCard';
import card from '../../../utils/constants'

function MoviesCardList () {
    return (
        <section className='movies'>
            {/* <Preloader /> */}
            <ul className='cards-list'>
                {card.map((car) => {
                    return(
                        <MoviesCard
                            card = {car}
                            key = {car.movieId}
                        />
                    )
                })}
            </ul>
        </section>
    )
}

export default MoviesCardList;