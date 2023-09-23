import './Techs.css';

function Techs() {
    return (
        <section id='techs' className='techs'>
            <h2 className='section__heading'>Технологии</h2>
            <article className='techs__article'>
                <h3 className='article__heading article__heading_techs'>7 технологий</h3>
                <p className='article__text article__text_techs'>
                    На курсе веб-разработки
                    мы освоили технологии, которые применили в дипломном проекте.
                </p>
                <ul className='techs__article-list'>
                    <li className='article-list__item'>HTML</li>
                    <li className='article-list__item'>CSS</li>
                    <li className='article-list__item'>JS</li>
                    <li className='article-list__item'>React</li>
                    <li className='article-list__item'>Git</li>
                    <li className='article-list__item'>Express.js</li>
                    <li className='article-list__item'>mongoDB</li>
                </ul>
            </article>
        </section>
    )
}

export default Techs;