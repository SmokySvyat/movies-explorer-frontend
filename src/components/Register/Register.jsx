import './Register.css'
import logo from "../../images/logo.svg"

function Register (props) {
    return (
        <main className='register section'>
            <a href='/' className='register__logo'><img src={logo} alt='логотип проект'/></a>
            <h1 className='register__heading'>{props.title}</h1>

            <form name='registration' className='form'>
            <label class="form__label" for="name">Имя</label>
            <input
                class="form__input"
                id="name"
                name='name'
                type="text"
                minlength="2"
                maxlength="30"
                pattern="^[a-zA-ZА-Яа-яЁёs]+$"
                placeholder='Имя'
                required></input>
            <label class="form__label" for="email">E-mail</label>
            <input
                class="form__input"
                id="email"
                name='email'
                type="email"
                placeholder='E-mail'
                required></input>
            <label class="form__label" for="password">Пароль</label>
            <input
                class="form__input"
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
                <span className="form__span">Уже зарегистрированны? 
                    <a className="link"> Войти</a>
                </span>
            </form>
        </main>
    )
}

export default Register