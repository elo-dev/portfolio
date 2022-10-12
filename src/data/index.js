import books from '../assets/projectsImg/books.png'
import finance from '../assets/projectsImg/finance.png'
import harrypotter from '../assets/projectsImg/harrypotter.png'
import starwars from '../assets/projectsImg/starwars.png'
import crypto from '../assets/projectsImg/crypto.png'
import fast_dish from '../assets/projectsImg/fast_dish.png'
import trip_advisor from '../assets/projectsImg/trip_advisor.png'
import theblog from '../assets/projectsImg/theblog.png'

export const projects = [
  {
    id: 1,
    title: 'The Blog',
    description: 'MERN Блог с современным функционалом',
    stack:
      'Backend: express, mongoose, bcrypt, cloudinary, multer, jsonwebtoken. Frontend: React, React-router, TypeScript, Webpack, Redux-toolkit, Axios, Tailwindcss, react-hook-form',
    link: 'https://fullstack-blog-orcin.vercel.app',
    img: theblog,
  },
  {
    id: 2,
    title: 'Fast Dish',
    description:
      'Поиск текстовых/видео рецептов, личный кабинет, избранное, корзина продуктов, создание плана питания',
    stack:
      'React, React-router, Firebase, Redux-toolkit, Sass, Antd, react-player',
    link: 'https://elo-dev.github.io/fast_dish/',
    img: fast_dish,
  },
  {
    id: 3,
    title: 'Crypto',
    description: 'Портал с новостями и обменником криптовалют',
    stack: 'React, React-router, Redux-toolkit, Sass, Antd, ChartJs, Axios',
    link: 'https://elo-dev.github.io/crypto/',
    img: crypto,
  },
  {
    id: 4,
    title: 'Trip Advisor',
    description:
      'Показывает ближайшие рестораны, отели и достопримечательности',
    stack: 'React, React-router, Sass, Axios, google-map-react, MaterialUI',
    link: 'https://elo-dev.github.io/trip_advisor/',
    img: trip_advisor,
  },
  {
    id: 5,
    title: 'Finance calculator',
    description:
      'На основе трат высчитывается сколько можно накопить за n колличество времени, если положить их под процент в банк',
    stack: 'React, Firebase, Sass, Antd, Axios',
    link: 'https://elo-dev.github.io/reactFinance/',
    img: finance,
  },
  {
    id: 6,
    title: 'Search books',
    description: 'Поиск книг по глобальной библиотеке на основе google books',
    stack: 'React, React-router, Redux, Redux-thunk, Sass, Antd, TypeScript',
    link: 'https://elo-dev.github.io/reactSearchBook/',
    img: books,
  },
  {
    id: 7,
    title: 'Harry Potter',
    description: 'Тематический сайт по вселенной Гарри Поттера',
    stack: 'React, React-router, Sass, Axios, MaterialUI',
    link: 'https://elo-dev.github.io/reactHarryPotter/',
    img: harrypotter,
  },
  {
    id: 8,
    title: 'Star Wars',
    description: 'Тематический сайт по вселенной Звездных войн',
    stack: 'React, React-router, Redux, Sass, Lodash, Axios',
    link: 'https://elo-dev.github.io/reactStarWars/',
    img: starwars,
  },
]
