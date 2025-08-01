import React from 'react';
import { Link } from 'react-router-dom';
import ServiceItems from '../../components/ServiceHelpers/ServiceItems';
import ORMServiceHighlights from '../../components/ServiceHelpers/ORMFeatures';

const ORM = () => {
    return (
        <div className="orm-page mt-16 text-black">
            {/* Hero Section */}
            <section
                className="relative bg-cover bg-center flex items-center py-5 px-4 min-h-[200px]"
                style={{
                    backgroundImage:
                        'url("https://omxtechnologies.com/wp-content/uploads/2024/08/what-is-orm-and-how-to-manage-online-reputation-of-your-business-1-1024x576.jpg")',
                }}
            >
                <div className="absolute inset-0 bg-black/50 "></div>
                <div className="absolute z-10 lg:pl-20 max-w-6xl mx-auto text-white">
                    <h1 className="text-4xl font-medium text-left leading-tight mb-4 animate-fade-in-up">
                        Online Reputation Management (ORM)
                    </h1>
                    <p className="text-lg text-left animate-fade-in-up delay-200">
                        Shape Your Digital Aura Craft Your Reputation.
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
                                fetchpriority="high"
                                decoding="async"
                                src="https://omxtechnologies.com/wp-content/uploads/2024/08/what-is-orm-and-how-to-manage-online-reputation-of-your-business-1-1024x576.jpg"
                                alt="Online Reputation Management"
                                className="h-full w-full object-cover"
                            />
                        </div>

                        {/* Headline */}
                        <h2 className="text-3xl md:text-4xl font-extrabold leading-tight">
                            Top ORM Company in Pune to Contour Your Social Perception.
                        </h2>

                        {/* Description */}
                        <div className="text-lg leading-relaxed space-y-4">
                            <p>
                                Are you concerned about online perception for your business? Is traditional mouth Publicity enough for growth of Your Business? Are you also stuck Between all these kinds of Questions for Your business and looking for the best Consultants who can Guide you better for Your Online Reputation management? Then Look No Further than Digitlize Your Brand.
                            </p>
                            <p>
                                Digitlize Your Brand has been Working in the field of online reputation Management for Over a Decade now. With its diverse clientele and evolving Industrial Challenges, maintaining a Stabilized online Reputation for business has been quite Frantic. But with a Team of Experts and a strong Knowledge base, Digitlize Your Brand have cracked the ideal Reputation Management Services to enhance the Online Presence of Your Business and Have established a renowned position as the
                                <a href="https://omxtechnologies.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline font-semibold"> Best ORM Agency in Pune</a>.
                            </p>
                            <p>
                                ORM is the Practice of creating strategies and influencing Public Perception of your Brand. With the Diversity of Media and Content available on the Internet, Maintaining the Right, appropriate, and Impressive Information For your Business is a Crucial aspect of Running a Business Online. Hence Our Services include the basics of maintaining Positive Reviews for your Business to managing high-tech Social Media Reputation and Everything In Between.
                            </p>
                            <p>
                                Digitlize Your Brand is here to partner up with you for reputation management services such as:
                            </p>
                        </div>

                        {/* Feature Blocks (ORM Services List) */}
                        <ORMServiceHighlights />

                        {/* Closing Paragraph */}
                        <div className="text-lg leading-relaxed space-y-4">
                            <p>
                                With years of experience and Varied clientele, Digitlize Your Brand has secured a leading position as a Top ORM Company in Pune. With our team of experts, Let’s Strategies your ground plan for the remarkable establishment of your Brand. Connect with DYB And let’s guard and get your Brand to the Foremost Position in the Market.
                            </p>
                        </div>

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

export default ORM;