import '../styles/BodyCard.css'
import Section from './Section';
const style = `skillsSection bodyCardParent`

function SkillsSection(){

    return(
        <>
            <Section 
                text = {'SKILLS'}
                extraStyle = {'skillSection'}
            >
                <div className ='techList'>
                    <p className='sectionText'><strong>Languages</strong></p>
                    <p className="sectionText">C++</p>
                    <p className="sectionText">C#</p>
                    <p className="sectionText">Java</p>
                    <p className="sectionText">HTML / CSS</p>
                    <p className="sectionText">Javascript</p>
                    <p className="sectionText">Python</p>
                    <p className="sectionText">SQL</p>
                </div>
                <div className="techList">
                    <p className='sectionText'><strong>Technologies</strong></p>
                    <p className="sectionText">Bash</p>
                    <p className="sectionText">Git / Github</p>
                    <p className="sectionText">React Native</p>
                    <p className="sectionText">Node.js</p>
                    <p className="sectionText">AWS services</p>
                    <p className="sectionText">Unity</p>
                    <p className="sectionText">Jira</p>
                </div>
            </Section>
            
        </>
    );
}

export default SkillsSection