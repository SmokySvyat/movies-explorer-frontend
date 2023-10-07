import './MoviesCard.css'
import { Link } from "react-router-dom";
import { BASE_IMG_URL } from '../../../utils/constants';

function MoviesCard ({
    isSavedPage,
    movie,
    savedMovies,
    onSave,
    onDelete,
  }) {
    const isLiked = !isSavedPage && savedMovies.some((item) => item.movieId === movie.id);
    const classNameMovies =  isLiked ? 'card__save_check card__save' : 'card__save';
    const classNameSavedMovies = isSavedPage ? 'card__save_delete card__save' : 'card__save'
    const imageURL = isSavedPage ? movie.image : BASE_IMG_URL + movie.image.url;
  
    function handleSaveClick() {
      onSave(movie);
    }
  
    function handleDeliteClick() {
      onDelete(movie);
    }
    function convertFromMinutes(duration) {
      const hours = Math.floor(duration / 60);
      const minutes = duration % 60;
      if (hours) {
        return `${hours}ч ${minutes}м`;
      } else {
        return `${minutes}м`;
      }
    }
    const convertedDuration = convertFromMinutes(movie.duration);


    return (
        <li className='card'>
            <div
              className={isSavedPage ? classNameSavedMovies : classNameMovies}
              onClick={isSavedPage ? handleDeliteClick : handleSaveClick}
              title={isSavedPage ? 'Удалить из профиля' : !isLiked ? 'Добавить к себе в профиль' : 'Удалить из профиля'}
            >
              {isSavedPage? '' : !isLiked ? 'Сохранить' : ''}
            </div>
            <Link className='card__img' to={movie.trailerLink} target='blank' title={movie.description}>
              <img className='card__img' src={imageURL} alt={movie.nameRU}></img>
            </Link>
            <h2 className='card__title' title={movie.nameRU}>{movie.nameRU}</h2>
            <p className='card__duration'>{convertedDuration}</p>
        </li>
    )
}

export default MoviesCard;