import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faBars,faTimes} from '@fortawesome/free-solid-svg-icons'
import { Button } from './Button';
import './Navbar.css'
import {SiYourtraveldottv} from 'react-icons/si'

function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);
    const handleClick = ()=>{
        setClick(!click);
    }
    const closeMobileMenu = () =>{
        setClick(false);
    }
    const showButton = () => {
        if(window.innerWidth<=960){
            setButton(false);
        }else{
            setButton(true);
        }
    }
    window.addEventListener('resize',showButton);
    useEffect(()=>{
        showButton()
    },[])
    return (
    <>
    <nav className="navbar">
        <div className="navbar-container">
            <Link rel="stylesheet" to="/" className="navbar-logo" onClick={closeMobileMenu}>
            <SiYourtraveldottv />&nbsp; WeTravel 
            </Link>
            <div className="menu-icon">
                <FontAwesomeIcon icon={click? faTimes : faBars}  onClick={handleClick} />
            </div>
            <ul className={click? 'nav-menu active' : 'nav-menu'}>
                <li className="nav-items">
                    <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                        Home
                    </Link>
                </li>
                <li className="nav-items">
                    <Link to="/services" className="nav-links" onClick={closeMobileMenu}>
                        Services
                    </Link>
                </li>
                <li className="nav-items">
                    <Link to="/signup" className="nav-links-mobile" onClick={closeMobileMenu}>
                       Sign Up
                    </Link>
                </li>
            </ul>
            {button && <Button buttonStyle='btn--outline' buttonSize='btn--medium'>SIGN UP</Button>}
        </div>
    </nav>
    
    </>
  );
}

export default Navbar