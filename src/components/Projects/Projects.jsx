import { projects } from '../../data'

export const Projects = () => {
  return (
    <div className="pl-10 w-[70%] md:w-full md:pl-0">
      <h1 className="text-5xl font-bold">Проекты</h1>
      {projects.map((item) => (
        <div key={item.id} className="space-y-3 mt-10">
          <h3 className="font-semibold text-2xl">{item.title}</h3>
          <p className="font-light text-lg">{item.description}</p>
          <p className="font-medium text-lg">🛠 Stack: {item.stack}</p>
          <p className="font-light text-lg">
            Ссылка на проект{' '}
            <a
              href={item.link}
              target="_blank"
              rel="noreferrer"
              className="text-sky-500 font-semibold"
            >
              Link
            </a>
          </p>
          <img src={item.img} alt={item.title} />
        </div>
      ))}
    </div>
  )
}
