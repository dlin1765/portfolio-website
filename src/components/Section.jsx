import '../styles/BodyCard.css'
import '../styles/index.css'


function Section({headerText, extraStyle, children, id}){
    const style = `bodyCardParent ${extraStyle}`
    return(
        <>
            <div className={style} id ={id}>
                <p className='sectionTextHeader shouldAnimateFaster'><strong>{headerText}</strong></p>
                <div className="sectionContent">
                    {children}
                </div>
            </div>
        </>
    );
}

export default Section