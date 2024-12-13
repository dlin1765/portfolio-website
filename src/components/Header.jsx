import Button from "./Button";
import '../styles/Header.css';
import '../styles/ContactFooter.css';

function Header(){
    return(
        <>
            <div className="headerParent" id="header">
                <ol className = "nav">
                    <a href="#intro">
                        <li className="link">ABOUT</li>
                    </a>
                    <a href="#projects">
                        <li className="link">PROJECTS</li>
                    </a>
                    <a href="#experiences">
                        <li className="link">EXPERIENCE</li>
                    </a>
                    <a href="#otherProjects">
                        <li className="link">OTHER PROJECTS</li>
                    </a>
                    <a href="#contact">
                        <li className="link">CONTACT</li>
                    </a>
                </ol>
            </div>
        </>
    );
}

export default Header