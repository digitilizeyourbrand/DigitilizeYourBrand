import React from 'react';
import { Link } from 'react-router-dom';
import ServiceItems from '../../components/ServiceHelpers/ServiceItems';
import PPCFeatures from '../../components/ServiceHelpers/PPCFeatures';

const reasons = [
    {
        title: 'Increase Your Return on Investment',
        description: 'Our primary objective is to ensure that your advertising yields profitable returns that can be scaled up.',
    },
    {
        title: 'Structured Approach',
        description: 'We adhere to a structured procedure and employ established protocols that consistently yield positive outcomes.',
    },
    {
        title: 'Access to Resources',
        description: 'We possess an extensive toolkit and continuously innovate to develop new resources to support our work hard.',
    },
    {
        title: 'Flexible Contracts',
        description: 'We offer flexible commitment with 30-day rolling, collaboration, and the belief that you are not bound by long-lasting devotion. We illustrate our value addition within this interval.',
    },
];

const WhyChoosePPC = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6 leading-relaxed">
            {reasons.map((reason, index) => (
                <div key={index} className="bg-gray-100 p-6 rounded-lg">
                    <h3 className="text-2xl font-semibold mb-2">
                        {reason.title}
                    </h3>
                    <p className="text-md text-black">
                        {reason.description}
                    </p>
                </div>
            ))}
        </div>
    );
};

const PPC = () => {
    return (
        <div className="ppc-page mt-16 text-black">
            {/* Hero Section */}
            <section
                className="relative bg-cover bg-center flex items-center py-5 px-4 min-h-[200px]"
                style={{
                    backgroundImage:
                        'url("https://omxtechnologies.com/wp-content/uploads/2024/08/12-Best-PPC-platforms-in-2024-2-details-1024x614.jpg")',
                }}
            >
                <div className="absolute inset-0 bg-black/50"></div>
                <div className="absolute z-10 lg:pl-20 max-w-6xl mx-auto text-white">
                    <h1 className="text-4xl font-medium text-left leading-tight mb-4 animate-fade-in-up">
                        Affordable PPC services in Pune
                    </h1>
                    <p className="text-lg text-left animate-fade-in-up delay-200">
                        Ignite Your Brand with Powerful PPC Marketing: Drive Traffic, Generate Leads, and Boost ROI
                    </p>
                </div>
            </section>

            {/* Main Content Section */}
            <section className="py-16 px-4 bg-white">
                <div className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row md:gap-1 lg:gap-3">
                    {/* Left Column - Main Services & Contact */}
                    <ServiceItems />

                    {/* Right Column - Content and Features */}
                    <div className="w-full md:w-2/3 lg:w-3/4 flex flex-col gap-8 bg-white rounded-xl">
                        {/* Main Image */}
                        <div className="rounded-xl overflow-hidden shadow-xl">
                            <img
                                
                                decoding="async"
                                src="https://omxtechnologies.com/wp-content/uploads/2024/08/12-Best-PPC-platforms-in-2024-2-details-1024x614.jpg"
                                alt="PPC platforms"
                                className="h-full w-full object-cover"
                            />
                        </div>

                        {/* Headline */}
                        <h2 className="text-3xl md:text-4xl font-extrabold leading-tight">
                            Pay-Per-Click Advertising in Pune
                        </h2>

                        {/* Description */}
                        <div className="text-lg leading-relaxed space-y-4">
                            <p>
                                In today’s digital land, investing in Pay-Per-Click (PPC) advertising is a strategic move that can transform your online appearance and drive tangible business growth. Our focus is on composing and managing PPC campaigns that help increase your ROI and contribute to real business gaining. OMX Technologies is a well-known PPC company in Pune, providing Online Advertising Services.
                            </p>
                        </div>
                        
                        {/* Why Invest in PPC */}
                        <h2 className="text-3xl font-extrabold leading-tight mt-4">
                            Why Invest in the Best PPC Service in Pune
                        </h2>

                        {/* PPC Features List */}
                        <PPCFeatures />

                        {/* Why Choose OMX */}
                        <h2 className="text-3xl font-extrabold leading-tight mt-4">
                            Why Choose OMX
                        </h2>

                        <div className="text-lg leading-relaxed space-y-4">
                            <p>
                                OMX Technologies has been a <a href="https://omxtechnologies.com/" className="text-blue-600 hover:underline font-semibold">top PPC company in Pune</a> for over a decade. The calculated planning and effective campaign projected by the team of experts are the essence of OMX’s achievements.
                            </p>
                        </div>

                        {/* Why Choose OMX Grid */}
                        <WhyChoosePPC />

                        {/* Request Consultation Button */}
                        <div className="text-left md:p-4">
                            <Link
                                to="/contact-us"
                                className="inline-flex items-center px-8 py-4 bg-blue-700 text-white text-lg font-semibold rounded-md hover:bg-blue-800 transition-colors duration-300 transform hover:scale-105"
                            >
                                Request a Consultation
                                <svg className="ml-3 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                                </svg>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default PPC;