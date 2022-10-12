import { Route, Routes } from 'react-router'

import { AboutMe } from './components/AboutMe/AboutMe'
import { Projects } from './components/Projects/Projects'
import { Sidebar } from './components/Sidebar/Sidebar'

const App = () => {
  return (
    <div className="container mx-auto p-10">
      <div className="flex divide-x md:flex-col md:divide-x-0 md:space-y-10">
        <Sidebar />
        <Routes>
          <Route index element={<AboutMe />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
