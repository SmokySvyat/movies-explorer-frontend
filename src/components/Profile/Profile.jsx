import './Profile.css'
import React from "react";
import { CurrentUserContext } from '../../contexts/CurrentUserContext'

function Profile (props) {

    const currentUser = React.useContext(CurrentUserContext);
    const [value, setValue] = React.useState({});

    React.useEffect(() => {
        console.log(currentUser)
        setValue({
          id: currentUser.id,
          name: currentUser.name,
          email: currentUser.email,
        });
      }, [currentUser]);

    function handleChange(e) {
      setValue({ ...value, [e.target.name]: e.target.value });
    }

    function handleSubmit(e) {
        e.preventDefault();
        props.onUpdateUser(value)
    }

    return (
        <main className='profile section'>
            <form name='profile' onSubmit={handleSubmit}>
                <h1 className='profile__title'>Привет, {currentUser.name}!</h1>
                <div className='profile__inputs'>
                    <div className='profile__input-container'>
                        <label className='profile__label'>Имя</label>
                        <input
                            className='profile__input'
                            onChange={handleChange}
                            placeholder='Имя'
                            name='name'
                            type='text'
                            minLength={2}
                            maxLength={30}
                            value={value.name ?? ""}
                            required
                        ></input>
                    </div>
                    <div className='profile__input-container'>
                        <label className='profile__label'>E-mail</label>
                        <input
                            className='profile__input'
                            onChange={handleChange}
                            placeholder='E-mail'
                            name='e-mail'
                            type='email'
                            minLength={8}
                            maxLength={12}
                            autoComplete='email'
                            value={value.email ?? ""}
                            required
                        ></input>
                    </div>
                </div>
                <span className='profile__error d-none'>При обновлении профиля произошла ошибка.</span>
                <div className='profile__controls'>
                    <button className='profile__btn' type='submit'>Редактировать</button>
                    <button className='profile__btn signout'  type='button' onClick={props.handleSignOut}>Выйти из аккаунта</button>
                </div>
            </form>
        </main>
    )
}

export default Profile