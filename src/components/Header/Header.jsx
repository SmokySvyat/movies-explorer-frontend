import './Header.css'
import logo from '../../images/logo.svg'
import ico__ak from '../../images/ico__ak.svg'

function Header () {
    return (
        <header className='header'>
          <a className='header__logo'><img src={logo} alt='логотип проект' /></a>
          <nav className='header__nav'>
            <ul className='nav-list'>
                <li className='nav-list__item'><button className='nav-list__btn'>Фильмы</button></li>
                <li className='nav-list__item'><button className='nav-list__btn'>Сохранённые фильмы</button></li>
                <li className='nav-list__item'><button className='nav-list__btn'>Аккаунт<div className='btn-img'></div></button></li>
            </ul>
            {/* <ul className='nav-list'>
                <li className='nav-list__item'><button className='nav-list__btn'>Регистрация</button></li>
                <li className='nav-list__item'><button className='nav-list__btn signin'>Вход</button></li>
            </ul> */}
          </nav>
        </header>
    )
}

export default Header