import React from 'react'
import { Route, Routes } from 'react-router-dom'
import style from './App.module.scss'
import { AboutMe } from './components/AboutMe/AboutMe'
import { Projects } from './components/Projects/Projects'
import { Sidebar } from './components/Sidebar/Sidebar'
import './FontAwesomeIcon/index'

const App = () => {
  return (
    <div className={style.app__container}>
      <div className={style.wrapper}>
        <Sidebar />
        <Routes>
          <Route path="/" element={<AboutMe />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
