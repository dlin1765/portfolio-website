import Button from "./Button";
import { useState, useEffect} from "react";
import '../styles/Header.css';
import '../styles/ContactFooter.css';
import '../styles/SideMenu.css';
import SideMenu from "./SideMenu";

function Header(){
    const [screen, setScreenSize] = useState(window.innerWidth);
    const [sideMenuClicked, setSideMenuClicked] = useState(false);

    useEffect(() => {
        const handleResize = () => {
          setScreenSize(window.innerWidth);
        };
    
        window.addEventListener('resize', handleResize);
    
        // Clean up the event listener on component unmount
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    function sideMenuOpen(){
        setSideMenuClicked(!sideMenuClicked);
    }



    return(
        <>
            <div className="headerParent" id="header">
                {screen > 768 ? 
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
                    :
                    <SideMenu
                        onClick={sideMenuOpen}
                        active = {sideMenuClicked}
                    />
                }
                
            </div>
            {
                sideMenuClicked ? 
                <div className="sideMenuContent">
                    <ol className = "menuOptions">
                        <a href="#intro" onClick={sideMenuOpen}>
                            <li className="link" >ABOUT</li>
                        </a>
                        <a href="#projects" onClick={sideMenuOpen}>
                            <li className="link">PROJECTS</li>
                        </a>
                        <a href="#experiences" onClick={sideMenuOpen}>
                            <li className="link">EXPERIENCE</li>
                        </a>
                        <a href="#otherProjects" onClick={sideMenuOpen}>
                            <li className="link">OTHER PROJECTS</li>
                        </a>
                        <a href="#contact" onClick={sideMenuOpen}>
                            <li className="link">CONTACT</li>
                        </a>
                    </ol>
                </div>
                :
                <></>
            }
        </>
    );
}

export default Header