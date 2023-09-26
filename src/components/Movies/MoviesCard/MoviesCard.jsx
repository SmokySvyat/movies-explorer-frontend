import './MoviesCard.css'

function MoviesCard ({ card }) {
    function saveMovie  () {

    }
    return (
        <li className='card'>
            <div className='card__save' onClick={saveMovie}>Сохранить</div>
            <img className='card__img' src={card.image} alt={card.description}></img>
            <h2 className='card__title'>{card.nameRU}</h2>
            <p className='card__duration'>{card.duration}</p>
        </li>
    )
}

export default MoviesCard;