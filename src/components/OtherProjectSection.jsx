import '../styles/BodyCard.css';
import '../styles/index.css';
import Section from './Section';
import TechTag from './TechTag';
import SmallProjectCard from './SmallProjectCard';

import d2Img from '../assets/d2full.png';
import sinigangImg from '../assets/sinigang.png';
import sunkenCostImg from '../assets/sunkencost.png';


const style = `skillsSection bodyCardParent`

function OtherProjectSection(){

    return(
        <>
            <Section
                headerText={'OTHER PROJECTS'}
                extraStyle={'projectSection'}
            >
                 <div className='hidden'>invis</div>
                <div className = 'otherProjectContainer'>
                    <SmallProjectCard
                        title={'Sticky Note+'}    
                        description={'Sticky Note+ was created for a software design class at Santa Clara University. As a group, we wanted to create an improved version of the notes app on IOS. Our goal was to create a simple way to keep track of different tasks and events while not distracting from normal note taking ability.'}
                        gitLink={'https://github.com/dlin1765/stickynote'}
                    >
                        <TechTag content ={'Flutter'}/>
                        <TechTag content={'Dart'}/>
                        <TechTag content={'Android Studio'}/>
                        <TechTag content={'VSCode'}/>
                    </SmallProjectCard>

                    <SmallProjectCard
                        title={'10 Lightyears from Eden'}
                        description={'Puzzle/Story VR game inspired ​by Outer Wilds with an ​underlying story about mental ​health. Specifically avoidance, ​perfectionism, and acceptance'}
                        gitLink={'https://github.com/dlin1765/10LightYearsFromEden'}
                        demoLink={'https://www.youtube.com/watch?v=-_aCLRZ51Ys'}
                    >
                        <TechTag content ={'Unity'}/>
                        <TechTag content={'C#'}/>
                        <TechTag content={'Shader graph'}/>
                        <TechTag content={'Unity XR Toolkit'}/>
                    </SmallProjectCard>
                    <SmallProjectCard
                        title={'ParkingOps'}
                        description = {'Project made for SCU’s 2021 INRIX Hackathon. A website that displays the best possible parking locations near your destination using API’s provided by INRIX'}
                        gitLink={'https://github.com/taipeng-liu/inrix_hack'}
                    >
                        <TechTag content={'HTML'}/>
                        <TechTag content={'Python'}/>
                        <TechTag content={'REST API'}/>
                    </SmallProjectCard>

                    <SmallProjectCard
                        title={'SELENA VR'}
                        description={'VR experience designed to foster emotional intelligence and personal growth through a series of levels that incite negative emotions'}
                        demoLink={'https://youtu.be/jKu2BUlnsnw?si=fMz6iTSvmQz9-eVu'}
                        gitLink={'https://www.mylearningtools.org/virtual-reality/'}
                    >
                        <TechTag content ={'Unity'}/>
                        <TechTag content={'C#'}/>
                        <TechTag content={'Shader graph'}/>
                        <TechTag content={'Unity XR Toolkit'}/>
                    </SmallProjectCard>   

                    <SmallProjectCard
                        title={'Algo Visualizer'}
                        description={'Proof of concept for a game that visualizes and steps through common Computer Science Algorithms to help students learn them'}
                        demoLink={'https://youtu.be/QV7RjZtTyvI?si=Kc5SDQd1849BxKCM'}
                        gitLink={'https://github.com/dlin1765/AlgoVisualizer'}
                    >
                        <TechTag content ={'Unity'}/>
                        <TechTag content={'C#'}/>
                    </SmallProjectCard>
                    <SmallProjectCard
                        title={'Caves of Umbra'}
                        description={'Puzzle based 2D platformer inspired by Plato’s “Allegory of the cave”. Jumping causes the shadow platforms to phase in and out'}
                        demoLink={'https://youtu.be/vnMK02wWbc4?si=6BSA85K3j9WXj6hb'}
                        gitLink={'https://github.com/SCUGuildGamers/CaveOfUmbra'}
                    >
                        <TechTag content ={'Unity'}/>
                        <TechTag content={'C#'}/>
                    </SmallProjectCard>
                    <SmallProjectCard
                        title={'Fetch Quest'}
                        description={'Proof of concept for a Temple Run inspired game but with the goal of balancing cups of coffee as you dodge obstacles'}
                        demoLink={'https://www.youtube.com/watch?v=kCHEljEZAII'}
                        gitLink={'https://github.com/dlin1765/FetchQuest'}
                    >
                        <TechTag content ={'Unity'}/>
                        <TechTag content={'C#'}/>
                    </SmallProjectCard>
                    <SmallProjectCard
                        title={'Polaris'}
                        description={'A 2D underwater platformer about cleaning up the ocean and spreading awareness about ocean pollution'}
                        demoLink={'https://youtu.be/i8pkUCBUQE8?si=d_2AXTAhYHFzK4fd'}
                        gitLink={'https://github.com/SCUGuildGamers/Polaris'}
                    >
                        <TechTag content ={'Unity'}/>
                        <TechTag content={'C#'}/>
                    </SmallProjectCard>
                    <SmallProjectCard
                        title={'The New Chairman'}
                        description={'A top down card game similar to Uno that utilizes the players microphone and speech recognition for specific rules triggered by certain cards'}
                        gitLink={'https://github.com/dlin1765/the-new-chairman'}
                    >
                        <TechTag content ={'Unity'}/>
                        <TechTag content={'C#'}/>
                    </SmallProjectCard>
                </div>
                    

            </Section>
        </>
    );
}

export default OtherProjectSection