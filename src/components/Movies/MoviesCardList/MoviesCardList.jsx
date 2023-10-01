import './MoviesCardList.css'
import React, { useState, useEffect } from "react";
import Preloader from '../Preloader/Preloader'
import MoviesCard from '../MoviesCard/MoviesCard'

function MoviesCardList ({
    moviesList,
  isSavedMoviesPage,
  savedMovies,
  savedMoviesList,
  onSave,
  onDelete,
}) {
    const moviesToRender = isSavedMoviesPage ? savedMoviesList : moviesList;
    const resolution = window.innerWidth;

    const [visibleCards, setVisibleCards] = useState(getVisibleItems());
    function getVisibleItems () {
        if (resolution >= 1280) {
            return 12;
        } else if ( resolution > 320 && resolution < 1280) {
            return 8;
        } else {
            return 5;
        }
    }

    function toggleMoreBtn(moviesToRender) {
        getVisibleItems()
        console.log(moviesToRender)
        if (moviesToRender.length <= visibleCards) {
            document.querySelector('.more__btn').classList.add('d-none')
        }
    }

    // function render (cards) {
    //     console.log(cards)
    //     // console.log(visibleCards)
    //     const arr = cards.slice(0, visibleCards);
    //     toggleMoreBtn(cards, arr)
    //     return (
    //         arr.map((card) => {
    //             return (
    //                 <MoviesCard
    //                     card={card}
    //                     key={card.movieId}
    //                 />
    //             )
    //     }))
    // }
    const handleShowMore = () => {
        if (resolution >= 1280) {
          setVisibleCards((prevVisibleCards) => prevVisibleCards + 3);
        } else if (resolution > 320 && resolution < 1280) {
          setVisibleCards((prevVisibleCards) => prevVisibleCards + 2);
        } else {
          setVisibleCards((prevVisibleCards) => prevVisibleCards + 2);
        }
    };

    return (
        <section className='movies'>
            <ul className='cards-list'>
            {moviesToRender.map((movie) => {
                // toggleMoreBtn()
        return (
          <MoviesCard
            movie={movie}
            key={movie.id ?? movie._id}
            isSavedMoviesPage={isSavedMoviesPage}
            savedMovies={savedMovies}
            onSave={onSave}
            onDelete={onDelete}
          />
        );
      })}
                {/* {render(cards)} */}
            </ul>
            <div className='more'>
                    <button id='more' className='more__btn' type='button' onClick={handleShowMore}>Ещё</button>
            </div>
        </section>
    )
}

export default MoviesCardList;