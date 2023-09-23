import './Portfolio.css';

function Portfolio() {
    return (
        <section className='portfolio'>
            <h2 className='portfolio__heading'>Портфолио</h2>
            <ul className='portfolio-list'>
                <li className='portfolio-list__item'>
                    <a href='https://github.com/SmokySvyat/how-to-learn' target='blank' className='text'>Статичный сайт</a>
                    <a href='https://github.com/SmokySvyat/how-to-learn' target='blank' className='span'>↗</a>
                </li>
                <li className='portfolio-list__item'>
                    <a href='https://smokysvyat.github.io/russian-travel/' target='blank' className='text'>Адаптивный сайт</a>
                    <a href='https://smokysvyat.github.io/russian-travel/' target='blank' className='span'>↗</a>
                </li>
                <li className='portfolio-list__item'>
                    <a href='https://github.com/SmokySvyat/react-mesto-api-full-gha' target='blank' className='text'>Одностраничное приложение</a>
                    <a href='https://github.com/SmokySvyat/react-mesto-api-full-gha' target='blank' className='span'>↗</a>
                </li>
            </ul>
        </section>
    )
}

export default Portfolio;