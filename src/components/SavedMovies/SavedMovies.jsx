import SearchForm from '../Movies/SearchForm/SearchForm'
import './SavedMovies.css'
function SavedMovies () {
    return (
        <main className='movies section'>
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