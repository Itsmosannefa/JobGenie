import React, { useState } from 'react';
import '../styles/about.css';
import { Link } from 'react-router-dom';

const AboutPage = () => {
    // State for menu toggle
    const [menuOpen, setMenuOpen] = useState(false);

    // Function to toggle the menu
    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <div className="bg">
            <div className="main">
                <nav className="navbar">
                    <div className="logo">
                        <Link to="/">
                            <img src="/assets/images/logo/logo.jpg" alt="logo" />
                        </Link>
                    </div>
                    <div className={`menu-icon ${menuOpen ? "open" : ""}`} onClick={toggleMenu}>
                        <div className="bar1"></div>
                        <div className="bar2"></div>
                        <div className="bar3"></div>
                    </div>
                    <ul className={`nav-links ${menuOpen ? "show" : ""}`}>
                        <li><Link to="/HomePage">Home</Link></li>
                        <li><Link to="/AboutPage">About</Link></li>
                        <li><Link to="/services">Services</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                        <li><Link to="/login" className="myBtn">Login</Link></li>
                    </ul>
                </nav>
            </div>

            <div className="content">
                <h1>About Us</h1>
                <p className="par">
                    Welcome to Job Genie! We are passionate about delivering top-notch services in web development, software engineering, and digital solutions. Our team of developers is dedicated to creating innovative and efficient code for a variety of projects.
                </p>

                <strong>Copyright Information:</strong><br />
                All content on this website is copyright © 2024 CODE FORGERS. Unauthorized use or reproduction of this content is strictly prohibited.

                <h2>Developer Details</h2>
                <p className="par">
                    <strong>Team Member:</strong> Vignesh,<br />
                    <strong>Email:</strong> dvigneshvcp2@gmail.com<br />
                    <strong>State:</strong> Tamil Nadu,<br />
                </p>
                <p className="par">
                    <strong>Team Member:</strong> Mosannefa Khanam,<br />
                    <strong>Email:</strong> khanammosanefa@gmail.com<br />
                    <strong>State:</strong> Jharkhand,<br />
                </p>
                <p className="par">
                    <strong>Team Member:</strong> Jagatadi Anitha,<br />
                    <strong>Email:</strong> anithajagatadi112@gmail.com<br />
                    <strong>State:</strong> Andhra Pradesh,<br />
                </p>
                <p className="par">
                    <strong>Team Member:</strong> Thadani Parthiv Dilipbhai,<br />
                    <strong>Email:</strong> thadaniparthiv2@gmail.com<br />
                    <strong>State:</strong> Gujarat,<br />
                </p>
                <p className="par">
                    <strong>Team Lead:</strong> Vivek Kumar,<br />
                    <strong>Email:</strong> vivekkumar090902@gmail.com<br />
                    <strong>State:</strong> ?,<br />
                </p>
                <p className="par">
                    <strong>Team Lead:</strong> Manoj,<br />
                    <strong>Email:</strong> kannanmanoj2005@gmail.com<br />
                    <strong>State:</strong> Tamil Nadu,<br />
                </p>
                <p className="par">
                    <strong>Team Lead:</strong> Ashwathy,<br />
                    <strong>Email:</strong> aswathynvv@gmail.com<br />
                    <strong>State:</strong> ?,<br />
                </p>

                <button className="cn"><a href="contact.html">Contact Us</a></button>
            </div>
        </div>
    );
};

export default AboutPage;
