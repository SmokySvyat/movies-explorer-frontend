import './Portfolio.css';

function Portfolio() {
    return (
        <section className='portfolio'>
            <h2 className='portfolio__heading'>Портфолио</h2>
            <ul className='portfolio-list'>
                <li className='portfolio-list__item'>
                    <a href='https://github.com/SmokySvyat/how-to-learn' target='blank' className='text'>Статичный сайт</a>
                    <span className='span'>↗</span>
                </li>
                <li className='portfolio-list__item'>
                    <a href='https://smokysvyat.github.io/russian-travel/' target='blank' className='text'>Адаптивный сайт</a>
                    <span className='span'>↗</span>
                </li>
                <li className='portfolio-list__item'>
                    <a href='https://github.com/SmokySvyat/react-mesto-api-full-gha' target='blank' className='text'>Одностраничное приложение</a>
                    <span className='span'>↗</span>
                </li>
            </ul>
        </section>
    )
}

export default Portfolio;