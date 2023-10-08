import './Profile.css'
import React from "react";
import { CurrentUserContext } from '../../contexts/CurrentUserContext'
import { NAME_REGEXP, EMAIL_REGEXP, EMAIL_LENGTH_MIN, EMAIL_LENGTH_MAX, LENGTH_MIN, LENGTH_MAX } from '../../utils/constants';

function Profile (props) {
    React.useEffect(() => {
        localStorage.setItem("currentPath", "/profile");
      }, []);
    const { currentUser } = React.useContext(CurrentUserContext);
    const [value, setValue] = React.useState({
        name: currentUser.name,
        email: currentUser.email,
    });
    const { name, email } = value;
    const [isFormValid, setIsFormValid] = React.useState(false);
    const [isFormEmpty, setIsFormEmpty] = React.useState(true);
    const [activateForm, setActivateForm] = React.useState(false);
    
    function handleBtnClick () {
        setActivateForm(true)
    }

    const btn = () => {
        if (activateForm) {
            return (
                <button className='profile__btn' type='button' disabled={props.isLoading} onClick={handleBtnClick()}>Редактировать</button>
            )
        } else {
            return (
            <button className='profile__btn' type='submit' disabled={isBtnDisabled()}>Сохранить</button>
            )
        }
    }
    
    function handleChange(e) {
        setValue({ ...value, [e.target.name]: e.target.value })
        props.setSuccessMessage('')
        props.setErrorMessage('')
    }

    function handleSubmit(e) {
        e.preventDefault();
        setActivateForm(false)
        // console.log(`handle submit ${currentUser}`)
        props.onUpdateUser(value)
    }

    const isChanged = () => { return value.name !== currentUser.name || value.email !== currentUser.email;}
    const isNameValid = () => { return name.trim().length >= LENGTH_MIN && name.trim().length <= LENGTH_MAX && NAME_REGEXP.test(name.trim())};
    const isEmailValid = () => { return EMAIL_REGEXP.test(email.trim()) && email.trim().length >= EMAIL_LENGTH_MIN && email.trim().length <= EMAIL_LENGTH_MAX };
    const nameClassName = isNameValid() ? 'profile__input' : 'profile__input profile__input_on-error';
    const emailClassName = isEmailValid() ? 'profile__input' : 'profile__input profile__input_on-error';
    const tipsClassName = props.errorMessage ? 'profile__tips profile__tips_error' : 'profile__tips profile__tips_ok'
    const message = props.errorMessage ? props.errorMessage : props.successMessage;
    React.useEffect(() => {
        const isInputValid = () => {
            return isNameValid() && isEmailValid() && isChanged();
        };
        props.setErrorMessage('');
        props.setSuccessMessage('');
        setIsFormValid(isInputValid() && isChanged());
        setIsFormEmpty(
          name.trim() === "" || email.trim() === ""
        );
      }, [name, email]);
      
    const isBtnDisabled = () => {
        // console.log(`*is name valid ${isNameValid()}`)
        // console.log(`*is email valid ${isEmailValid()}`)
        // console.log(`is form valid ${isFormValid}`)
        // console.log(`is loading ${props.isLoading}`)
        // console.log(`is form empty ${isFormEmpty}`)
        // console.log(`is changed ${isChanged()}`)
        return props.isLoading || isFormEmpty || !isFormValid
    }
    React.useEffect(() => {
        setValue({
          name: currentUser.name,
          email: currentUser.email,
        });
      }, [currentUser]);

    return (
        <main className='profile section'>
            <form name='profile' onSubmit={handleSubmit}>
                <h1 className='profile__title'>Привет, {currentUser.name}!</h1>
                <div className='profile__inputs'>
                    <div className='profile__input-container'>
                        <label className='profile__label'>Имя</label>
                        <input
                            className={nameClassName}
                            onChange={handleChange}
                            placeholder='Имя'
                            name='name'
                            type='text'
                            minLength={2}
                            maxLength={30}
                            value={value.name ?? ""}
                            required
                            disabled={props.isLoading}
                        ></input>
                    </div>
                    <div className='profile__input-container'>
                        <label className='profile__label'>E-mail</label>
                        <input
                            className={emailClassName}
                            onChange={handleChange}
                            placeholder='E-mail'
                            name='email'
                            type='email'
                            minLength={8}
                            maxLength={200}
                            value={value.email ?? ""}
                            required
                            disabled={props.isLoading}
                        ></input>
                    </div>
                </div>
                <span className={tipsClassName}>{message}</span>
                <div className='profile__controls'>
                    {btn()}
                    
                    
                    <button className='profile__btn signout'  type='button' onClick={props.handleSignOut} disabled={props.isLoading}>Выйти из аккаунта</button>
                </div>
            </form>
        </main>
    )
}

export default Profile