import React from 'react';
import './App.css'; 
const GoldRate = () => {
    const handleClick = () => {
        // Redirect to Google search for gold rate per gram
        window.open('https://www.google.com/search?q=current+gold+rate+per+gram', '_blank');
    };

    return (
        <div className="gold-rate-button-container">
            <button className="btn btn-primary" onClick={handleClick}>
                Check Current Gold Rate
            </button>
        </div>
    );
};

export default GoldRate;
