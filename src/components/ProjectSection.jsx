import '../styles/BodyCard.css'
import Section from './Section';
const style = `skillsSection bodyCardParent`

function ProjectSection(){

    return(
        <>
            <Section
                headerText={'FEATURED PROJECTS'}
                extraStyle={'projectSection'}
            >
                <div className = 'projectContainer'>

                </div>

            </Section>
        </>
    );
}

export default ProjectSection