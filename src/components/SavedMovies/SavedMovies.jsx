import './SavedMovies.css'
import SearchForm from '../Movies/SearchForm/SearchForm'
function SavedMovies () {
    return (
        <main className='movies-section section'>
            <SearchForm />
            <ul className='cards-list'>
                
            </ul>
            <div className='more'>
                    <button className='more__btn' type='button'>Ещё</button>
            </div>
        </main>
    )
}

export default SavedMovies