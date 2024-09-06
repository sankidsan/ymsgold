import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'; // Make sure you create this CSS file

const About = () => {
    return (
        <div className="container mt-1">
             <h2 className="text-center mb-4">About Us</h2>
            
            <section className="mb-3">
                <h4>Our Story</h4>
                <p>
                    Welcome to Sri Yoga Murugan Jewels, where elegance meets craftsmanship. Established in 2003, we have been dedicated to creating exquisite jewelry pieces that reflect beauty and sophistication. Our journey began with a passion for fine craftsmanship and a vision to provide our customers with timeless treasures.
                </p>
            </section>
            
            <section className="mb-2">
                <h4>Our Mission</h4>
                <p>
                    Our mission is to offer high-quality jewelry that adds a touch of elegance to every occasion. We are committed to excellence in design and craftsmanship, ensuring that each piece we create is a testament to our dedication to beauty and quality.
                </p>
            </section>
            
            
        </div>
    );
};

export default About;
