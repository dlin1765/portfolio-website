import '../styles/BodyCard.css';
import Section from './Section';
import TechTag from './TechTag';

import d2Img from '../assets/d2full.png';
import sinigangImg from '../assets/sinigang.png';
import sunkenCostImg from '../assets/sunkencost.png';
import lobbyLinkableImg from '../assets/lobbylinkablepic.png'
import rightArrow from '../assets/arrow-right-svgrepo-com.svg'
import gitLogo from '../assets/github-mark.svg';
import linkLogo from '../assets/external-link-svgrepo-com.svg';

const style = `skillsSection bodyCardParent`

function ProjectSection(){

    return(
        <>
            <Section
                headerText={'FEATURED PROJECTS'}
                extraStyle={'projectSection'}
                id='projects'
            >
                <div className = 'projectContainer'>
                    <div style ={{
                        display:'flex',
                        flexDirection: 'column',
                        gap: 'clamp(1vh, 16px, 1.5vh)'
                        
                    }}
                        className='shouldAnimate'
                    >
                        <div className="project">
                            <div className="projectText">
                                <a href="https://www.down2react.com/" target="_blank" rel="noopener noreferrer" className ='arrowLink'>
                                    <div className="projectTitle">
                                        <strong>Down 2 React</strong>
                                    </div>
                                    <img src = {rightArrow} className='rightArrow'></img>
                                </a>
                                <div className="projectDescription">
                                    A reaction time test website that tests your ability to react to a notorious move in Tekken 8. The website 
                                    tracks your stats as you play and stores the data locally in your browser so you can see your progress over time. 
                                    It also allows you to share your current stats by copying a message to your clipboard to display it in a visually appealing way. 
                               
                                    Built using React JS and hosted with AWS Amplify.
                                </div>
                                <div className='techList'>
                                    <TechTag content ={'HTML/CSS'}/>
                                    <TechTag content={'Javascript'}/>
                                    <TechTag content={'React'}/>
                                    <TechTag content={'AWS services'}/>
                                </div>  
                            </div>
                            <div className="projectImg">
                                <img
                                    className='imgProjects'
                                    src= {d2Img}
                                >
                                </img>
                            </div>
                        </div>
                        
                    </div>
                    <div style ={{
                        display:'flex',
                        flexDirection: 'column',
                        gap: 'clamp(1vh, 16px, 1.5vh)'
                    }}
                        className='shouldAnimate'
                    >
                        <div className="project">
                            <div className="projectText">
                                <a href="https://youtu.be/NEsdnIBBl48?si=ZWC9RNc0okb0VMKH" target="_blank" rel="noopener noreferrer" className ='arrowLink'>
                                    <div className="projectTitle">
                                        <strong>Sinigang</strong>
                                    </div>
                                    <img src = {rightArrow} className='rightArrow'></img>
                                </a>
                                <div className="projectDescription">
                                    A VR Cooking simulator game that explores the Filipino second generation immigrant
                                    identity and culture through environmental story telling and food. The game was 
                                    the SCU Greenhouse Game Dev's Winter 2024 project.
                                </div>
                                <div className='techList'>
                                    <TechTag content ={'Unity'}/>
                                    <TechTag content={'C#'}/>
                                    <TechTag content={'Shader graph'}/>
                                    <TechTag content={'Unity XR Toolkit'}/>
                                </div>
                            </div>
                            <div className="projectImg">
                                <img
                                    className='imgProjects'
                                    src= {sinigangImg}
                                >
                                </img>
                            </div>
                        </div>
                    </div>
                    <div style ={{
                        display:'flex',
                        flexDirection: 'column',
                        gap: 'clamp(1vh, 16px, 1.5vh)'
                    }}
                        className='shouldAnimate'
                    >
                        <div className="project">
                            <div className="projectText">
                                <a href="https://lobbylinkable.com" target="_blank" rel="noopener noreferrer" className ='arrowLink'>
                                    <div className="projectTitle">
                                        <strong>Lobby Linkable</strong>
                                    </div>
                                    <img src = {rightArrow} className='rightArrow'></img>
                                </a>
                                <div className="projectDescription">
                                    A site to help users setup Lobby Generator, a program that fetches and copies your Steam lobby link while you're still in game to your clipboard and makes it clickable. Utilizes URL parameters and React Router to redirect users to the Steam lobby.
                                    Automatically launches when you load up a Steam game. 
                                </div>
                                <div className='techList'>
                                    <TechTag content ={'React'}/>
                                    <TechTag content ={'Node.js'}/>
                                    <TechTag content={'HTML/CSS'}/>
                                    <TechTag content={'Javascript'}/>
                                    <TechTag content={'Python'}/>
                                    <TechTag content={'AWS'}/>
                                    <TechTag content={'Nginx'}/>
                                </div>
                            </div>
                            <div className="projectImg">
                                <img
                                    className='imgProjects'
                                    src= {lobbyLinkableImg}
                                >
                                </img>
                            </div>
                        </div>
                        
                    </div>
                    <div style ={{
                        display:'flex',
                        flexDirection: 'column',
                        gap: 'clamp(1vh, 16px, 1.5vh)'
                    }}
                        className='shouldAnimate'
                    >
                        <div className="project">
                            <div className="projectText">
                                <a href="https://devpost.com/software/sunken-cost" target="_blank" rel="noopener noreferrer" className ='arrowLink'>
                                    <div className="projectTitle">
                                        <strong>Sunken Cost</strong>
                                    </div>
                                    <img src = {rightArrow} className='rightArrow'></img>
                                </a>
                                <div className="projectDescription">
                                    Action time management game inspired by Overcooked 2. The goal is to keep your ship afloat and 
                                    running as long as possible to make it to land. The water level in the ship continously rises, and different events such as your sails breaking and holes forming require the player to always
                                    be doing something.
                                </div>
                                <div className='techList'>
                                    <TechTag content ={'Roblox Studio'}/>
                                    <TechTag content={'Lua'}/>
                                    <TechTag content={'🏆 SCU 2024 Roblox Hackathon Winner'}/>
                                </div>
                            </div>
                            <div className="projectImg">
                                <img
                                    className='imgProjects'
                                    src= {sunkenCostImg}
                                >
                                </img>
                            </div>
                        </div>
                        
                    </div>
                    
                </div>

            </Section>
        </>
    );
}

export default ProjectSection