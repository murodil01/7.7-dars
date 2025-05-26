  import { useTranslation } from "react-i18next";
  import iphone from "../assets/iphone.png";
  import card1 from "../assets/card1.png";
  import card2 from "../assets/card2.png";

  const Hero = () => {
    const { t } = useTranslation();

    return (
      <section className="bg-[#0E0E0E] text-white pt-[100px] pb-16">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-10">
          
          <div className="flex-1">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              {t("hero.title")}
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8">
              {t("hero.subtitle")}
            </p>
            <button className="bg-white text-black font-semibold px-6 py-3 rounded-xl hover:bg-gray-200 transition duration-300">
              {t("hero.button")}
            </button>

            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              <div className="bg-[#1A1A1A] rounded-lg p-5 text-sm text-gray-300">
                {t("hero.stat1")}
              </div>
              <div className="bg-[#1A1A1A] rounded-lg p-5 text-sm text-gray-300">
                {t("hero.stat2")}
              </div>
              <div className="bg-[#1A1A1A] rounded-lg p-5 text-sm text-gray-300">
                {t("hero.stat3")}
              </div>
            </div>
          </div>

          <div className="flex-1 flex items-center justify-center gap-6 max-w-[400px] mx-auto mt-10 lg:mt-0">
            <div className="flex flex-col space-y-4">
              <img
                src={card1}
                alt="Card 1"
                className="w-60 h-auto rotate-[-10deg] z-20"
              />
              <img
                src={card2}
                alt="Card 2"
                className="w-60 h-auto z-10 animate-pulse shadow-[0_0_60px_rgba(0,170,255,0.4)]"
              />
            </div>

            <img
              src={iphone}
              alt="iPhone"
              className="w-72 h-auto"
            />
          </div>
        </div>
      </section>
    );
  };

  export default Hero;
