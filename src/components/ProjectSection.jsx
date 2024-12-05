import '../styles/BodyCard.css';
import Section from './Section';
import TechTag from './TechTag';

import d2Img from '../assets/d2full.png';
import sinigangImg from '../assets/sinigang.png';
import sunkenCostImg from '../assets/sunkencost.png';

const style = `skillsSection bodyCardParent`

function ProjectSection(){

    return(
        <>
            <Section
                headerText={'FEATURED PROJECTS'}
                extraStyle={'projectSection'}
            >
                <div className = 'projectContainer'>
                    <div style ={{
                        display:'flex',
                        flexDirection: 'column'
                    }}>
                        <div className="project">
                            <div className="projectText">
                                <div className="projectTitle">
                                    <strong>Down 2 react</strong>
                                </div>
                                <div className="projectDescription">
                                    A reaction time test website that tests your ability to react specifically to one move in Tekken 8.
                                    Built using React Native and hosted with AWS Amplify
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
                        <div className='techList'>
                            <TechTag content={'Javascript'}/>
                            <TechTag content={'React'}/>
                        </div>
                    </div>
                    <div className="project">
                        <div className="projectText">
                            <div className="projectTitle">
                                <strong>Sinigang</strong>
                            </div>
                            <div className="projectDescription">
                                A VR Cooking simulator game that explores the Filipino second generation immigrant 
                                identity and culture through environmental story telling and food
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
                    <div className="project">
                        <div className="projectText">
                            <div className="projectTitle">
                                <strong>Sunken Cost</strong>
                            </div>
                            <div className="projectDescription">
                                Action time management game inspired by Overcooked 2
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

            </Section>
        </>
    );
}

export default ProjectSection