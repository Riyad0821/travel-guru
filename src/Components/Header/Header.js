import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Header.css'
import { Link } from 'react-router-dom';
import logo from '../../images/logow.png';

const Header = () => {
    return (
        <div className="header">
            <nav className="nav bg-transparent">
                <ul className="text-color">
                    <li>
                        <img className="logo" src={logo} alt=""/>
                    </li>
                    <li>
                        <input type="text" placeholder="Search Your Destination" className="searchBox"/>
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
                        <Link to="/login"><button className="btn">Login</button></Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Header;