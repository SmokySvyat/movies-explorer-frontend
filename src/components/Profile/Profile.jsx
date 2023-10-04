import './Profile.css'
import React from "react";
import { CurrentUserContext } from '../../contexts/CurrentUserContext'
import { NAME_REGEXP, EMAIL_REGEXP } from '../../utils/constants';

function Profile (props) {
    const [isFormValid, setIsFormValid] = React.useState(false);
    const [isFormEmpty, setIsFormEmpty] = React.useState(true);
    const currentUser = React.useContext(CurrentUserContext);
    const [value, setValue] = React.useState({
        name: currentUser.name,
        email: currentUser.email,
      });

    React.useEffect(() => {
        console.log(currentUser)
        setValue({
          name: currentUser.name,
          email: currentUser.email,
        });
        const isInputValid = () => {
            return isNameValid() && isEmailValid();
        };
    
        setIsFormValid(isInputValid());
        setIsFormEmpty(
          name.trim() === "" || email.trim() === ""
        );
      }, [currentUser]);

    const { name, email } = value;

    function handleChange(e) {
      setValue({ ...value, [e.target.name]: e.target.value });
    }

    function handleSubmit(e) {
        e.preventDefault();
        props.onUpdateUser(value)
    }

    const isNameValid = () => { return name.trim().length >= 2 && name.trim().length <= 20 && NAME_REGEXP.test(name.trim())};
    const isEmailValid = () => { return EMAIL_REGEXP.test(email.trim()) && email.trim().length >= 2 && email.trim().length <= 20 };
    const nameClassName = isNameValid() ? 'profile__input' : 'profile__input profile__input_on-error';
    const emailClassName = isEmailValid() ? 'profile__input' : 'profile__input profile__input_on-error';

    const isBtnDisabled = () => {
        // console.log(`is form valid ${isFormValid}`)
        // console.log(`is loading ${isLoading}`)
        // console.log(`is form empty ${isFormEmpty}`)
        return props.isLoading || isFormEmpty || !isFormValid
    }

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
                            pattern={NAME_REGEXP}
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
                            pattern={EMAIL_REGEXP}
                            required
                            disabled={props.isLoading}
                        ></input>
                    </div>
                </div>
                <span className='profile__error'>{props.errorMessage}</span>
                <div className='profile__controls'>
                    <button className='profile__btn' type='submit' disabled={isBtnDisabled}>Редактировать</button>
                    <button className='profile__btn signout'  type='button' onClick={props.handleSignOut} disabled={props.isLoading}>Выйти из аккаунта</button>
                </div>
            </form>
        </main>
    )
}

export default Profile