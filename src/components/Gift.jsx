import { useTranslation } from "react-i18next";

const Gift = () => {
  const { t } = useTranslation();

  return (
   {/* <div
      className="py-6"
      style={{
        background: "linear-gradient(100.11deg, #C9D1FF 50.32%, #F9F4BB 94.79%)",
      }}
    >
      <div className="max-w-[1200px] mx-auto flex flex-col lg:flex-row items-center justify-between gap-6 px-4">
        <div
          className="w-full lg:w-1/2 rounded-2xl border-2 border-blue-400 flex flex-col"
          style={{
            background: "linear-gradient(180deg, #82A6FD 0%, #1342B4 100%)",
          }}
        >
          <div className="px-6 sm:px-10 pt-10 flex flex-col text-center lg:text-left">
            <h3 className="mb-4 text-[18px] text-white font-bold leading-snug">
              {t("gift_become_plus")}{" "}
              <span className="text-[#FFE602]">{t("gift_enjoy_benefits")}</span>
            </h3>
            <p className="mb-6 text-[18px] text-white font-bold">
              {t("gift_shop_supercoins")}
            </p>
          </div>
          <img
            src={gift1}
            alt="Gift"
            className="w-full h-auto object-contain px-4 pb-4 mt-auto"
          />
        </div>

        <div
          className="w-full lg:w-1/2 rounded-2xl border-2 border-blue-300 flex flex-col"
          style={{
            background: "linear-gradient(181.54deg, #8567D9 5.44%, #2C1371 98.69%)",
          }}
        >
          <div className="px-6 sm:px-10 pt-10 flex flex-col text-center lg:text-left">
            <h3 className="mb-4 text-[28px] sm:text-[32px] lg:text-[39px] text-white font-bold leading-tight">
              {t("gift_card_title")}
            </h3>
            <p className="text-[15px] text-white font-sans leading-relaxed">
              {t("gift_card_desc")}
            </p>
          </div>
          <img
            src={gift2}
            alt="Gift"
            className="w-full h-auto object-contain px-4 pb-4 mt-auto"
          />
        </div>
      </div>
    </div>*/}
  );
};

export default Gift;