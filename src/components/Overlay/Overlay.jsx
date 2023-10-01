import './Overlay.css'
import { useLocation, Link } from "react-router-dom"

function Overlay (props) {
    const location = useLocation();
    const className = `overlay${props.isOpen ? '' : ' d-none'}`
    return (
        <div className={className}>
            <nav className='overlay__nav'>
                <button className='cross' type='button' onClick={props.onClose}></button>
                <ul className='nav-list nav-list_overlay'>
                    <li className='nav-list__item-overlay'>
                        <Link
                          className={location.pathname === '/' ? 'overlay__link_active overlay__link' : 'overlay__link'}
                          to={'/'}
                          onClick={props.onClose}>
                          Главная
                        </Link></li>

                    <li className='nav-list__item-overlay'>
                        <Link
                          className={location.pathname === '/movies' ? 'overlay__link_active overlay__link' : 'overlay__link'}
                          to={'/movies'}
                          onClick={props.onClose}>
                          Фильмы
                        </Link></li>

                    <li className='nav-list__item-overlay'>
                        <Link
                          className={location.pathname === '/saved-movies' ? 'overlay__link_active overlay__link' : 'overlay__link'}
                          to={'/saved-movies'}
                          onClick={props.onClose}>
                          Сохранённые фильмы
                        </Link></li>

                    <li className={'nav-list__item'}>
                        <Link
                          className='overlay__btn'
                          to={'/profile'}
                          onClick={props.onClose}>
                          Аккаунт
                          <div className={'btn-img'}></div>
                        </Link></li>
                </ul>
            </nav>
        </div>
    )
}

export default Overlay;