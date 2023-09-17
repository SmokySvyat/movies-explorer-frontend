import './SearchForm.css';

function SearchForm () {
    return (
        <section className='search-form'>
            <form className='form'>
                <div className='search'>
                    <span className='form__ico'></span>
                    <input className='form__input' type='serch' placeholder='Фильм'></input>
                </div>
                <div className='controls'>
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
        </section>
    )
}

export default SearchForm;