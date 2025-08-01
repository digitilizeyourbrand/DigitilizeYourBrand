import React from 'react';
import { Link } from 'react-router-dom';
import ServiceItems from '../../components/ServiceHelpers/ServiceItems';

const features = [
    {
        title: 'Creativity and Innovation',
        description: 'Our team of skilled professionals is very enthusiastic about pushing the limits of creativity and innovation. Our Team Makes sure to Follow trending aspects, Creative Tools, and Features To keep up with the Latest Marketing Streams. We make sure that your videos create Strong engagements among your Audience to increase the reach of your business.',
    },
    {
        title: 'Quality and Reliability',
        description: 'Our team is Completely Committed to Provide Promising and quality results every single time. We focus on Quality Work as well as Timely Results. The Trust and reliability of our Clients throughout the past decade make us the provider of top-quality Video Production Services in Pune.',
    },
    {
        title: 'Trending and Exclusive',
        description: 'The On-growing World of the Internet Creates New trends and sets new Bars every day to achieve the best Marketing Goals. Keeping Up With trends might be a Little Tough but Crucial Element of Marketing that DYB Specialises in. We keep up with the Current curves of the Latest Marketing Techniques using upgraded Technologies.',
    },
];

const VideoProductionFeatures = () => {
    return (
        <div className="space-y-8">
            {features.map((feature, index) => (
                <div key={index} className="flex flex-col md:flex-row gap-4">
                    <div className="flex-1">
                        <h3 className="text-2xl font-bold mb-2">
                            {feature.title}
                        </h3>
                        <p className="text-lg leading-relaxed">
                            {feature.description}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    );
};


const VideoProduction = () => {
    const heroImage = "https://omxtechnologies.com/wp-content/uploads/2024/10/cameraman-with-video-camera-1024x683.jpg";

    return (
        <div className="video-production-page mt-16 text-black">
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
                        Best video production services in Pune
                    </h1>
                    <p className="text-lg text-left animate-fade-in-up delay-200">
                        Dream, Shoot, Create: Pune’s Dynamic Video Wizards!
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
                                alt="Corporate video production company in Pune"
                                className="h-full w-full object-cover"
                            />
                        </div>

                        {/* Headline */}
                        <h1 className="text-3xl md:text-4xl font-extrabold leading-tight">
                            Corporate video production company in Pune
                        </h1>

                        {/* Description */}
                        <div className="text-lg leading-relaxed space-y-4">
                            <p>
                                With The Constantly changing and Evolving market Trends, Promoting your Business keeps you Busy with learning new mediums and tools of Online Marketing. Videography is One of the most Trending and powerful mediums of Promotion to Connect with your Audience.
                            </p>
                            <p>
                                From Introductory short videos For Brand Promotion to Informative Videos, Advertisements, and Engaging content creation For Brand development, Everything can Be Covered with Video Production services.
                            </p>
                            <p>
                                Digitlize Your Brand, being a prominent Digital Marketing Agency for More than a decade now, has earned a Well-known Reputation as a Provider of Top video production services in Pune.
                            </p>
                            <p>
                                From Creative and animated Videos for <a href="https://omxtechnologies.com/social-media-marketing-company/" className="text-blue-600 hover:underline">Social Media Marketing</a> and informative content videos For <a href="https://omxtechnologies.com/youtube-marketing-in-pune/" className="text-blue-600 hover:underline">YouTube Marketing</a> to corporate Video Shoots, We have a Whole package to Uphold your Business.
                            </p>
                            <p>
                                A Skilled and creative Team of videographers, broadcast-quality equipment, and a Luxurious video Production studio make Digitlize Your Brand stand out and Enhance the Quality of our Video Production Services. This led us to a Top Position in a list of Reputed Video Production Companies Providing the Best video production services in Pune.
                            </p>
                        </div>
                        
                        {/* Why Choose DYB? Section */}
                        <h2 className="text-3xl font-extrabold leading-tight mt-4">
                            Why Choose DYB?
                        </h2>
                        
                        {/* Features */}
                        <VideoProductionFeatures />

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

export default VideoProduction;