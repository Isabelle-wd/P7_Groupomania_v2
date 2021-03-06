import React, { useState } from 'react';
import { Link } from "react-router-dom";
import './Navbar.css';
import Avatar from "@material-ui/core/Avatar";
import PostAddIcon from '@mui/icons-material/PostAdd';

import { AuthContext} from "../../helpers/authContext";

function Navbar() {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    
    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <img
                        alt="logo"
                        src= "images/icon-left-font-monochrome-white.svg"                       
                        width="350"
                        className="icon-logo"
                    />
                    <div className="menu-icon" onClick={handleClick}>
                        <i className={click ? "fas fa-times" : "fas fa-bars"} />
                    </div> 
                    <ul className={click ? "nav-menu active" : "nav-menu" }>
                        <li className="nav-item">
                            <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                                Accueil
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/login" className="nav-links" onClick={closeMobileMenu}>
                                Connexion
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/signup" className="nav-links" onClick={closeMobileMenu}>
                                Inscription
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/profile" className="nav-links" onClick={closeMobileMenu}>
                                <Avatar alt="photo utilisateur" src="images/profile_pic.png"></Avatar>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/createPost" className="nav-links" onClick={closeMobileMenu}>
                            <span class="material-icons-outlined">
post_add
</span>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/" className="nav-links">
                                Deconnexion
                            </Link>
                        </li>
                    </ul>
                    
                </div> 
            </nav>

        </>
    )
}

export default Navbar