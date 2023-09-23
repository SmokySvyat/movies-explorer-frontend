import './Login.css'
import { useNavigate } from "react-router-dom"
import logo from "../../images/logo.svg"

function Login (props) {
    const navigate = useNavigate();

    const goToRegister = () => {
        navigate("/sign-up");
    };
    const goToMain = () => {
        navigate("/")
    };

    return (
        <main className='section'>
            <form name='registration' className='form'>
                <a className='logo' onClick={goToMain}><img src={logo} alt='логотип проект'/></a>
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
                    pattern="^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$"
                    placeholder='Пароль'
                    required></input>

                <span className='form__error login__span-error d-none'>Что-то пошло не так...</span>
                    <button className="form__btn login__btn" type="submit">
                        {props.btnValue}
                    </button>
                    <span className="form__span">Ещё не зарегистрированы? 
                        <a className="link" onClick={goToRegister}> Регистрация</a>
                </span>
            </form>
        </main>
    )
}

export default Login