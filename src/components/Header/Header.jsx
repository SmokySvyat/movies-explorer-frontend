import './Header.css'
import { useNavigate } from "react-router-dom"
import { useLocation, Link } from "react-router-dom"
import { useEffect, useState } from 'react'
import Overlay from '../Overlay/Overlay'
import logo from '../../images/logo.svg'

function Header (props) {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 840);
  const [showOverlay, setShowOverlay] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const isLogin = props.loggedIn;

  const handleOpenOverlay = () => {
    setShowOverlay(true)
  }
  const handleCloseOverlay = () => {
    setShowOverlay(false);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 840);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const goToLogin = () => {
    navigate('/sign-in');
  };
  const goToRegister = () => {
    navigate('/sign-up')
  };


  const navMenu = () => {
    if (isLogin && isMobile) {
      return (
        <button className='burger' onClick={handleOpenOverlay}></button>
      )
    } else if (isLogin) {
      // console.log(`Если true ${isLogin}`)
      // console.log(location)
      return (
        <ul className='nav-list'>
          <li className='nav-list__item'>
            <Link
              className={location.pathname === '/movies' ? 'nav-list__btn_active link' : 'link'}
              to={'/movies'}>
              Фильмы
            </Link></li>

          <li className='nav-list__item'>
            <Link
              className={location.pathname === '/saved-movies' ? 'nav-list__btn_active link' : 'link'}
              to={'/saved-movies'}>
              Сохранённые фильмы
            </Link></li>
            
          <li className='nav-list__item'>
            <Link
              className={location.pathname === '/profile' ? 'nav-list__btn nav-list__btn_active link' : 'nav-list__btn link'}
              to={'/profile'}>
              Аккаунт
              <div className={
                location.pathname === '/' ? 'btn-img btn-img_landing' : 'btn-img'
                }></div>
            </Link></li>
        </ul>
      )
    } else {
      // console.log(`Если false ${isLogin}`)
      // console.log(location)
      return (
        <ul className='nav-list'>
          <li className='nav-list__item'>
            <button className='nav-list__btn nav-list__btn_registration' onClick={goToRegister}>
              Регистрация
            </button></li>
          <li className='nav-list__item'>
            <button className='nav-list__btn nav-list__btn_signin' onClick={goToLogin}>
              Войти
            </button></li>
        </ul>
      )
    }
  }
    return (
        <header className={location.pathname === '/' ? 'header header_landing' : 'header'}>
          <Link
            className='header__logo logo'
            to={'/'}>
            <img src={logo} alt='логотип проект'/>
          </Link>
          <nav className='header__nav'>
          {navMenu()}
          </nav>
          <Overlay isOpen={showOverlay} onClose={handleCloseOverlay}/>
        </header>
    )
}

export default Header