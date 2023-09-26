import './Login.css'
import { Link } from "react-router-dom"
import logo from "../../images/logo.svg"

function Login (props) {
    return (
        <main className='section login'>
            <form name='login' className='form'>
                <Link className='logo' to={'/'}><img src={logo} alt='логотип проект'/></Link>
                <h1 className='form__heading'>{props.title}</h1>

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
                    minLength={8}
                    maxLength={12}
                    pattern="^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$"
                    placeholder='Пароль'
                    required></input>

                <span className='form__error login__span-error'>Что-то пошло не так...</span>
                    <button className="form__btn login__btn" type="submit">
                        {props.btnValue}
                    </button>
                    <span className="form__span">Ещё не зарегистрированы? 
                        <Link className="link" to={'/signup'}> Регистрация</Link>
                </span>
            </form>
        </main>
    )
}

export default Login