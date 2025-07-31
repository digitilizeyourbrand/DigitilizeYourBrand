import React from 'react';

export const Branding = () => {
    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold mb-4">Branding Services</h1>
            <p className="mb-4">
                Our branding services are designed to help you create a strong and memorable brand identity. 
                We focus on understanding your business, your audience, and your goals to develop a branding strategy that resonates.
            </p>
            <h2 className="text-2xl font-semibold mb-2">What We Offer:</h2>
            <ul className="list-disc list-inside mb-4">
                <li>Brand Strategy Development</li>
                <li>Logo Design</li>
                <li>Brand Guidelines</li>
                <li>Visual Identity Creation</li>
                <li>Marketing Collateral Design</li>
            </ul>
            <p>
                Let us help you build a brand that stands out and connects with your audience. 
                Contact us today to learn more about our branding services!
            </p>
        </div>
    );
};

export default Branding;