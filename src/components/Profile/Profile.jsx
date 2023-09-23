import './Profile.css'

function Profile (props) {
    return (
        <main className='profile section'>
            <form name='profile' onSubmit={props.handleSubmit}>
                <h2 className='profile__title'>Привет, {props.name}</h2>
                <div className='profile-inputs'>
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
                    <div className='profile-brake brake'></div>
                    <label className='profile__label'>E-mail</label>
                    <input
                        className='profile__input'
                        placeholder='E-mail'
                        name='e-mail'
                        type='e-mail'
                        autoComplete='email'
                        // value={props.email}
                        required
                    ></input>
                </div>
                <span className='profile__error d-none'>При обновлении профиля произошла ошибка.</span>
                <div className='profile__controls'>
                    <button className='profile__btn' type='submit'>Редактировать</button>
                    <button className='profile__btn signout'>Выйти из аккаунта</button>
                </div>
            </form>
        </main>
    )
}

export default Profile