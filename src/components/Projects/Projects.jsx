import React from 'react'
import style from './Projects.module.scss'
import books from '../../assets/projectsImg/books.png'
import finance from '../../assets/projectsImg/finance.png'
import harrypotter from '../../assets/projectsImg/harrypotter.png'
import starwars from '../../assets/projectsImg/starwars.png'

const projects = [
  {
    id: 1,
    title: 'Finance calculator',
    description: 'На основе трат высчитывается сколько можно накопить за n колличество времени, если положить их под процент в банк',
    stack: 'React, Firebase, Sass',
    link: 'https://elo-dev.github.io/reactFinance/',
    img: finance,
  },
  {
    id: 2,
    title: 'Search books',
    description: 'Поиск книг по глобальной библиотеке на основе google books',
    stack: 'React, React-router, Redux, Redux-thunk, Sass',
    link: 'https://elo-dev.github.io/reactSearchBook/',
    img: books,
  },
  {
    id: 3,
    title: 'Harry Potter',
    description: 'Тематический сайт по вселенной Гарри Поттера',
    stack: 'React, React-router, Sass',
    link: 'https://elo-dev.github.io/reactHarryPotter/',
    img: harrypotter,
  },
  {
    id: 4,
    title: 'Star Wars',
    description: 'Тематический сайт по вселенной Звездных войн',
    stack: 'React, React-router, Redux, Sass',
    link: 'https://elo-dev.github.io/reactStarWars/',
    img: starwars,
  },
]

export const Projects = () => {
  return (
    <div className={style.projects__container}>
      <h1 className={style.title}>Проекты</h1>
      <div>
        {projects.map((item) => (
          <div key={item.id} className={style.project__item}>
            <h3>{item.title}</h3>
            <p className={style.description}>{item.description}</p>
            <p className={style.stack}>🛠 Stack: {item.stack}</p>
            <p className={style.link}>Ссылка на проект <a href={item.link} target='_blank'>Link</a></p>
            <img src={item.img} alt={item.title} />
          </div>
        ))}
      </div>
    </div>
  )
}
