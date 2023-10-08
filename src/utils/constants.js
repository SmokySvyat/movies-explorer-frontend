const BASE_MOVIE_URL = 'https://api.nomoreparties.co/beatfilm-movies/'
const BASE_IMG_URL = 'https://api.nomoreparties.co'
const BASE_MYAPI_URL = 'https://api.diplom.svyat.nomoredomainsicu.ru'
// const BASE_MYAPI_URL = 'http://localhost:3000'
const NAME_REGEXP = /^[-a-zA-ZА-Яа-яЁё\s]+$/
const EMAIL_REGEXP = /^\S+@\S+\.\S+$/;
const PASSWORD_REGEXP = /(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{6,}/;

const LENGTH_MIN = 2;
const LENGTH_MAX = 20;
const EMAIL_LENGTH_MIN = 8;
const EMAIL_LENGTH_MAX = 200;
const PASSWORD_LENGTH_MIN = 8;

const ERROR_NAME_PATTERN = 'В поле "Имя" допускаются: не менее 2 и не более 30 английских или латинских букв, - и пробел';
const ERROR_EMAIL_PATTERN = 'E-mail введён некорректно'
const ERROR_PASSWORD_PATTERN = 'Пароль должен быть не короче 8 символов, содержать латинские строчные и заглавные буквы, цифру и символ'

const DESKTOP_RES = 1222;
const MOBILE_RES = 734;
const DURATION_SHORT = 40;
const CARDS_TO_RENDER_DESKTOP = 12;
const CARDS_TO_RENDER_TABLET = 8;
const CARDS_TO_RENDER_MOBILE = 5;
const CARDS_TO_ADD_DESKTOP = 3;
const CARDS_TO_ADD_MOBILE = 2;


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
    DESKTOP_RES,
    MOBILE_RES,
    DURATION_SHORT,
    CARDS_TO_ADD_DESKTOP,
    CARDS_TO_ADD_MOBILE,
    CARDS_TO_RENDER_DESKTOP,
    CARDS_TO_RENDER_TABLET,
    CARDS_TO_RENDER_MOBILE,
    LENGTH_MAX,
    LENGTH_MIN,
    EMAIL_LENGTH_MIN,
    EMAIL_LENGTH_MAX,
    PASSWORD_LENGTH_MIN,
}
