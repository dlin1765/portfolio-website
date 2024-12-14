import Button from "./Button";
import { useState, useEffect} from "react";
import '../styles/SideMenu.css';

import menuLogo from '../assets/menu-svg.svg';

function SideMenu({onClick, active}){
    return(
        <>
            <div className="nav">
                <div
                    onClick={onClick}
                    className="invisButton"
                >
                    <img src={menuLogo} className='menuLogo'></img>
                </div>
                
            </div>
        </>
    );
}

export default SideMenu