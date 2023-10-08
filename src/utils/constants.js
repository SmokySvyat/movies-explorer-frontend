const BASE_MOVIE_URL = 'https://api.nomoreparties.co/beatfilm-movies/'
const BASE_IMG_URL = 'https://api.nomoreparties.co'
const BASE_MYAPI_URL = 'https://api.diplom.svyat.nomoredomainsicu.ru'
// const BASE_MYAPI_URL = 'http://localhost:3000'
const NAME_REGEXP = /^[-a-zA-ZА-Яа-яЁё\s]+$/
const EMAIL_REGEXP = /^\S+@\S+\.\S+$/;
const PASSWORD_REGEXP = /(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{6,}/;

const ERROR_NAME_PATTERN = 'В поле "Имя" допускаются: не менее 2 и не более 30 английских или латинских букв, - и пробел';
const ERROR_EMAIL_PATTERN = 'E-mail введён некорректно'
const ERROR_PASSWORD_PATTERN = 'Пароль должен быть не короче 8 символов, содержать цифру и символ'

module.exports = {
    BASE_MOVIE_URL,
    BASE_MYAPI_URL,
    BASE_IMG_URL,
    NAME_REGEXP,
    EMAIL_REGEXP,
    PASSWORD_REGEXP,
    ERROR_NAME_PATTERN,
    ERROR_EMAIL_PATTERN,
    ERROR_PASSWORD_PATTERN,
}
