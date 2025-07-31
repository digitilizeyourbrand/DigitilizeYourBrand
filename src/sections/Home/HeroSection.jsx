import hero from "../../assets/heroImg.jpg";

const HeroSection = () => {
  return (
    <div
      className="
        relative 
        h-[60vh]         /* Mobile: 60% of viewport height */
        sm:h-screen      /* Tablet and up: full screen height */
        w-full 
        overflow-hidden 
        text-white 
        bg-cover 
        bg-center 
        bg-no-repeat
      "
      style={{ backgroundImage: `url(${hero})` }}
    >
      {/* Overlay Text */}
      <div
        className="
          absolute
          top-1/2
          transform
          -translate-y-1/2

          left-4
          w-1/2

          sm:left-0 sm:w-full sm:px-6 sm:text-center
          lg:left-1/2 lg:-translate-x-1/2 lg:w-auto lg:text-left

          flex flex-col font-bold text-6xl sm:text-5xl space-y-3
        "
      >
        <span className="pl-0 text-5xl md:text-[6rem]">Crafting</span>
        <span className="pl-8 text-5xl md:text-[6rem]">Digital</span>
        <span className="pl-16 text-5xl md:text-[6rem]">Excellence</span>
      </div>

      {/* Wavy Bottom Divider */}
      <div className="absolute bottom-0 left-0 w-full">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1000 100"
          preserveAspectRatio="none"
          className="w-full h-[100px]"
        >
          <path
            fill="#f5f5f5"
            d="M790.5,93.1c-59.3-5.3-116.8-18-192.6-50c-29.6-12.7-76.9-31-100.5-35.9c-23.6-4.9-52.6-7.8-75.5-5.3
            c-10.2,1.1-22.6,1.4-50.1,7.4c-27.2,6.3-58.2,16.6-79.4,24.7c-41.3,15.9-94.9,21.9-134,22.6C72,58.2,0,25.8,0,25.8V100h1000V65.3
            c0,0-51.5,19.4-106.2,25.7C839.5,97,814.1,95.2,790.5,93.1z"
          />
        </svg>
      </div>
    </div>
  );
};

export default HeroSection;
