import './Overlay.css'
import { useLocation, Link } from "react-router-dom"

function Overlay () {
    const location = useLocation();
    return (
        <div className='overlay'>
            <nav className='overlay__nav'>
                <button className='cross'></button>
                <ul className='nav-list nav-list_overlay'>
                    <li className='nav-list__item_overlay'>
                        <Link
                          className={location.pathname === '/' ? 'overlay__link_active overlay__link' : 'overlay__link'}
                          to={'/'}>
                          Главная
                        </Link></li>

                    <li className='nav-list__item_overlay'>
                        <Link
                          className={location.pathname === '/movies' ? 'overlay__link_active overlay__link' : 'overlay__link'}
                          to={'/movies'}>
                          Фильмы
                        </Link></li>

                    <li className='nav-list__item_overlay'>
                        <Link
                          className={location.pathname === '/saved-movies' ? 'overlay__link_active overlay__link' : 'overlay__link'}
                          to={'/saved-movies'}>
                          Сохранённые фильмы
                        </Link></li>

                    <li className={location.pathname === '/profile' ? 'overlay__btn overlay__link_active' : 'nav-list__item'}>
                        <Link
                          className='overlay__btn'
                          to={'/profile'}>
                          Аккаунт
                          <div className={
                            location.pathname === '/' ? 'btn-img' : 'btn-img'
                            }></div>
                        </Link></li>
                </ul>
            </nav>
        </div>
    )
}

export default Overlay;