import './Register.css'
import React from "react";
import { Link } from "react-router-dom"
import logo from "../../images/logo.svg"
import {
    NAME_REGEXP,
    EMAIL_REGEXP,
    PASSWORD_REGEXP,
    ERROR_NAME_PATTERN,
    ERROR_EMAIL_PATTERN,
    ERROR_PASSWORD_PATTERN,
    LENGTH_MIN,
    LENGTH_MAX,
    PASSWORD_LENGTH_MIN,
    EMAIL_LENGTH_MIN,
    EMAIL_LENGTH_MAX
} from '../../utils/constants';

function Register ({
    title,
    btnValue,
    handleRegister,
    errorMessage,
    setErrorMessage,
    isLoading
}) {
    const [formValue, setFormValue] = React.useState({
        name: "",
        email: "",
        password: "",
    });
    const { name, password, email } = formValue;
    const [isFormValid, setIsFormValid] = React.useState(false);
    const [isFormEmpty, setIsFormEmpty] = React.useState(true);
    const [nameClassName, setNameClassName] = React.useState('form__input');
    const [emailClassName, setEmailClassName] = React.useState('form__input');
    const [passwordClassName, setPasswordClassName] = React.useState('form__input');

    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormValue({
        ...formValue,
        [name]: value,
      });
      handleToggleInputsClassNameAndErrors(name);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        handleRegister(formValue);
    };

    const isNameValid = () => {
        return (
            name.trim().length >= LENGTH_MIN
                &&
            name.trim().length <= LENGTH_MAX
                &&
            NAME_REGEXP.test(name.trim())
        )
    }
    const isEmailValid = () => {
        return (
            EMAIL_REGEXP.test(email.trim())
                &&
            email.trim().length >= EMAIL_LENGTH_MIN
                &&
            email.trim().length <= EMAIL_LENGTH_MAX
        )
    };
    const isPasswordValid = () => {
        return (
            PASSWORD_REGEXP.test(password.trim())
                &&
            password.trim().length >= PASSWORD_LENGTH_MIN
        )
    };

    const handleToggleInputsClassNameAndErrors = (inputName) => {
        switch (inputName) {
          case 'name':
            setNameClassName((isNameValid() || inputName.trim() === "" ) ?
            'form__input' : 'form__input form__input_on-error');
            !isNameValid('name') ? setErrorMessage(ERROR_NAME_PATTERN) : setErrorMessage('');
            break;
          case 'email':
            setEmailClassName((isEmailValid() || inputName.trim() === "" ) ?
              'form__input' : 'form__input form__input_on-error');
            !isEmailValid(inputName) ? setErrorMessage(ERROR_EMAIL_PATTERN) : setErrorMessage('');
            break;
          case 'password':
            setPasswordClassName((isPasswordValid() || inputName.trim() === "" ) ?
              'form__input' : 'form__input form__input_on-error');
            !isPasswordValid(inputName) ? setErrorMessage(ERROR_PASSWORD_PATTERN) : setErrorMessage('');
            break;
          default:
            setNameClassName('form__input');
            setPasswordClassName('form__input');
            setEmailClassName('form__input');
            setErrorMessage('');
        }
    }

    React.useEffect(() => {
        const isInputValid = () => {
            return isNameValid() && isEmailValid() && isPasswordValid();
      };
    
      setIsFormValid(isInputValid());
      setIsFormEmpty(
        name.trim() === "" || email.trim() === "" || password.trim() === ""
      );
    }, [name, email, password]);

    const isBtnDisabled = () => {
        return isLoading || isFormEmpty || !isFormValid
    }

    return (
        <main className='register section'>
            <form name='registration' className='form' onSubmit={handleSubmit}>
                <Link className='logo' to={'/'}><img src={logo} alt='логотип проект'/></Link>
                <h1 className='form__heading'>{title}</h1>

                <label className="form__label">Имя</label>
                <input
                    className={nameClassName}
                    onChange={handleChange}
                    id="name"
                    name='name'
                    type="text"
                    minLength="2"
                    maxLength="30"
                    placeholder='Имя'
                    disabled={isLoading}
                    required></input>
                <label className="form__label">E-mail</label>
                <input
                    className={emailClassName}
                    onChange={handleChange}
                    id="email"
                    name='email'
                    type="email"
                    placeholder='E-mail'
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
                    <span className='form__error'>{errorMessage}</span>
                    <button className="form__btn" type="submit" disabled={isBtnDisabled()}>
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