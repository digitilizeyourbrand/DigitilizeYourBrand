import React from 'react';

const features = [
    {
        title: 'Instant Visibility',
        description:
            'With pay-per-click (PPC) advertising, you can quickly position your company at the top of search engine results pages (SERPs) and attract the attention of possible clients who are actively looking for goods or services similar to yours. It’s a quick route to becoming known.',
    },
    {
        title: 'Targeted Reach',
        description:
            'You are in complete control of who sees your ads when using Google AdWords. You can target specific demographics, places, and keywords to ensure that your message outreach the intended audience at the correct moment.',
    },
    {
        title: 'Cost-Efficiency',
        description:
            'PPC uses a pay-per-click business model as opposed to a traditional advertising strategy. It’s a really economical way to use your advertising budget because you only have to pay when someone clicks on your advertisement.',
    },
    {
        title: 'Flexibility',
        description:
            'PPC campaigns are cooperative to any size company, allowing you to adjust their size to fit their budget and objectives. The amount you invest is something you control',
    },
    {
        title: 'Competitive Advantage',
        description:
            'It’s possible that PPC advertising is already being used by your rivals. You may level the playing field and even outperform them by investing in Google Ads, giving you a competitive advantage in your sector.',
    },
    {
        title: 'Evaluate And Upgrading',
        description:
            'PPC enables A/B testing of landing pages, keywords, and ad creatives. Constant optimization guarantees that your campaigns get more and more efficient over time.',
    },
    {
        title: 'Boost Brand Exposure',
        description:
            'Recurring Google visibility with PPC can improve trust and brand recognition. Users are getting acquainted with your brand even if they don’t click on your advertisement right away, which raises the possibility that they will convert later.',
    },
    {
        title: 'Search Advertising (Google Ads)',
        description:
            'Search advertising—also referred to as Google Ads, Pay-Per-Click, or PPC—is a very popular digital marketing tool that lets firms place advertisements on search engine results pages. Businesses that utilize search advertising bid on keywords that are associated with their goods or services, and their banners show up at the top of search engine results when users type in such terms.',
    },
    {
        title: 'Display Advertising',
        description:
            'Improve brand visibility and deliver targeted visitors to your website with Display Advertising, a high-quality Pay-Per-Click (PPC) service that will raise your online appearance. Our display advertising service increases your reach and interaction with potential customers by strategically placing ads on a variety of digital platforms, such as social media networks, mobile applications, and websites.',
    },
    {
        title: 'Shopping Ads',
        description:
            'Display images of goods, and prices in Google search results when users type relevant queries. These eye-catching images make comparing products easier for customers as they browse the search results. As a result, shopping advertisements are a terrific way to increase the number of clicks from individuals who are actively looking for the things you sell.',
    },
    {
        title: 'Social Media Ads',
        description:
            'Our skillfully accepted social media advertising services can help you realize your business’s full potential. I highlight precision targeting, creative quality, and meaning to increase your reach, engagement, and conversions.',
    },
    {
        title: 'Remarketing Advertising',
        description:
            'Re-engage with previous visitors who showed interest in your offerings and nudge them closer to conversion with carefully planned campaigns.',
    },
];

const PPCFeatures = () => {
    return (
        <div className="space-y-6">
            {features.map((feature, index) => (
                <div key={index}>
                    <p className="text-2xl font-medium">
                        {feature.title}
                    </p>
                    <p className="leading-relaxed">
                        {feature.description}
                    </p>
                </div>
            ))}
        </div>
    );
};

export default PPCFeatures;