import './NavTab.css';

function NavTab() {
    return (
        <section className='navtab'>
            <nav className='navtab__nav'>
                <ul className='navtab__list'>
                    <li><a href='#about-project' className='navtab__list-link'>О проекте</a></li>
                    <li><a href='#techs' className='navtab__list-link'>Технологии</a></li>
                    <li><a href='#about-me' className='navtab__list-link'>Студент</a></li>
                </ul>
            </nav>
        </section>
    )
}

export default NavTab;