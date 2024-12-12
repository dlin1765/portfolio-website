import { useState } from 'react'
import '../styles/App.css'

import Header from './Header'
import BodyCardIntro from './BodyCardIntro'
import SkillsSection from './SkillsSection'
import ProjectSection from './ProjectSection'
import ExperienceSection from './ExperienceSection'
import SmallProjectCard from './SmallProjectCard'
import OtherProjectSection from './OtherProjectSection'
import ContactFooter from './ContactFooter'

function App() {

  return (
    <>
        
        <div className="mainBody">
          
          <Header/>
          <BodyCardIntro/>
          <ProjectSection/>
          <ExperienceSection/>
          <OtherProjectSection/>
          <ContactFooter/>
        </div>
    </>
  )
}
/*
          <Header/>
          <BodyCardIntro/>
          <ProjectSection/>
          <ExperienceSection/>
          <OtherProjectSection/>
*/

export default App
