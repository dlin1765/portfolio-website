import '../styles/BodyCard.css';
import '../styles/ExperienceSection.css';
import Section from './Section';
import TechTag from './TechTag';

import d2Img from '../assets/d2full.png';
import sinigangImg from '../assets/sinigang.png';
import sunkenCostImg from '../assets/sunkencost.png';
import rightArrow from '../assets/arrow-right-svgrepo-com.svg'

const style = `skillsSection bodyCardParent`

function ExperienceSection(){

    return(
        <>
            <Section
                headerText={'EXPERIENCE'}
                extraStyle={'experienceSection'}
                id = 'experiences'
            >
                <div className = 'projectContainer'>
                    <div 
                    className='experienceItem shouldAnimate'
                    >
                        <div className="experience">
                            <div className="experienceText">
                                <a href="https://www.colorbreathingvr.com/" target="_blank" rel="noopener noreferrer" className ='arrowLink'>
                                    <div className="projectTitle">
                                        <strong>Color Breathing VR LLC</strong>
                                    </div>
                                    <img src = {rightArrow} className='rightArrow'></img>
                                </a>
                                <div className="experienceRole">
                                    Co-founder
                                </div>
                                <div className="experienceDescription">
                                    Developed a VR wellness app for the Meta Quest store with 100 monthly users
                                </div>
                            </div>
                            <div className="experienceDate">
                                July 2024 - Present
                            </div>
                        </div>
                    </div>
                    <div 
                    className='experienceItem shouldAnimate'
                    >
                        <div className="experience">
                            <div className="experienceText">
                                <a href="https://www.mylearningtools.org/" target="_blank" rel="noopener noreferrer" className ='arrowLink'>
                                    <div className="projectTitle">
                                        <strong>Resilience Inc</strong>
                                    </div>
                                    <img src = {rightArrow} className='rightArrow'></img>
                                </a>
                                <div className="experienceRole">
                                    VR Game Development Intern
                                </div>
                                <div className="experienceDescription">
                                    Designed and developed features using Unity and C# for SELENA VR
                                </div>
                            </div>
                            <div className="experienceDate">
                                July 2023 - August 2024
                            </div>
                        </div>
                    </div>
                    <div 
                    className='experienceItem shouldAnimate'
                    >
                        <div className="experience">
                            <div className="experienceText">
                                <a href="https://richardtbeard.wixsite.com/tsare" target="_blank" rel="noopener noreferrer" className ='arrowLink'>
                                    <div className="projectTitle">
                                        <strong>T'sarE LLC</strong>
                                    </div>
                                    <img src = {rightArrow} className='rightArrow'></img>
                                </a>
                                <div className="experienceRole">
                                    Gameplay Programmer
                                </div>
                                <div className="experienceDescription">
                                    Part time programmer for T'sarE's upcoming 3D platformer, developing gameplay features using Unreal Engine 4
                                </div>
                            </div>
                            <div className="experienceDate">
                                July 2024 - Present
                            </div>
                        </div>
                    </div>
                    <div className="resume">
                        <a href="src/assets/d2full.png" target="_blank" rel="noopener noreferrer" className ='arrowLink'>
                            <div className="projectTitle">
                                <strong>View my resume</strong>
                            </div>
                            <img src = {rightArrow} className='rightArrow'></img>
                        </a>
                    </div>
                </div>

            </Section>
        </>
    );
}

export default ExperienceSection