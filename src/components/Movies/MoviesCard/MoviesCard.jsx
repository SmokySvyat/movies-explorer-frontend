import './MoviesCard.css'

function MoviesCard ({ card }) {
    function saveMovie  () {

    }
    return (
        <div className='card'>
            <div className='card__save' onClick={saveMovie}>Сохранить</div>
            <img className='card__img' src={card.image} alt=''></img>
            <p className='card__title'>{card.nameRU}</p>
            <p className='card__duration'>{card.duration}</p>
        </div>
    )
}

export default MoviesCard;