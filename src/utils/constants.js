const BASE_MOVIE_URL = 'https://api.nomoreparties.co/beatfilm-movies/'
const BASE_IMG_URL = 'https://api.nomoreparties.co'
const BASE_MYAPI_URL = 'http://localhost:3005'

const cards = [
    {
        country: 'russia',
        director: 'yasha',
        duration: '1ч 20м',
        year: 2023,
        description: 'davnim davno, v dalokoy dalokoy galaktike',
        image: 'https://allbestmovies.ru/uploads/posts/2015-11/1448338367_photo-40191159_389471883.jpg',
        trailerLink: 'https://www.youtube.com/watch?v=JyUH8Wp40IU',
        thumbnail: 'https://www.dejurka.ru/wp-content/uploads/2012/05/lord-of-rings.jpg',
        owner: '',
        movieId: 65463219,
        nameRU: 'Поехали',
        nameEN: 'Priehali',
    },
    {
        country: 'russia',
        director: 'yasha',
        duration: '1ч 20м',
        year: 2023,
        description: 'davnim davno, v dalokoy dalokoy galaktike',
        image: 'https://allbestmovies.ru/uploads/posts/2015-11/1448338367_photo-40191159_389471883.jpg',
        trailerLink: 'https://www.youtube.com/watch?v=JyUH8Wp40IU',
        thumbnail: 'https://www.dejurka.ru/wp-content/uploads/2012/05/lord-of-rings.jpg',
        owner: '',
        movieId: 65483219,
        nameRU: 'Поехали',
        nameEN: 'Priehali',
    },
    {
        country: 'russia',
        director: 'yasha',
        duration: '1ч 20м',
        year: 2020,
        description: 'davnim davno, v dalokoy dalokoy galaktike',
        image: 'https://allbestmovies.ru/uploads/posts/2015-11/1448338367_photo-40191159_389471883.jpg',
        trailerLink: 'https://www.youtube.com/watch?v=JyUH8Wp40IU',
        thumbnail: 'https://www.dejurka.ru/wp-content/uploads/2012/05/lord-of-rings.jpg',
        owner: '',
        movieId: 65763219,
        nameRU: 'Поехали',
        nameEN: 'Priehali'
    },
    {
        country: 'russia',
        director: 'yasha',
        duration: '1ч 20м',
        year: 2023,
        description: 'davnim davno, v dalokoy dalokoy galaktike',
        image: 'https://allbestmovies.ru/uploads/posts/2015-11/1448338367_photo-40191159_389471883.jpg',
        trailerLink: 'https://www.youtube.com/watch?v=JyUH8Wp40IU',
        thumbnail: 'https://www.dejurka.ru/wp-content/uploads/2012/05/lord-of-rings.jpg',
        owner: '',
        movieId: 65463619,
        nameRU: 'Поехали',
        nameEN: 'Priehali'
    },
    {
        country: 'russia',
        director: 'yasha',
        duration: '1ч 20м',
        year: 2123,
        description: 'davnim davno, v dalokoy dalokoy galaktike',
        image: 'https://allbestmovies.ru/uploads/posts/2015-11/1448338367_photo-40191159_389471883.jpg',
        trailerLink: 'https://www.youtube.com/watch?v=JyUH8Wp40IU',
        thumbnail: 'https://www.dejurka.ru/wp-content/uploads/2012/05/lord-of-rings.jpg',
        owner: '',
        movieId: 75463219,
        nameRU: 'Поехали5',
        nameEN: 'Priehali'
    },
    {
        country: 'russia',
        director: 'yasha',
        duration: '1ч 20м',
        year: 2023,
        description: 'davnim davno, v dalokoy dalokoy galaktike',
        image: 'https://allbestmovies.ru/uploads/posts/2015-11/1448338367_photo-40191159_389471883.jpg',
        trailerLink: 'https://www.youtube.com/watch?v=JyUH8Wp40IU',
        thumbnail: 'https://www.dejurka.ru/wp-content/uploads/2012/05/lord-of-rings.jpg',
        owner: '',
        movieId: 65489219,
        nameRU: 'Поехаыапрли',
        nameEN: 'Priehali',
    },
    {
        country: 'russia',
        director: 'yasha',
        duration: '1ч 20м',
        year: 2023,
        description: 'davnim davno, v dalokoy dalokoy galaktike',
        image: 'https://allbestmovies.ru/uploads/posts/2015-11/1448338367_photo-40191159_389471883.jpg',
        trailerLink: 'https://www.youtube.com/watch?v=JyUH8Wp40IU',
        thumbnail: 'https://www.dejurka.ru/wp-content/uploads/2012/05/lord-of-rings.jpg',
        owner: '',
        movieId: 65463749,
        nameRU: 'Поехаиииили',
        nameEN: 'Priehali',
    },
    {
        country: 'russia',
        director: 'yasha',
        duration: '1ч 20м',
        year: 2023,
        description: 'davnim davno, v dalokoy dalokoy galaktike',
        image: 'https://allbestmovies.ru/uploads/posts/2015-11/1448338367_photo-40191159_389471883.jpg',
        trailerLink: 'https://www.youtube.com/watch?v=JyUH8Wp40IU',
        thumbnail: 'https://www.dejurka.ru/wp-content/uploads/2012/05/lord-of-rings.jpg',
        owner: '',
        movieId: 65463299,
        nameRU: 'Поехали8',
        nameEN: 'Priehali',
    },
    {
        country: 'russia',
        director: 'yasha',
        duration: '1ч 20м',
        year: 2023,
        description: 'davnim davno, v dalokoy dalokoy galaktike',
        image: 'https://allbestmovies.ru/uploads/posts/2015-11/1448338367_photo-40191159_389471883.jpg',
        trailerLink: 'https://www.youtube.com/watch?v=JyUH8Wp40IU',
        thumbnail: 'https://www.dejurka.ru/wp-content/uploads/2012/05/lord-of-rings.jpg',
        owner: '',
        movieId: 75463289,
        nameRU: 'Ппрсооехали',
        nameEN: 'Priehali',
    },
    {
        country: 'russia',
        director: 'yasha',
        duration: '1ч 20м',
        year: 2023,
        description: 'davnim davno, v dalokoy dalokoy galaktike',
        image: 'https://allbestmovies.ru/uploads/posts/2015-11/1448338367_photo-40191159_389471883.jpg',
        trailerLink: 'https://www.youtube.com/watch?v=JyUH8Wp40IU',
        thumbnail: 'https://www.dejurka.ru/wp-content/uploads/2012/05/lord-of-rings.jpg',
        owner: '',
        movieId: 65743219,
        nameRU: 'Псрпсоехали',
        nameEN: 'Priehali',
    },
    {
        country: 'russia',
        director: 'yasha',
        duration: '1ч 20м',
        year: 2023,
        description: 'davnim davno, v dalokoy dalokoy galaktike',
        image: 'https://allbestmovies.ru/uploads/posts/2015-11/1448338367_photo-40191159_389471883.jpg',
        trailerLink: 'https://www.youtube.com/watch?v=JyUH8Wp40IU',
        thumbnail: 'https://www.dejurka.ru/wp-content/uploads/2012/05/lord-of-rings.jpg',
        owner: '',
        movieId: 65745219,
        nameRU: 'Папоехали',
        nameEN: 'Priehali',
    },
    {
        country: 'russia',
        director: 'yasha',
        duration: '1ч 20м',
        year: 2023,
        description: 'davnim davno, v dalokoy dalokoy galaktike',
        image: 'https://allbestmovies.ru/uploads/posts/2015-11/1448338367_photo-40191159_389471883.jpg',
        trailerLink: 'https://www.youtube.com/watch?v=JyUH8Wp40IU',
        thumbnail: 'https://www.dejurka.ru/wp-content/uploads/2012/05/lord-of-rings.jpg',
        owner: '',
        movieId: 67893219,
        nameRU: 'Поехалииии12',
        nameEN: 'Priehali',
    },
    {
        country: 'russia',
        director: 'yasha',
        duration: '1ч 20м',
        year: 2023,
        description: 'davnim davno, v dalokoy dalokoy galaktike',
        image: 'https://allbestmovies.ru/uploads/posts/2015-11/1448338367_photo-40191159_389471883.jpg',
        trailerLink: 'https://www.youtube.com/watch?v=JyUH8Wp40IU',
        thumbnail: 'https://www.dejurka.ru/wp-content/uploads/2012/05/lord-of-rings.jpg',
        owner: '',
        movieId: 6574521912,
        nameRU: 'Папоехали13',
        nameEN: 'Priehali',
    },
]

module.exports = {
    BASE_MOVIE_URL,
    BASE_MYAPI_URL,
    BASE_IMG_URL,
    cards,
}