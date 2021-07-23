import React, {useState} from 'react'
import './Navbar.css'
import {Link} from 'react-router-dom';


function Navbar() {
    // show menu is only gonna be used for iphone dropdown menu
    const [showMenu, setMenu] = useState(false);

    return (
        <div className='navbar-wrapper'>
            <nav className="navbar"> 
                <div className="navbar-container">

                    {/* Navbar Logo */}
                    <Link to="/" className="logo">
                        <img src="images/Logo.svg" alt="" width='300' height='100'/>
                    </Link>
                    
                    {/*Menu Icon  */}
                    <div className="menu-wrapper" onClick={ () => setMenu(!showMenu)}>
                        <i className={showMenu ? 'fas fa-times' : 'fas fa-bars'}></i>
                    </div>

                    {/* Menu Items */}
                    <ul className={showMenu ? 'menu-items active' : 'menu-items'}>
                        <li className="nav-item">
                            <Link 
                                to='/'
                                className="nav-link"
                                // Make sure to disable drop down menu once item has been clicked
                                onClick={ () => setMenu(false)}>
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link 
                                to='/products'
                                className="nav-link"
                                // Make sure to disable drop down menu once item has been clicked
                                onClick={ () => setMenu(false)}>
                                Products
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link 
                                to='/sign-up'
                                className="nav-link"
                                // Make sure to disable drop down menu once item has been clicked
                                onClick={ () => setMenu(false)}>
                                Sign Up
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link 
                                to='/about-us'
                                className="nav-link"
                                // Make sure to disable drop down menu once item has been clicked
                                onClick={ () => setMenu(false)}>
                                About Us
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link 
                                to='/about-us'
                                className="nav-link"
                                // Make sure to disable drop down menu once item has been clicked
                                onClick={ () => setMenu(false)}>
                                Contact Us
                            </Link>
                        </li>
                    </ul>

                </div>
            </nav>
        </div>
    
        

    );
}

export default Navbar
