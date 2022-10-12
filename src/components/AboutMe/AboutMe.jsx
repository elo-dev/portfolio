export const AboutMe = () => {
  return (
    <div className="pl-10 w-[70%] space-y-5 font-light text-lg md:pl-0 md:w-full">
      <h1 className="text-5xl font-bold">Обо мне 👨‍💻</h1>
      <p>
        Я frontend разработчик. На данный момент у меня есть пет-проекты, на
        которых я практиковался, и желание развиваться как специалист.
      </p>
      <p>
        Веб-разработкой я занимаюсь 1.5 года, за это время я приобрел знания в
        базовом стеке:{' '}
        <span className="font-medium">HTML, CSS, JS(ES6+), Sass</span> и
        основных принципах адаптивной верстки. В проектах использую UI
        фреймворки <span className="font-medium">Mui и Antd</span>, с недавних
        пор, в приоритет на проектах{' '}
        <span className="font-medium">Tailwind.</span> Знаком с{' '}
        <span className="font-medium">Formik и React-Hook-Form</span>. Знания{' '}
        <span className="font-medium">git</span> на комфортном для работы
        уровне. Активно изучаю библиотеку{' '}
        <span className="font-medium">React</span>, также знаком с методами
        жизненного цикла в классовых компонентах, для навигации использую
        библиотеку <span className="font-medium">React-router</span>, для работы
        с rest api использую{' '}
        <span className="font-medium">RTK Query, axios</span>. В качестве state
        manager использую <span className="font-medium">Redux(toolkit)</span>,
        для работы с асинхронными экшенами использую{' '}
        <span className="font-medium">Redux-Thunk</span>. Также есть базовое
        понимание <span className="font-medium">Typescript</span>. Работаю со
        сборщиком <span className="font-medium">Webpack</span>.<br /> В
        коллекции моих работ присутствует проект, для которого я написал
        backend. В этом проекте я базово освоил:{' '}
        <span className="font-medium">
          Express, mongoose, multer, bcrypt, jsonwebtoken
        </span>
      </p>

      <h2 className="text-2xl font-bold">То что я сделал</h2>
      <p>
        Мои проекты и материалы с открытым исходным кодом, на{' '}
        <a
          href="https://github.com/elo-dev"
          target="_blank"
          rel="noreferrer"
          className="text-sky-500 font-semibold"
        >
          Github
        </a>
      </p>

      <h3 className="text-2xl font-bold">Сильные стороны</h3>

      <ul className="list-disc list-inside">
        <li>
          Прежде чем просить о помощи, я прикладываю все усилия, чтобы решить
          задачу самостоятельно.
        </li>
        <li>
          Не боюсь брать на себя ответственность за проделанную работу. В срок
          выполняю свои обязанности.
        </li>
        <li>Не стесняюсь просить помощи и помогать другим.</li>
      </ul>
    </div>
  )
}
