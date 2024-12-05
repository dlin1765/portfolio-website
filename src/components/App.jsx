import { useState } from 'react'
import '../styles/App.css'

import Header from './Header'
import BodyCardIntro from './BodyCardIntro'
import SkillsSection from './SkillsSection'
import ProjectSection from './ProjectSection'

function App() {

  return (
    <>
        
        <div className="mainBody">
          <Header/>
          <BodyCardIntro/>
      
          <ProjectSection/>
        </div>
    </>
  )
}

export default App
