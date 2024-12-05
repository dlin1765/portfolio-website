import '../styles/BodyCard.css'


function Section({headerText, extraStyle, children}){
    const style = `bodyCardParent ${extraStyle}`
    return(
        <>
            <div className={style}>
                <p className='sectionTextHeader'><strong>{headerText}</strong></p>
                <div className="sectionContent">
                    {children}
                </div>
            </div>
        </>
    );
}

export default Section