import SearchForm from '../Movies/SearchForm/SearchForm'
import './SavedMovies.css'
function SavedMovies () {
    return (
        <main className='saved-movies section'>
            <SearchForm />
            <ul className='saved-movies__list section'>

            </ul>
            <div className='more'>
                    <button className='more__btn d-none' type='button'>Ещё</button>
            </div>
        </main>
    )
}

export default SavedMovies