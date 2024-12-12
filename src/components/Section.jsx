import '../styles/BodyCard.css'
import '../styles/index.css'


function Section({headerText, extraStyle, children}){
    const style = `bodyCardParent ${extraStyle}`
    return(
        <>
            <div className={style}>
                <p className='sectionTextHeader shouldAnimateFaster'><strong>{headerText}</strong></p>
                <div className="sectionContent">
                    {children}
                </div>
            </div>
        </>
    );
}

export default Section