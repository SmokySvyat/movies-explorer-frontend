import './AboutProject.css'

function AboutProject() {
    return (
        <section className='about-project'>
            <h2 className='about-project__heading'>О проекте</h2>
            <article className='article_about-project'>
                <h3 className='article__heading_about-project'>
                    Дипломный проект включал 5 этапов
                </h3>
                <p className='article__text_about-project'>
                    Составление плана, работу над бэкендом, вёрстку,
                    добавление функциональности и финальные доработки.
                </p>
            </article>

            <article className='article_about-project'>
                <h3 className='article__heading_about-project'>
                    На выполнение диплома ушло 5 недель
                </h3>
                <p className='article__text_about-project'>
                    У каждого этапа был мягкий и жёсткий дедлайн,
                    которые нужно было соблюдать, чтобы успешно защититься.
                </p>
            </article>

            <div className='roadmap'>
                <div>
                    <p className='roadmap__item'>1 неделя</p>
                    <span className='roadmap-span'>Back-end</span>
                </div>
                <div>
                    <p className='roadmap__item weeks'>4 недели</p>
                    <span className='roadmap-span'>Front-end</span>
                </div>
            </div>
        </section>
    )
}

export default AboutProject;