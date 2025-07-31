import React from 'react';
import MainLayout from '../layouts/MainLayout';

export const About = () => {
    return (
        <MainLayout>
            <div className="container mx-auto px-4 py-8">
                <h1 className="text-3xl font-bold mb-4">About Us</h1>
                <p className="mb-4">
                    Welcome to our application! We are dedicated to providing the best services to our clients.
                    Our team is composed of experienced professionals who are passionate about what they do.
                </p>
                <p className="mb-4">
                    Our mission is to deliver high-quality solutions that meet the needs of our customers.
                    We believe in building long-term relationships based on trust and transparency.
                </p>
                <p>
                    Thank you for visiting our About page. We look forward to working with you!
                </p>
            </div>
        </MainLayout>
    );
};

export default About;