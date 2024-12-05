import Button from "./Button";
import '../styles/Header.css'

function Header(){
    return(
        <>
            <div className="headerParent">
                <ol className = "nav">
                    <li>About</li>
                    <li>Skills</li>
                    <li>Projects</li>
                    <li>Experience</li>
                    <li>Contact</li>
                </ol>
                <Button/>
            </div>
        </>
    );
}

export default Header