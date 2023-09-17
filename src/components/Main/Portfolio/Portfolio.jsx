import './Portfolio.css';

function Portfolio() {
    return (
        <section className='portfolio'>
            <h2 className='portfolio__heading'>Портфолио</h2>
            <ul className='portfolio-list'>
                <li className='portfolio-list__item'>
                    <a href='#' target='blank' className='text'>Статичный сайт</a>
                    <a href='' target='blank' className='span'>↗</a>
                </li>
                <li className='portfolio-list__item'>
                    <a href='#' target='blank' className='text'>Адаптивный сайт</a>
                    <a href='' target='blank' className='span'>↗</a>
                </li>
                <li className='portfolio-list__item'>
                    <a href='#' target='blank' className='text'>Одностраничное приложение</a>
                    <a href='' target='blank' className='span'>↗</a>
                </li>
            </ul>
        </section>
    )
}

export default Portfolio;