import '../styles/BodyCard.css';
import headshot from '../assets/headshot.jpg';

function BodyCardIntro(){
    return(
        <>
            <div className="bodyCardParent introParent" id ='intro'>
                <div className="introCard">

                </div>
                <div className="introText">
                    <div className='picIntro'>

                        <img src={headshot} className='introPic'></img>
                        <div className="picText">
                            <h1 className = "h1Intro shouldAnimate">Hi, I'm Daniel Lin</h1>
                            <h2 className = 'h2Intro'>
                                I'm a software engineer and game developer based in <strong className="highlight">Seattle</strong>
                            </h2>
                        </div>

                    </div>
                    <div className = 'introDescription'>
                        I craft experiences to brighten your day.
                        Whether it's creating immersive games in <strong className='highlight'>Unity</strong> and <strong className="highlight">C#</strong> or building interactive web apps with <strong className="highlight">React</strong>, 
                        I focus on creating projects that make an <strong className="highlight">impact</strong>
                    </div>
                    <div className="learning bottom">
                        Currently learning web development, machine learning, and shader programming.
                    </div>
                </div>
            </div>
        </>
    );
}

export default BodyCardIntro