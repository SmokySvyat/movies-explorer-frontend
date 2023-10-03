import './MoviesCard.css'
import { useState } from 'react';
import { useLocation } from "react-router-dom"
import { Link } from "react-router-dom";
import { BASE_IMG_URL } from '../../../utils/constants';

function MoviesCard ({
    movie,
    isSavedMoviesPage,
    savedMovies,
    onSave,
    onDelete,
  }) {
    const location = useLocation();
    const imageURL = isSavedMoviesPage
      ? movie.image
      : BASE_IMG_URL + movie.image.url;
    const isLiked =
    // console.log(savedMovies)
      !isSavedMoviesPage && savedMovies.some((item) => item.movieId === movie.id);
    // console.log(`is liked ${isLiked}`)
  
    function handleSaveClick() {
      onSave(movie);
    }
  
    function handleDeliteClick() {
      onDelete(movie);
    }
    function convertFromMinutes(minutes) {
      const hours = Math.floor(minutes / 60);
      const remainingMinutes = minutes % 60;
      return `${hours}ч ${remainingMinutes}м`;
    }
    const convertedDuration = convertFromMinutes(movie.duration);

    const isLocationSavedMovies = () => {
        if (location.pathname === '/saved-movies'){
            return true
        } else {return false}
    }

    const isSavedPage = isLocationSavedMovies()
    const classNameMovies =  isLiked ? 'card__save_check card__save' : 'card__save';
    const classNameSavedMovies = isLocationSavedMovies ? 'card__save_delete card__save' : 'card__save'
    // console.log(`location ${isSavedPage}`)
    return (
        <li className='card'>
            <div
              className={isSavedPage ? classNameSavedMovies : classNameMovies}
              onClick={isSavedPage ? handleDeliteClick : handleSaveClick}
            >
              {isSavedPage? '' : !isLiked ? 'Сохранить' : ''}
            </div>
            <Link className='card__img' to={movie.trailerLink} target='_blank' rel='noopener noreferrer'>
              <img className='card__img' src={imageURL} alt={movie.description}></img>
            </Link>
            <h2 className='card__title'>{movie.nameRU}</h2>
            <p className='card__duration'>{convertedDuration}</p>
        </li>
    )
}

export default MoviesCard;