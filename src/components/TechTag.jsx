import '../styles/TechTag.css'

function TechTag({content}){
    return(
        <>
            <div className='techParent'> 
                {content}
            </div>
        </>
    );
}

export default TechTag