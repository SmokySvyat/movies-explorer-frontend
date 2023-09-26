import './Profile.css'
import { useNavigate } from "react-router-dom"

function Profile (props) {
    const navigate = useNavigate();
    const goToMain = () => {
        navigate('/')
      };

    return (
        <section className='profile section'>
            <form name='profile' onSubmit={props.handleSubmit}>
                <h1 className='profile__title'>Привет, {props.name}</h1>
                <div className='profile__inputs'>
                    <div className='profile__input-container'>
                        <label className='profile__label'>Имя</label>
                        <input
                            className='profile__input'
                            placeholder='Имя'
                            name='name'
                            type='text'
                            minLength={2}
                            maxLength={30}
                            // value={props.name ?? ""}
                            required
                        ></input>
                    </div>
                    <div className='profile__input-container'>
                        <label className='profile__label'>E-mail</label>
                        <input
                            className='profile__input'
                            placeholder='E-mail'
                            name='e-mail'
                            type='email'
                            minLength={8}
                            maxLength={12}
                            autoComplete='email'
                            // value={props.email}
                            required
                        ></input>
                    </div>
                </div>
                <span className='profile__error d-none'>При обновлении профиля произошла ошибка.</span>
                <div className='profile__controls'>
                    <button className='profile__btn' type='submit'>Редактировать</button>
                    <button className='profile__btn signout'  type='button' onClick={goToMain}>Выйти из аккаунта</button>
                </div>
            </form>
        </section>
    )
}

export default Profile