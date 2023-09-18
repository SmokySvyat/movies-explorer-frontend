import './SearchForm.css';

function SearchForm () {
    return (
        <div className='search'>
            <form className='search-form'>
                <div className='search-items'>
                    <span className='search__ico'></span>
                    <input className='search__input' type='serch' placeholder='Фильм'></input>
                </div>
                <div className='control-items'>
                    <input className='form__submit-btn' type='submit' value='Найти'></input>
                    <div className='line'></div>
                    <label className='switch'>
                        <input className='checkbox' type='checkbox'></input>
                        <span className='slider'></span>
                    </label>
                    <label className='label'>Короткометражки</label>
                </div>
            </form>
            <div className='brake'></div>
        </div>
    )
}

export default SearchForm;