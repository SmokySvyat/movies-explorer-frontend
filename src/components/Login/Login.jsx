import './Login.css'
import React from "react";
import { Link } from "react-router-dom"
import logo from "../../images/logo.svg"
import { EMAIL_LENGTH_MAX, EMAIL_LENGTH_MIN, EMAIL_REGEXP, PASSWORD_LENGTH_MIN, PASSWORD_REGEXP } from '../../utils/constants';

function Login ({ title, btnValue, handleLogin, errorMessage, isLoading }) {
    const [formValue, setFormValue] = React.useState({
        email: "",
        password: "",
      });
    const { password, email } = formValue;
    const [isFormValid, setIsFormValid] = React.useState(false);
    const [isFormEmpty, setIsFormEmpty] = React.useState(true);
    
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormValue({
        ...formValue,
        [name]: value,
      });
    };
    
    const handleSubmit = (e) => {
      e.preventDefault();
      handleLogin({ email, password });
    };

    const isEmailValid = () => { return EMAIL_REGEXP.test(email.trim()) && email.trim().length >= EMAIL_LENGTH_MIN && email.trim().length <= EMAIL_LENGTH_MAX };
    const isPasswordValid = () => { return PASSWORD_REGEXP.test(password.trim()) && password.trim().length >= PASSWORD_LENGTH_MIN };
    const emailClassName = isEmailValid() ? 'form__input' : 'form__input form__input_on-error';
    const passwordClassName = isPasswordValid() ? 'form__input' : 'form__input form__input_on-error';

    React.useEffect(() => {
        const isInputValid = () => {
            return isEmailValid() && isPasswordValid();
      };
    
      setIsFormValid(isInputValid());
      setIsFormEmpty(
        email.trim() === "" || password.trim() === ""
      );
    }, [email, password]);

    const isBtnDisabled = () => {
        return isLoading || isFormEmpty || !isFormValid
    }

    return (
        <main className='section login'>
            <form name='login' className='form' onSubmit={handleSubmit}>
                <Link className='logo' to={'/'}><img src={logo} alt='логотип проект'/></Link>
                <h1 className='form__heading'>{title}</h1>

                <label className="form__label">E-mail</label>
                <input
                    className={emailClassName}
                    onChange={handleChange}
                    id="email"
                    name='email'
                    type="email"
                    placeholder='E-mail'
                    disabled={isLoading}
                    required></input>
                <label className="form__label">Пароль</label>
                <input
                    className={passwordClassName}
                    onChange={handleChange}
                    id="password"
                    name="password"
                    type="password"
                    minLength={8}
                    maxLength={20}
                    placeholder='Пароль'
                    disabled={isLoading}
                    required></input>

                <span className='form__error login__span-error'>{errorMessage}</span>
                    <button className="form__btn login__btn" type="submit" disabled={isBtnDisabled()}>
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