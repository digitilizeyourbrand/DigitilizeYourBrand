import React from "react";
import { Link } from "react-router-dom";
import ServiceItems from "../../components/ServiceHelpers/ServiceItems";

const benefits = [
  {
    title: "Storytelling",
    description:
      "Social media advertising enables you to tell your brand’s story, connect emotionally with your target followers, and communicate your unique value offer.",
  },
  {
    title: "Increased Brand Visibility",
    description:
      "With billions of active users, social media platforms offer a wide audience for your brand to reach. Advertising on these networks can dramatically boost your brand’s visibility.",
  },
  {
    title: "Global Reach",
    description:
      "Social media platforms give you the possibility of global reach, allowing you to increase your consumer base beyond your origins",
  },
  {
    title: "Engagement That Matters",
    description:
      "Structure genuine connections is what engagement entails, not just liking and participating content. We develop meaningful connections by using targeted advertising to make trust and fidelity among your target followers.",
  },
  {
    title: "Competitive Advantage",
    description:
      "numerous businesses use social media advertising, and failing to do so could put you at a competitive disadvantage. A strong social media presence can help you remain competitive",
  },
  {
    title: "Precise Targeting",
    description:
      "Social Media media advertisements enable us to target your followers’s precise demographics, interests, habits, and regions ensuring that your communication reaches the int ded followership.",
  },
  {
    title: "Improved Website Traffic",
    description:
      "You may improve business and potentially convert more guests by transferring them to your website via social media marketing.",
  },
  {
    title: "A/ B Testing",
    description:
      "To ameliorate the issues of your advertisements, trial with different announcement creatives, captions, and targeting settings.",
  },
  {
    title: "Remarketing",
    description:
      "Social media enables you to retarget callers who have preliminarily interacted with your website or announcements, boosting the possibility of conversion.",
  },
  {
    title: "Lead Generation",
    description:
      "Lead generation capabilities on social media spots, similar as supereminent forms alongside announcements, make it easier to collect stoner information and nurture implicit guests",
  },
  {
    title: "Cost-Effective",
    description:
      "Social media advertising can be affordable, allowing you to set budgets that are in line with company objectives. You can begin with a minimum budget and increase it as you achieve favorable outcomes.",
  },
  {
    title: "Performance Through Analysis",
    description:
      "Social media advertising can be affordable, allowing you to set budgets that are in line with company objects. You can start with a small budget and increase as you notice favorable issues.",
  },
  {
    title: "Audience Insights",
    description:
      "Social media advertising provides precious insight into your followership’s preferences, actions, and engagement patterns, allowing us to conform to juggernauts more effectively and upgrade your overall marketing strategy.",
  },
];

const services = [
  {
    title: "Instagram Captivate With Visual Allure",
    description:
      "Instagram, with its pictorial visual platform and a stoner base of over a billion active druggies, is a brand exposure hustler. It provides businesses with a rare occasion to engage with their target followers like never before. Instagram’s visually charming material, which includes photos, vids, stories, and rolls, makes it an ideal platform for showcasing your products and services. Our professionals unite with you to make customized announcement juggernauts that reverberate with your target demographic. We produce programs that are acclimatized to your specific objectives, whether they’re to increase brand mindfulness, drive website business, or increase transformations.",
  },
  {
    title: "Facebook Advertisements Reach The millions With perfection.",
    description:
      "Facebook announcements are a strong tool for reaching a large and engaged following, acclimating your communication to certain demographics, and achieving colorful marketing pretensions. When done correctly, Facebook advertising may yield a high return on investment( ROI) and contribute to the expansion of your company or particular brand. Our company has vast experience executing effective Facebook announcement movements across all disciplines and is well- clued in the platform’s nuances. We customize plans to meet your unique objectives and are devoted to providing results and adding the effect of your advertising to the world’s largest social media platform. Let us work together to take your Facebook advertising to the next level.",
  },
  {
    title: "Linkedin Advertisements Connect On A Professional Post",
    description:
      "LinkedIn advertising offers an important platform for businesses and professionals to connect, engage, and achieve a variety of marketing purposes among a professional and largely focused following, making it a perfect platform for B2B marketing. In a professional setting, LinkedIn advertising can help with supereminent creation, brand recognition, and business expansion when employed effectively. Our team of professionals will use targeted advertisements to develop your network and increase transformations on this unique platform.",
  },
  {
    title: "Youtube Advertisements Unleash Immersive Storytelling",
    description:
      "With over two billion yearly logged- in druggies, YouTube is one of the world’s largest platforms. Your prospective consumers are surely among them. videotape content captivates cult like no other media. With YouTube advertising, you can tell your brand’s story, highlight particulars, and produce memorable gests . We specialize in creating and maintaining results- driven YouTube announcement steamroller. Our platoon of professionals will unite with you to develop great videotape content, insure your communication reaches the right demographic, and enhance the effectiveness of your YouTube advertising.",
  },
];

