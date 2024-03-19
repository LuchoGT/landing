import './LandingHeader.scss'

export const LandingHeader = () => {
  return (
    <header className='header'>
      <nav className='navbar'>
        <div className='navbar__logo'>
          <h1>Synnexa</h1>
        </div>
        <div className='navbar__menu'>
          <ul className='navbar__list'>
            <li className='navbar__item'>Cursos</li>
            <li className='navbar__item'>Testimonios</li>
            <li className='navbar__item'>Blog</li>
            <li className='navbar__item navbar__item--room'>
                Aula Virtual
            </li>
          </ul>
        </div>
      </nav>
    </header>
  )
}
