import './SearchForm.css';

function SearchForm ({
    query,
    setQuery,
    isShortFilm,
    setIsShortFilm,
    onSearch,
    onFilter,
  }) {
    const handleInputChange = (event) => {
        setQuery(event.target.value);
      };
    
      const handleShortFilmToggle = () => {
        setIsShortFilm(!isShortFilm);
        onFilter(query, !isShortFilm);
      };
    
      const handleSubmit = (event) => {
        event.preventDefault();
    
        onSearch(query, isShortFilm);
      };
      const handleInputKeyDown = (event) => {
        if (event.key === "Enter") {
          handleSubmit(event);
        }
      };
      
    return (
        <section className='search'>
            <form className='search-form' onSubmit={handleSubmit}>
                <div className='search-items'>
                    <span className='search__ico'></span>
                    <input className='search__input'
                        placeholder='Фильм'
                        required
                        value={query}
                        onChange={handleInputChange}
                        onKeyDown={handleInputKeyDown}
                    ></input>
                    <input className='search__submit-btn' type='submit' value='Найти'></input>
                </div>
                <div className='control-items'>
                    <label className='switch'>
                        <input className='checkbox' type='checkbox' onChange={handleShortFilmToggle} checked={isShortFilm}></input>
                        <span className='slider'></span>
                    </label>
                    <label className='label'>Короткометражки</label>
                </div>
            </form>
        </section>
    )
}

export default SearchForm;