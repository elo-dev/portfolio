import { Link, NavLink } from 'react-router-dom'
import { MdEmail } from 'react-icons/md'
import { BsTelegram, BsGithub } from 'react-icons/bs'

import avatar from '../../assets/img/avatar.jpeg'

export const Sidebar = () => {
  return (
    <div className="pr-5 space-y-4 w-[30%] md:w-full sm:pr-0">
      <div className="md:flex md:items-center md:space-x-5 sm:flex-col sm:items-center space-y-5">
        <Link to="/" className="hover:text-sky-500 md:basis-1/2">
          <img
            src={avatar}
            alt="Dmitriy Frolov"
            className="w-[150px] rounded-full mx-auto"
          />
        </Link>
        <p className="text-gray-400 font-medium sm:text-lg md:basis-1/2">
          👋 Я <span className="font-bold">Дмитрий Фролов</span>, фронт
          разработчик из Москвы. <br />
          На этом сайте вы найдете информацию обо мне как специалисте, а также
          мой путь, от простых проектов к сложным и более интересным.
        </p>
      </div>
      <nav className="md:flex md:justify-center">
        <ul className="space-y-2 text-lg">
          <li>
            <NavLink
              end
              to="/"
              className={({ isActive }) =>
                'hover:underline hover:underline-offset-4' +
                (isActive ? ' text-sky-500' : '')
              }
            >
              Обо мне
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/projects"
              className={({ isActive }) =>
                'hover:underline hover:underline-offset-4' +
                (isActive ? ' text-sky-500' : '')
              }
            >
              Проекты
            </NavLink>
          </li>
        </ul>
      </nav>
      <ul className="flex space-x-4 items-center md:justify-center">
        <li>
          <a href="mailto:dimasiys25@gmail.com">
            <MdEmail className="text-2xl hover:text-sky-500" />
          </a>
        </li>
        <li>
          <a href="https://t.me/eloDev" target="_blank" rel="noreferrer">
            <BsTelegram className="text-2xl hover:text-sky-500" />
          </a>
        </li>
        <li>
          <a href="https://github.com/elo-dev" target="_blank" rel="noreferrer">
            <BsGithub className="text-2xl hover:text-sky-500" />
          </a>
        </li>
      </ul>
    </div>
  )
}
