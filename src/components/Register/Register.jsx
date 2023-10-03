import './Register.css'
import React from "react";
import { Link } from "react-router-dom"
import logo from "../../images/logo.svg"

function Register ({title, btnValue, handleRegister, errorMessage, isLoading}) {
    const [formValue, setFormValue] = React.useState({
        name: "",
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

    const { name, password, email } = formValue;

    const handleSubmit = (e) => {
        e.preventDefault();
        handleRegister({ name, password, email });
      };

    return (
        <main className='register section'>
            <form name='registration' className='form' onSubmit={handleSubmit}>
                <Link className='logo' to={'/'}><img src={logo} alt='логотип проект'/></Link>
                <h1 className='form__heading'>{title}</h1>

                <label className="form__label">Имя</label>
                <input
                    className="form__input"
                    onChange={handleChange}
                    id="name"
                    name='name'
                    type="text"
                    minLength="2"
                    maxLength="30"
                    pattern="^[a-zA-ZА-Яа-яЁёs]+$"
                    placeholder='Имя'
                    disabled={isLoading}
                    required></input>
                <label className="form__label">E-mail</label>
                <input
                    className="form__input"
                    onChange={handleChange}
                    id="email"
                    name='email'
                    type="email"
                    placeholder='E-mail'
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
                    <span className='form__error'>{errorMessage}</span>
                    <button className="form__btn" type="submit" disabled={isLoading}>
                        {btnValue}
                    </button>
                    <span className="form__span">Уже зарегистрированы? 
                        <Link className="link" to={'/signin'}> Войти</Link>
                    </span>
            </form>
        </main>
    )
}

export default Register