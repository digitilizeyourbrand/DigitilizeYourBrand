import React from 'react';
import { Link } from 'react-router-dom';
import ServiceItems from '../../components/ServiceHelpers/ServiceItems';
import SEOFeatures from '../../components/ServiceHelpers/SEOFeatures';

const SEO = () => {
    return (
        <div className="seo-page mt-16 text-black">
            {/* Hero Section */}
            <section
                className="relative bg-cover bg-center flex items-center py-5 px-4 min-h-[200px]"
                style={{
                    backgroundImage:
                        'url("https://omxtechnologies.com/wp-content/uploads/2024/07/8f92956f-399e-4f45-a520-1741e404832e.jpg")', // Using an image from the original content
                }}
            >
                <div className="absolute inset-0 bg-black/50 "></div>
                <div className="absolute z-10 lg:pl-20 max-w-6xl mx-auto text-white">
                    <h1 className="text-4xl font-medium text-left leading-tight mb-4 animate-fade-in-up">
                        Best SEO company in Pune
                    </h1>
                    <p className="text-lg text-left animate-fade-in-up delay-200">
                        Ignite your business power digitally with our Best SEO company in Pune.
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
                                src="https://omxtechnologies.com/wp-content/uploads/2024/07/8f92956f-399e-4f45-a520-1741e404832e-1024x1024.jpg"
                                alt="Seo Service"
                                className="h-full w-full object-cover"
                            />
                        </div>

                        {/* Headline */}
                        <h2 className="text-3xl md:text-4xl font-extrabold leading-tight">
                            Best SEO company in Pune
                        </h2>

                        {/* Description */}
                        <div className="text-lg leading-relaxed space-y-4">
                            <p>
                                Today, everyone wants to do their business online, but in this competitive Digital world, does only a visually appealing website suffice for the growth of business? Will it really attract your target audience? Certainly not!!
                            </p>
                            <p>
                                To take any business high on a success graph, we need good products and services along with a master marketing plan. In the same way, to do Digital business, one must have a very efficient Digital marketing plan.
                            </p>
                            <p>
                                One of the elements of multifaceted Digital Marketing is Search Engine Optimization. It allows the target audience to connect with the brand organically. We at OMX Technologies provide the{' '}
                                <a href="https://omxtechnologies.com/website-seo-services/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline font-semibold">
                                    top SEO services in Pune
                                </a>{' '}
                                to drive organic traffic to the website with the help of SEO and increase brand visibility online for a longer period of time.
                            </p>

                            {/* What is SEO? */}
                            <h3 className="text-2xl font-bold text-gray-800 mt-6">What is SEO?</h3>
                            <p>
                                The most important part of digital marketing is Search Engine Optimization (SEO). Our expertise in SEO services will help us not only attract quality traffic to our website but also help Google crawlers rank it at the top of Google search engine on the first page without pay-per-click ads.
                            </p>

                            {/* When to do SEO? */}
                            <h3 className="text-2xl font-bold text-gray-800 mt-6">When should we do SEO?</h3>
                            <p>
                                To rank the website, one can opt for SEO services without time constraints, meaning that whether your business is at the starting level, intermediate level, or enterprise level, whether your website is live or still under development, starting SEO at any given point is most important.
                            </p>

                            {/* Key factors */}
                            <h3 className="text-2xl font-bold text-gray-800 mt-6">What are the key factors in SEO?</h3>
                            <ul className="list-disc list-inside space-y-2 pl-4">
                                <li>
                                    <strong className="text-gray-800">Keyword Research:</strong> Keyword research is the foundation of an effective strategy to optimize the page and much more.
                                </li>
                                <li>
                                    <strong className="text-gray-800">On-page SEO:</strong> which includes website structuring, content, and HTML code to improve business web page visibility in various Search Engine Result Pages.
                                </li>
                                <li>
                                    <strong className="text-gray-800">Off-page SEO:</strong> This includes creating good quality backlinks, which helps increase the quality of referrals and social traffic as well as your search engine ranking.
                                </li>
                            </ul>
                        </div>

                        {/* Feature Blocks */}
                        <SEOFeatures />

                        {/* Why OMX Technologies? */}
                        <div className="text-lg leading-relaxed space-y-4">
                            <h3 className="text-2xl font-bold text-gray-800 mt-6">Why OMX Technologies?</h3>
                            <p>
                                OMX Technologies, the{' '}
                                <a href="https://omxtechnologies.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline font-semibold">
                                    best SEO Consulting Services in Pune
                                </a>{' '}
                                with extensive experience and the best SEO experts who are passionate about their work, helps rank your business on Google Search Engine Pages. We offer tailor-made SEO solutions as per the business requirements. Our customized SEO programmes and unique strategies help increase organic traffic and rank businesses with visible profits.
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

export default SEO;