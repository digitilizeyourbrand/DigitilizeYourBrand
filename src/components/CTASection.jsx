import React from 'react';

const CTASection = () => {
    return (
        <div className="bg-blue-600 text-white py-10 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="mb-6">Join us today and take your business to the next level.</p>
            <a href="/contact" className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition">
                Contact Us
            </a>
        </div>
    );
};

export default CTASection;