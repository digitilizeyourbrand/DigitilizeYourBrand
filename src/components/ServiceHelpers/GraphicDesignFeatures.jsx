import React from 'react';

const services = [
    {
        title: 'Brand Logo Design :',
        description: 'A Brand Logo Design, we specialize in creating unique and memorable logos that perfectly capture the value of your company.we are dedicated to providing outstanding outcomes that will make your Brand stand out in the highly competitive market place. OMX technologies is a premier Branding & Graphic Design Company in Pune to elevate its Visual identity.',
    },
    {
        title: 'Brochure and Product Catalogs :',
        description: 'Our brochure and product catalog service provides complete solutions designed to elegantly present your business. From sophisticated designs to captivating information, we create products that successfully engage and inform your audience. With extreme dedication to detail, we ensure each element matches effortlessly with your brand’s identity and messaging. Whether it’s an elegant brochure or a detailed product catalog, our designs are made to grab attention and encourage interaction. Enhance your marketing materials with our carefully chosen designs that are adapted to your particular requirements.',
    },
    {
        title: 'Sales Promotion Materials:',
        description: 'Experience the power of impactful sales promotion materials designed to elevate your brand’s visibility and drive sales.Our custom solutions, which range from stunning flyers to convincing sales sheets, are made to make an impression on your target audience With an emphasis on strategic messaging and creativity, we produce materials that clearly convey the value you offer and convince action.Put your trust in our experience to create attention-grabbing, innovative sales promotion materials that will eventually turn leads into committed customers.',
    },
    {
        title: 'Social Media Designs:',
        description: 'OMX Technologies is a Best Graphic Design Agency in Pune team to create compelling social media designs that elevate your online presence. Our customized solutions that include captivating posts to eye-catching graphics,are made to capture the attention of your audience and increase engagement. Let us help you to utilize targeted marketing techniques that will influence and engage your audience base.',
    },
    {
        title: 'Infographics:',
        description: 'Improve the way you express your data stories by using our dynamic infographics solution. OMX collaborates with top-tier graphic designing in pune to transform the complex information into visually compelling narratives.we use premium layout, fonts,color schemes and icons to create graphically appealing content that engages Visitors on your website.',
    },
    {
        title: 'Graphic For Website :',
        description: 'Graphics play a vital part in website design, as they significantly influence user engagement, retention and overall experience. Our committed graphic designers understand that it’s not just about aesthetics; it’s about capturing the very essence of your brand’s personality and values. We make sure your website turns into a potent communication and conversion tool by adding eye-catching components that connect with your audience.',
    },
];

const GraphicDesignServices = () => {
    return (
        <div className="space-y-6">
            {services.map((service, index) => (
                <div key={index}>
                    <p className="text-xl font-semibold">
                        {service.title}
                    </p>
                    <p className="">
                        {service.description}
                    </p>
                </div>
            ))}
        </div>
    );
};

export default GraphicDesignServices;