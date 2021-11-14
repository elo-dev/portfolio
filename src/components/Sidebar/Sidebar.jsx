import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { NavLink } from 'react-router-dom'
import photo from '../../assets/img/mainPhoto.jpeg'
import style from './Sidebar.module.scss'

export const Sidebar = () => {
  return (
    <div className={style.sidebar__container}>
      <div className={style.me}>
        <NavLink to="/">
          <img className={style.photo} src={photo} alt="Dmitriy Frolov" />
          <h2 className={style.name}>Дмитрий Фролов</h2>
        </NavLink>
        <div className={style.info}>
          <p>Я <span>front-end</span> разработчик.</p>
          <p>
            На данный момент у меня нет коммерческого опыта, но есть
            пет-проекты, на которых я практиковался, и желание развиваться как
            специалист.
          </p>
        </div>
      </div>
      <nav className={style.navigation}>
        <ul>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                style.navigation__item + (isActive ? ` ${style.activated}` : '')
              }
            >
              Обо мне
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/projects"
              className={({ isActive }) =>
                style.navigation__item + (isActive ? ` ${style.activated}` : '')
              }
            >
              Проекты
            </NavLink>
          </li>
        </ul>
      </nav>
      <div className={style.contacts}>
        <ul>
          <li>
            <a href='mailto:dimasiys25@gmail.com'>
              <FontAwesomeIcon icon="envelope" />
            </a>
          </li>
          <li>
            <a href='https://t.me/eloDev' target='_blank' rel="noreferrer">
              <FontAwesomeIcon icon={['fab', 'telegram']} />
            </a>
          </li>
          <li>
            <a href='https://github.com/elo-dev' target='_blank' rel="noreferrer">
              <FontAwesomeIcon icon={['fab', 'github']} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}
