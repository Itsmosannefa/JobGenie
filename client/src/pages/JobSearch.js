import React, { useState } from 'react';
import '../styles/JobSearch.css';
// import { Link } from "react-router-dom";
import Navbar from '../components/shared/Navbar';


const JobSearch = () => {
    const [profession, setProfession] = useState('');
    const [location, setLocation] = useState('');

    const handleSearch = (event) => {
        event.preventDefault();
        alert(`Searching for ${profession} jobs in ${location}`);
    };

    return (
        <div className="job-search">
            <header className="header">
                <Navbar></Navbar>
            </header>

            <section className="search-section">
                <h1>Find a <span className="highlight">Job</span> You Will Love.</h1>
                <form className="search-form" onSubmit={handleSearch}>
                    <input
                        type="text"
                        placeholder="Profession you are looking for"
                        value={profession}
                        onChange={(e) => setProfession(e.target.value)}
                        required
                    />
                    <input
                        type="text"
                        placeholder="Any particular location?"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                        required
                    />
                    <button type="submit" className="search-btn">🔍</button>
                </form>
            </section>
        </div>
    );
};

export default JobSearch;