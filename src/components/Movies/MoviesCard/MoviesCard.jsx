import './MoviesCard.css'
import { useState } from 'react';
import { useLocation } from "react-router-dom"

function MoviesCard ({ card }) {
    const [isLiked, setIsLiked] = useState(false);
    const location = useLocation();
    
    const isLocationSavedMovies = () => {
        if (location.pathname === '/saved-movies'){
            return true
        } else {return false}
    }
    const isLikedInSaved = isLiked && isLocationSavedMovies()
    const classNameMovies =  isLiked ? 'card__save_check card__save' : 'card__save';
    const classNameSavedMovies = isLikedInSaved ? 'card__save_delete card__save' : 'card__save'

    function saveMovie  () {
        if (!isLiked) {
            setIsLiked(true)
        } else {
            setIsLiked(false)
        }
    }
    return (
        <li className='card'>
            <div className={isLikedInSaved ? classNameSavedMovies : classNameMovies} onClick={saveMovie}>{!isLiked ? 'Сохранить' : ''}</div>
            <img className='card__img' src={card.image} alt={card.description}></img>
            <h2 className='card__title'>{card.nameRU}</h2>
            <p className='card__duration'>{card.duration}</p>
        </li>
    )
}

export default MoviesCard;