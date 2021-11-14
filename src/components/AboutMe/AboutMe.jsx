import React from 'react'
import style from './AboutMe.module.scss'

export const AboutMe = () => {
  return (
    <div className={style.aboutme__container}>
      <h1 className={style.title}>Обо мне</h1>
      <p>
        👋 Я Дмитрий Фролов и я фронт разработчик из Москвы. Мне нравится все
        что связано с Javascript и изучением новых технологий связанных с ним.
      </p>
      <p>
        Веб-разработкой я занимаюсь более полугода, за это время я приобрел
        знания <span>HTML, CSS, SASS и css-module</span> и основных принципов
        адаптивной верстки, в проектах использую UI фреймворки{' '}
        <span>MUI и ANTD</span>, знаком с <span>Formik</span>, знания{' '}
        <span>git</span> на комфортном для работы уровне. Также активно изучаю
        библиотеку <span>React</span> и использую <span>хуки</span>, также
        знаком с методами жизненного цикла в классовых компонентах, для
        навигации использую библиотеку <span>react-router</span>, для работы с
        rest api использую <span>axios</span>. Для работы с состоянием использую{' '}
        <span>Redux</span>, для работы с асинхронными экшенами использую{' '}
        <span>Redux-Thunk</span>. Также есть базовое понимание{' '}
        <span>Typescript</span>.
      </p>

      <h2>То что я сделал</h2>
      <p>
        Мои проекты и материалы с открытым исходным кодом, на{' '}
        <a href="https://github.com/elo-dev" target="_blank" rel="noreferrer">
          Github
        </a>
      </p>

      <h2>Сильные стороны</h2>

      <ul className={style.strengths}>
        <li>
          Прежде чем просить о помощи, я пробую решить задачу самостоятельно.
        </li>
        <li>
          Нравится брать на себя ответственность за проделанную работу. В срок
          выполняю свои обязанности.
        </li>
        <li>Не стесняюсь просить помощи и помогать другим.</li>
      </ul>
    </div>
  )
}
