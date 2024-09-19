import React, { useState } from 'react';
import styles from './styles.module.css'; // Correct way to import CSS module
import { Link } from 'react-router-dom';

const AboutPage = () => {
    // State for menu toggle
    const [menuOpen, setMenuOpen] = useState(false);

    // Function to toggle the menu
    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <div className={styles.bg}>
            <div className={styles.main}>
                <nav className={styles.navbar}>
                    <div className={styles.logo}>
                        <Link to="/">
                        <img src="/assets/images/favicons/favicon-32x32.png" alt="logo" />
                        </Link>
                    </div>
                    <div className={`${styles['menu-icon']} ${menuOpen ? styles.open : ''}`} onClick={toggleMenu}>
                        <div className={styles.bar1}></div>
                        <div className={styles.bar2}></div>
                        <div className={styles.bar3}></div>
                    </div>
                    <ul className={`${styles['nav-links']} ${menuOpen ? styles.show : ''}`}>
                        <li><Link to="/HomePage">Home</Link></li>
                        <li><Link to="/AboutPage">About us</Link></li>
                        <li><Link to="/services">Services</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                        <li><Link to="/login" className={styles.myBtn}>Login</Link></li>
                    </ul>
                </nav>
            </div>

            <div className={styles.content}>
                <img src="" alt="" />
                <h1>About Us</h1>
                <p className={styles.par}>
                    Welcome to Job Genie! We are passionate about delivering top-notch services in web development, software engineering, and digital solutions. Our team of developers is dedicated to creating innovative and efficient code for a variety of projects.
                </p>

                <strong>Copyright Information:</strong><br />
                All content on this website is copyright © 2024 CODE FORGERS. Unauthorized use or reproduction of this content is strictly prohibited.

                <h2>Developer Details</h2>
                <p className={styles.par}>
                    <strong>Team Member:</strong> Vignesh,<br />
                    <strong>Email:</strong> dvigneshvcp2@gmail.com<br />
                    <strong>State:</strong> Tamil Nadu,<br />
                </p>
                <p className={styles.par}>
                    <strong>Team Member:</strong> Mosannefa Khanam,<br />
                    <strong>Email:</strong> khanammosannefa@gmail.com<br />
                    <strong>State:</strong> Jharkhand,<br />
                </p>
                <p className={styles.par}>
                    <strong>Team Member:</strong> Jagatadi Anitha,<br />
                    <strong>Email:</strong> anithajagatadi112@gmail.com<br />
                    <strong>State:</strong> Andhra Pradesh,<br />
                </p>
                <p className={styles.par}>
                    <strong>Team Member:</strong> Thadani Parthiv Dilipbhai,<br />
                    <strong>Email:</strong> thadaniparthiv2@gmail.com<br />
                    <strong>State:</strong> Gujarat,<br />
                </p>
                <p className={styles.par}>
                    <strong>Team Member:</strong> Vivek Kumar,<br />
                    <strong>Email:</strong> vivekkumar090902@gmail.com<br />
                    <strong>State:</strong> ?,<br />
                </p>
                <p className={styles.par}>
                    <strong>Team Member:</strong> Manoj,<br />
                    <strong>Email:</strong> kannanmanoj2005@gmail.com<br />
                    <strong>State:</strong> Tamil Nadu,<br />
                </p>
                <p className={styles.par}>
                    <strong>Team Member:</strong> Ashwathy,<br />
                    <strong>Email:</strong> aswathynvv@gmail.com<br />
                    <strong>State:</strong> ?,<br />
                </p>

                <button className={styles.cn}><a href="contact.html">Contact Us</a></button>
            </div>
        </div>
    );
};

export default AboutPage;
