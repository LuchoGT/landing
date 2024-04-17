import { useState } from 'react'
import './LandingHeader.scss'
import { LandingLogo } from '@/assets/img/LandingLogo/LandingLogo'
import { LandingUser } from '@/assets/img/LandingUser/LandingUser'
import { LandinMenu } from '@/assets/icon/LandingOthers/LandinMenu'
import { LandingExit } from '@/assets/icon/LandingOthers/LandingExit'

export const LandingHeader = () => {

  const [isOpenMenu, setIsOpenMenu] = useState(false)

  const handleOpenMenu = ()=>{
    setIsOpenMenu(!isOpenMenu)
  }

  return (
    <header className='header'>
      <nav className='navbar'>
        <div className='navbar__logo'>
          <LandingLogo/>
        </div>
        <div className='navbar__icon' onClick={handleOpenMenu}>
          <LandinMenu/>
        </div>
        {
          isOpenMenu &&
          <div className='menu'>
            <div className='menu__title'>
              <LandingLogo/>
                <p onClick={handleOpenMenu}>
                  <LandingExit/>
                </p>
              </div>
              <nav className='menu__nav'>
                <ul className='menu__list'>
                  <li className='menu__item'>Cursos</li>
                  <li className='menu__item'>Testimonios</li>
                  <li className='menu__item'>Blog</li>
                  <li className='menu__item menu__item--room'>Aula Virtual</li>
                </ul>
              </nav>
          </div>
        }
        <div className='navbar__menu'>
          <ul className='navbar__list'>
            <li className='navbar__item'>Cursos</li>
            <li className='navbar__item'>Testimonios</li>
            <li className='navbar__item'>Blog</li>
            <li className='navbar__item navbar__item--room'>
              <LandingUser/>
              Aula virtual
            </li>
          </ul>
        </div>
      </nav>
    </header>
  )
}