const planSteps = [
  {
    title: "Discovery",
    description:
      "Before we begin any design, we conduct expansive exploration on your brand, assiduity, and challengers to understand your objects and find openings. This entails harkening to your requirements, assaying your issues, and exercising important perceptivity to make our strategy.",
  },
  {
    title: "Strategy",
    description:
      "After acquiring a thorough understanding of your brand, objects, and current marketing conditioning, we use data to develop well- informed crusade ideas that correspond with your business objects. This includes strategy planning, crusade roadmap creation, followership identification and targeting, creative content design, announcement textbook authoring, and nonstop crusade operation.",
  },
  {
    title: "Implementation",
    description:
      "With a sound strategy and an acceptable advertising budget, we produce high- impact advertisements that are optimized for maximum effectiveness. This includes creating charming creatives, relating target consumers, and arranging the announcement crusade to run on the most applicable channels.",
  },
  {
    title: "Optimization",
    description:
      "Our commitment to perfecting crusade performance noway wavers. We maintain a nonstop cycle of data analysis, making needed variations and testing different styles to insure your juggernauts constantly achieve their full eventuality.",
  },
  {
    title: "Reporting",
    description:
      "We value transparency and will keep you streamlined throughout the process. Our regular reports offer important crusade analytics, perceptivity, and recommendations, allowing you to make further informed marketing opinions. Start Your Social Media Adventure with Leading SMO Company in Pune Your brand has a special story to partake on these platforms; let’s draft it together.",
  },
];

const SMM = () => {
  return (
    <div className="smm-page mt-16 text-black">
      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center flex items-center py-5 px-4 min-h-[200px]"
        style={{
          backgroundImage:
            'url("https://omxtechnologies.com/wp-content/uploads/2024/10/hand-businessman-white-shirt-holding-megaphone-near-concrete-wall-with-colorful_1199132-230337.jpg")',
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="absolute z-10 lg:pl-20 max-w-6xl mx-auto text-white">
          <h1 className="text-4xl font-medium text-left leading-tight mb-4 animate-fade-in-up">
            Social Media Marketing Agency in Pune
          </h1>
          <p className="text-lg text-left animate-fade-in-up delay-200">
            Click That Counts: Transforming Social Media into Success
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
                src="https://omxtechnologies.com/wp-content/uploads/2024/10/hand-businessman-white-shirt-holding-megaphone-near-concrete-wall-with-colorful_1199132-230337.jpg"
                alt="Social Media Marketing Agency in Pune"
                className="h-full w-full object-cover"
              />
            </div>

            {/* Headline */}
            <h2 className="text-3xl md:text-4xl font-extrabold leading-tight">
              SMO Company in Pune
            </h2>

            {/* Description */}
            <div className="text-lg leading-relaxed space-y-4">
              <p>
                Welcome to a world of enhanced brand mindfulness and engagement.
                In the age of social media dominance, the power of social media
                advertising is apparent. The impact of social media
                announcements extends beyond platforms. From Instagram’s visual
                appeal to Facebook’s broad reach, and LinkedIn’s professional
                network to YouTube’s immersive graphics and quick engagement to
                trendsetting vibes, each platform offers a distinct system to
                attract your followership. Our professionals understand the
                tricks of each platform and restate data into practical results,
                weaving your story into each platform to insure your unique
                communication is heard. We make customized juggernauts that
                appeal directly to your target demographic, adding engagement
                and generating transformations.
              </p>
            </div>

            {/* The Benefits of Social Media Marketing in Pune */}
            <h2 className="text-3xl font-extrabold leading-tight mt-4">
              The Benefits of Social Media Marketing in Pune
            </h2>

            {/* SMM Benefits List */}
            <div className="space-y-6">
              {benefits.map((benefit, index) => (
                <div key={index}>
                  <p className="text-xl font-medium">{benefit.title}</p>
                  <p className="text-black">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Discover Our SMO Services in Pune */}
            <h2 className="text-3xl font-extrabold leading-tight mt-4">
              Discover Our SMO Services in Pune
            </h2>

            {/* SMO Services List */}
            <div className="space-y-6">
              {services.map((service, index) => (
                <div key={index}>
                  <p className="text-xl font-medium">{service.title}</p>
                  <p className="">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Our Plan for Social Media Advertisements */}
            <h2 className="text-3xl font-extrabold leading-tight mt-4">
              Our Plan for Social Media Advertisements
            </h2>

            {/* SMM Plan List */}
            <div className="space-y-6">
              {planSteps.map((step, index) => (
                <div key={index}>
                  <p className="text-xl font-medium">{step.title}</p>
                  <p className="">{step.description}</p>
                </div>
              ))}
            </div>

            {/* Request Consultation Button */}
            <div className="text-left md:p-4">
              <Link
                to="/contact-us"
                className="inline-flex items-center px-8 py-4 bg-blue-700 text-white text-lg font-semibold rounded-md hover:bg-blue-800 transition-colors duration-300 transform hover:scale-105"
              >
                Request a Consultation
                <svg
                  className="ml-3 w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  ></path>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SMM;
