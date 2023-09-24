import './Register.css'
import { Link } from "react-router-dom"
import logo from "../../images/logo.svg"

function Register (props) {
    return (
        <main className='register section'>
            <form name='registration' className='form'>
                <Link className='logo' to={'/'}><img src={logo} alt='логотип проект'/></Link>
                <h1 className='form__heading'>{props.title}</h1>

                <label className="form__label">Имя</label>
                <input
                    className="form__input"
                    id="name"
                    name='name'
                    type="text"
                    minLength="2"
                    maxLength="30"
                    pattern="^[a-zA-ZА-Яа-яЁёs]+$"
                    placeholder='Имя'
                    required></input>
                <label className="form__label">E-mail</label>
                <input
                    className="form__input"
                    id="email"
                    name='email'
                    type="email"
                    placeholder='E-mail'
                    required></input>
                <label className="form__label">Пароль</label>
                <input
                    className="form__input"
                    id="password"
                    name="password"
                    type="password"
                    pattern="^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$"
                    placeholder='Пароль'
                    required></input>
                    <span className='form__error'>Что-то пошло не так...</span>
                    <button className="form__btn" type="submit">
                        {props.btnValue}
                    </button>
                    <span className="form__span">Уже зарегистрированы? 
                        <Link className="link" to={'/sign-in'}> Войти</Link>
                    </span>
            </form>
        </main>
    )
}

export default Register