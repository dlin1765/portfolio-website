import '../styles/BodyCard.css';
import '../styles/ExperienceSection.css';
import Section from './Section';
import TechTag from './TechTag';

import d2Img from '../assets/d2full.png';
import sinigangImg from '../assets/sinigang.png';
import sunkenCostImg from '../assets/sunkencost.png';

const style = `skillsSection bodyCardParent`

function ExperienceSection(){

    return(
        <>
            <Section
                headerText={'EXPERIENCE'}
                extraStyle={'experienceSection'}
            >
                <div className = 'projectContainer'>
                    <div style ={{
                        display:'flex',
                        flexDirection: 'column',
                        gap: 'clamp(1vh, 16px, 1.5vh)'
                    }}
                    >
                        <div className="experience">
                            <div className="experienceText">
                                <div className="projectTitle">
                                    <strong>Color Breathing VR LLC</strong>
                                </div>
                                <div className="projectDescription">
                                    Co-founder
                                </div>
                                <div className="projectDescription">
                                    Developed a VR wellness app for the Meta Quest store with 100 monthly users
                                </div>
                            </div>
                            <div className="experienceDate">
                                July 2024 - Present
                            </div>
                        </div>
                    </div>
                    <div style ={{
                        display:'flex',
                        flexDirection: 'column',
                        gap: 'clamp(1vh, 16px, 1.5vh)'
                    }}>
                        <div className="experience">
                            <div className="experienceText">
                                <div className="projectTitle">
                                    <strong>Resilience Inc</strong>
                                </div>
                                <div className="projectDescription">
                                    VR Game Development Intern
                                </div>
                                <div className="projectDescription">
                                    VR Game Development Intern
                                </div>
                            </div>
                            <div className="experienceDate">
                                July 2023 - August 2024
                            </div>
                        </div>
                    </div>
                    <div style ={{
                        display:'flex',
                        flexDirection: 'column',
                        gap: 'clamp(1vh, 16px, 1.5vh)'
                    }}>
                        <div className="experience">
                            <div className="experienceText">
                                <div className="projectTitle">
                                    <strong>T'sarE LLC</strong>
                                </div>
                                <div className="projectDescription">
                                    Gameplay Programmer
                                </div>
                            </div>
                            <div className="experienceDate">
                                July 2024 - Present
                            </div>
                        </div>
                    </div>
                </div>

            </Section>
        </>
    );
}

export default ExperienceSection