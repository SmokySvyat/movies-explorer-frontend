import './Header.css'
import logo from '../../images/logo.svg'

function Header () {
    return (
        <header className='header'>
          <a href='/' className='header__logo'><img src={logo} alt='логотип проект' /></a>
          <nav className='header__nav'>
            <ul className='nav-list'>
                <li className='nav-list__item'><a href='/movies' className='nav-list__btn nav-list__btn_active link'>Фильмы</a></li>
                <li className='nav-list__item'><button className='nav-list__btn'>Сохранённые фильмы</button></li>
                <li className='nav-list__item'><button className='nav-list__btn'>Аккаунт<div className='btn-img'></div></button></li>
            </ul>
            {/* <ul className='nav-list'>
                <li className='nav-list__item'><button className='nav-list__btn nav-list__btn_registration'>Регистрация</button></li>
                <li className='nav-list__item'><button className='nav-list__btn nav-list__btn_signin'>Вход</button></li>
            </ul> */}
          </nav>
        </header>
    )
}

export default Header