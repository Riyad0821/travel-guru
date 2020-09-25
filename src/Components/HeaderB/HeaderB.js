import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './HeaderB.css'
import { Link } from 'react-router-dom';
import logo from '../../images/logo.png';


const Header = () => {
    return (
        <div className="headerB">
            <nav className="nav nav-color bg-transparent">
                <ul className="text-color">
                    <li>
                        <img className="logo" src={logo} alt=""/>
                    </li>
                    <li>
                        <input type="text" placeholder="Search Your Destination" className="sBox"/>
                    </li>
                    <li>
                        <Link to="/home">News</Link>
                    </li>
                    <li>
                        <Link to="/home">Destination</Link>
                    </li>
                    <li>
                        <Link to="/home">Blog</Link>
                    </li>
                    <li>
                        <Link to="/home">Contact</Link>
                    </li>
                    <li>
                        <Link to="/login"><button class="btn">Login</button></Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Header;