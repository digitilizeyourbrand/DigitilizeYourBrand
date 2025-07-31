import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-6">
            <div className="container mx-auto text-center">
                <p>&copy; {new Date().getFullYear()} My Vite React App. All rights reserved.</p>
                <div className="mt-4">
                    <a href="/about" className="text-gray-400 hover:text-white mx-2">About</a>
                    <a href="/services" className="text-gray-400 hover:text-white mx-2">Services</a>
                    <a href="/portfolio" className="text-gray-400 hover:text-white mx-2">Portfolio</a>
                    <a href="/blog" className="text-gray-400 hover:text-white mx-2">Blog</a>
                    <a href="/contact" className="text-gray-400 hover:text-white mx-2">Contact</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;