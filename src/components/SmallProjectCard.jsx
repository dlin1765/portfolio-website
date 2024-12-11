import gitLogo from '../assets/github-mark.svg';
import linkLogo from '../assets/external-link-svgrepo-com.svg';
import '../styles/BodyCard.css'

function SmallProjectCard({title, children, description, demoLink, gitLink}){
    
    return(
        <>
            <div className="projectCard" style={style}>
                <div className='projectTitle' style = {projTitle}>
                    <strong>{title}</strong>
                </div>
                <div className="techList" style = {projTitle}> 
                    {children}
                </div>
                <div className="projectDescription" style = {projTitle}>
                    {description}
                </div>
                <div className="buttonContainer" style = {btnContainer}>
                    {demoLink ? 
                        <a href = {demoLink} target="_blank" rel="noopener noreferrer" pointerEvents ='all'>
                            <div className = 'btn'>
                                <div>Demo</div>
                                <img src={linkLogo} alt ='link logo' style={{width:'18px', height:'18px'}}/>
                            </div>
                             
                        </a>
                        : 
                        <></>}
                    {gitLink ?
                        <a href = {gitLink} target="_blank" rel="noopener noreferrer" pointerEvents ='all'>
                            <div className = 'btn'>
                                <div>Github</div>
                                <img src={gitLogo} alt ='git logo' style={{width:'18px', height:'18px'}}/>
                            </div>
                        </a>
                        :
                        <></>}
                </div>
            </div>
        
        </>
    )
}


const style = {
    borderRadius: '8px',
    border: '1px solid transparent',
    boxShadow:'rgba(0, 0, 0, 0.1) 0px 2px 5px',
    padding: '2vh 1vw',
    display:'flex',
    flexDirection: 'column',
    
}

const btnContainer ={
    display: 'flex',
    justifyContent: 'end',
    gap: 'clamp(1px, 5vw, 5.1vw)',
    alignSelf:'flex-start',
    marginTop: 'auto',
}

const projTitle ={
    margin: '0 0 1em 0',
}



export default SmallProjectCard