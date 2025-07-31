import hero from "../assets/hero.jpg";
const WavyDividerPage = () => {
  return (
    <div
      className="relative h-screen w-full overflow-hidden text-white bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${hero})` }}
    >
      {/* Overlay Text */}
      <div
        className="
            absolute 
            top-[15%] left-[5%]
            sm:top-[20%] sm:left-[10%]
            lg:top-[25%] lg:left-[15%]
            space-y-2
            font-extrabold text-white
            text-4xl sm:text-5xl md:text-6xl
            leading-tight
          "
      >
        <div className="pl-0">Crafting</div>
        <div className="pl-4 sm:pl-6">Digital</div>
        <div className="pl-8 sm:pl-12">Excellence</div>
      </div>

      {/* Wavy Bottom Divider */}
      <svg
        className="absolute bottom-0 w-full"
        viewBox="0 0 1440 150"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <path
          fill="#ffffff"
          d="M0,96L80,85.3C160,75,320,53,480,53.3C640,53,800,75,960,96C1120,117,1280,139,1360,149.3L1440,150L1440,150L0,150Z"
        />
      </svg>
    </div>
  );
};

export default WavyDividerPage;
