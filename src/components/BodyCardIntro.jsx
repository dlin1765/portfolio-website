import '../styles/BodyCard.css'

function BodyCardIntro(){
    return(
        <>
            <div className="bodyCardParent introParent" id ='intro'>
                <div className="introText">
                    <h1 className = "h1Intro shouldAnimate">Hi, I'm Daniel Lin</h1>
                    <h2 className = 'h2Intro'>
                        Software engineer and game developer
                    </h2>
                    <h2 className = 'h2Intro bottom'>
                        I'm a new grad
                        Currently learning web development, machine learning, and shader programming.
                    </h2>
                </div>
            </div>
        </>
    );
}

export default BodyCardIntro