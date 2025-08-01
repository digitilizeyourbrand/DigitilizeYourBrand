import React from 'react';
import { Link } from 'react-router-dom';
import ServiceItems from '../../components/ServiceHelpers/ServiceItems';
import GraphicDesignServices from '../../components/ServiceHelpers/GraphicDesignFeatures';

const GraphicDesign = () => {
    const heroImage = "https://omxtechnologies.com/wp-content/uploads/2024/10/man-is-sitting-desk-with-keyboard-multicolored-keyboard-1024x574.jpg";

    return (
        <div className="graphic-design-page mt-16 text-black">
            {/* Hero Section */}
            <section
                className="relative bg-cover bg-center flex items-center py-5 px-4 min-h-[200px]"
                style={{
                    backgroundImage: `url(${heroImage})`,
                }}
            >
                <div className="absolute inset-0 bg-black/50"></div>
                <div className="absolute z-10 lg:pl-20 max-w-6xl mx-auto text-white">
                    <h1 className="text-4xl font-medium text-left leading-tight mb-4 animate-fade-in-up">
                        Graphic Design Company in Pune
                    </h1>
                    <p className="text-lg text-left animate-fade-in-up delay-200">
                        Digitlize Your Brand: Where Creativity Meets Innovation in Graphic Design.
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
                                src={heroImage}
                                alt="Most Creative Graphics Design Company in Pune"
                                className="h-full w-full object-cover"
                            />
                        </div>

                        {/* Headline */}
                        <h1 className="text-3xl md:text-4xl font-extrabold leading-tight">
                            Most Creative Graphics Design Company in Pune
                        </h1>

                        {/* Description */}
                        <div className="text-lg leading-relaxed space-y-4">
                            <p>
                                At Digitlize Your Brand, is leading <a href="https://omxtechnologies.com/2022/06/27/different-areas-of-graphic-design/" className="text-blue-600 hover:underline">Most Creative Graphics Design Company in Pune</a> specializing in Logo & Branding , Brochure & Product Catalogs, Sales Promotion Material ,Social Media Designs and Infographics. Our team of talented experts and creative thinkers create attractive designs that connect with your target market and promote your brand or business.
                            </p>
                            <p>
                                For more than ten years, Digitlize Your Brand has provided graphic design services to clients. Our <strong>Best graphic designer in pune</strong> deals with a broad range of requirements, from branding and logo development to website design and advertisement material.
                            </p>
                        </div>
                        
                        {/* How might Branding & Graphic Design Company in Pune help you grow your business? */}
                        <h2 className="text-3xl font-extrabold leading-tight mt-4">
                            How might Branding & Graphic Design Company in Pune help you grow your business?
                        </h2>
                        <p className="text-lg leading-relaxed">
                            Our graphic designers focus on translating visual language into a functional one, we customize our services to fulfill client needs.
                        </p>

                        {/* Graphic Design Services List */}
                        <GraphicDesignServices />

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

export default GraphicDesign;