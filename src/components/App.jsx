import { useState } from 'react'
import '../styles/App.css'

import Header from './Header'
import BodyCardIntro from './BodyCardIntro'
import SkillsSection from './SkillsSection'
import ProjectSection from './ProjectSection'
import ExperienceSection from './ExperienceSection'

function App() {

  return (
    <>
        
        <div className="mainBody">
          <Header/>
          <BodyCardIntro/>
          <ProjectSection/>
          <ExperienceSection/>
        </div>
    </>
  )
}

export default App
