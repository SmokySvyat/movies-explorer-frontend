import './Techs.css';

function Techs() {
    return (
        <section id='techs' className='techs'>
            <h2 className='heading'>Технологии</h2>
            <article className='techs__article'>
                <h3 className='article-heading article-heading_techs'>7 технологий</h3>
                <p className='article article_techs'>
                    На курсе веб-разработки
                    мы освоили технологии, которые применили в дипломном проекте.
                </p>
                <ul className='techs__article-list'>
                    <li className='techs__list-item'>HTML</li>
                    <li className='techs__list-item'>CSS</li>
                    <li className='techs__list-item'>JS</li>
                    <li className='techs__list-item'>React</li>
                    <li className='techs__list-item'>Git</li>
                    <li className='techs__list-item'>Express.js</li>
                    <li className='techs__list-item'>mongoDB</li>
                </ul>
            </article>
        </section>
    )
}

export default Techs;