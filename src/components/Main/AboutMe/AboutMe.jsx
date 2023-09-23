import './AboutMe.css';
import Portfolio from '../Portfolio/Portfolio'

function AboutMe() {
    return (
        <section id='about-me' className='about-me'>
            <h2 className='section__heading'>Студент</h2>
            <article className='about-me__article'>
                <h3 className='about-me__heading article__heading'>Виталий</h3>
                <span className='about-me__span'>Фронтенд-разработчик, 30 лет</span>
                <p className='about-me__text article__text'>Я родился и живу в Саратове, закончил факультет экономики СГУ.
                    У меня есть жена и дочь. Я люблю слушать музыку, а ещё
                    увлекаюсь бегом. Недавно начал кодить. С 2015 года работал в 
                    компании «СКБ Контур». После того, как прошёл курс по веб-разработке,
                    начал заниматься фриланс-заказами и ушёл с постоянной работы.
                </p>
                <a className='about-me__link link' href='https://github.com/SmokySvyat' target='blank'>Github</a>
                <div className='about-me__img'></div>
            </article>

            <Portfolio />
        </section>
    )
}

export default AboutMe;