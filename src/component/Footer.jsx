import React from 'react';
import './App.css'; // Import the CSS file for styling
import '@fortawesome/fontawesome-free/css/all.min.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="row text-center text-md-left">
                    <div className="col-md-4 col-sm-12 mb-4">
                        <h5>Contact Us</h5>
                        <ul className="list-unstyled contact-info">
                            <li><i className="fas fa-envelope"></i> senthilkuma24@gmail.com</li>
                            <li><i className="fas fa-phone"></i> +91 9894924777</li>
                            <li><i className="fas fa-map-marker-alt"></i> 22, Vandikara St, Ramanathapuram</li>
                        </ul>
                    </div>
                    
                    <div className="col-md-4 col-sm-12 mb-4">
                        <h5>Follow Us</h5>
                        <div className="social-links d-flex justify-content-center">
                            <a href="#" target="_blank" rel="noopener noreferrer" className="social-icon">
                                <i className="fab fa-facebook-f"></i>
                            </a>
                            <a href="#" target="_blank" rel="noopener noreferrer" className="social-icon">
                                <i className="fab fa-twitter"></i>
                            </a>
                            <a href="#" target="_blank" rel="noopener noreferrer" className="social-icon">
                                <i className="fab fa-instagram"></i>
                            </a>
                            <a href="#" target="_blank" rel="noopener noreferrer" className="social-icon">
                                <i className="fab fa-linkedin-in"></i>
                            </a>
                            <a href="#" target="_blank" rel="noopener noreferrer" className="social-icon">
                                <i className="fab fa-youtube"></i>
                            </a>
                        </div>
                    </div>

                    <div className="col-md-4 col-sm-12 mb-4">
                        <h5>Quick Links</h5>
                        <ul className="list-unstyled footer-links">
                            <li><a href="/">Home</a></li>
                            <li><a href="/">Shop</a></li>
                            <li><a href="/">About</a></li>
                            <li><a href="/">Contact</a></li>
                        </ul>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 text-center mt-1 mb-0">
                        <p>&copy; {new Date().getFullYear()} Sri Yoga Murugan Jewels. All rights reserved.</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
