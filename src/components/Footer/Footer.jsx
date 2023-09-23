import './Footer.css'

function Footer () {
    return (
        <footer className='footer'>
            <h2 className='footer__heading'>
                Учебный проект Яндекс.Практикум х BeatFilm.
            </h2>
            <p className='copyrights'>Нестеров Святослав © 2023</p>
            <nav className='footer__nav'>
                <ul className='nav-list'>
                    <li className='nav-list__item'><a className='footer__link link' href='https://practicum.yandex.ru/' target='blank'>Яндекс.Практикум</a></li>
                    <li className='nav-list__item'><a className='footer__link link' href='https://github.com/SmokySvyat' target='blank'>Github</a></li>
                </ul>
            </nav>
        </footer>
    )
}

export default Footer