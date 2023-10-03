import './Login.css'
import React from "react";
import { Link } from "react-router-dom"
import logo from "../../images/logo.svg"

function Login ({ title, btnValue, handleLogin, errorMessage, isLoading }) {
    const [formValue, setFormValue] = React.useState({
        email: "",
        password: "",
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValue({
          ...formValue,
          [name]: value,
        });
      };
    
      const { email, password } = formValue;
    
      // const [errorMessage, setErrorMessage] = React.useState("");
    
      const handleSubmit = (e) => {
        e.preventDefault();
        handleLogin({ email, password });
      };
    return (
        <main className='section login'>
            <form name='login' className='form' onSubmit={handleSubmit}>
                <Link className='logo' to={'/'}><img src={logo} alt='логотип проект'/></Link>
                <h1 className='form__heading'>{title}</h1>

                <label className="form__label">E-mail</label>
                <input
                    className="form__input"
                    onChange={handleChange}
                    id="email"
                    name='email'
                    type="email"
                    placeholder='E-mail'
                    disabled={isLoading}
                    required></input>
                <label className="form__label">Пароль</label>
                <input
                    className="form__input"
                    onChange={handleChange}
                    id="password"
                    name="password"
                    type="password"
                    minLength={8}
                    maxLength={12}
                    pattern="^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$"
                    placeholder='Пароль'
                    disabled={isLoading}
                    required></input>

                <span className='form__error login__span-error'>{errorMessage}</span>
                    <button className="form__btn login__btn" type="submit" disabled={isLoading}>
                        {btnValue}
                    </button>
                    <span className="form__span">Ещё не зарегистрированы? 
                        <Link className="link" to={'/signup'}> Регистрация</Link>
                </span>
            </form>
        </main>
    )
}

export default Login