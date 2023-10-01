import './SearchForm.css';

function SearchForm () {
    return (
        <section className='search'>
            <form className='search-form'>
                <div className='search-items'>
                    <span className='search__ico'></span>
                    <input className='search__input' type='search' placeholder='Фильм' required></input>
                    <input className='search__submit-btn' type='submit' value='Найти'></input>
                </div>
                <div className='control-items'>
                    <label className='switch'>
                        <input className='checkbox' type='checkbox'></input>
                        <span className='slider'></span>
                    </label>
                    <label className='label'>Короткометражки</label>
                </div>
            </form>
        </section>
    )
}

export default SearchForm;