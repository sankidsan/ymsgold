import React from 'react';
import './App.css'; // Import the CSS file for styling

const Contact = () => {
    return (
        <div className="contact-container container">
           <h2 className="text-center mb-4">Get In Touch</h2>
            <form className="contact-form">
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" className="form-control" placeholder="Enter your name" required />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" className="form-control" placeholder="Enter your email" required />
                </div>
                <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea id="message" className="form-control" placeholder="Write your message" rows="5" required></textarea>
                </div>
                <button type="submit" className="contact-submit-btn">Send Message</button>
            </form>
        </div>
    );
};

export default Contact;
