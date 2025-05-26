import { useTranslation } from "react-i18next";

function Cards() {
  const { t } = useTranslation();

  return (
    {/*<div className="max-w-[1200px] mx-auto my-12 px-4">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-6 p-6 lg:p-[60px] rounded-3xl"
        style={{
          background: "linear-gradient(97.69deg, #3DA3EA 0.54%, #66DE87 69%)",
        }}
      >
        <div className="w-full lg:w-1/2 flex flex-col gap-4 text-center lg:text-left">
          <h3 className="text-black text-[32px] sm:text-[40px] lg:text-[46px] font-bold leading-tight">
            {t('flipkartGroceryTitlePart1')}:
            <span className="text-white block lg:inline text-[32px] sm:text-[40px] lg:text-[46px] font-bold ml-1">
              {t('flipkartGroceryTitlePart2')}
            </span>
          </h3>
          <p className="text-white text-[16px] sm:text-[18px] font-inter">
            {t('flipkartGroceryDescription')}
          </p>
          <button className="w-full sm:w-[250px] lg:w-[350px] h-[56px] sm:h-[66px] rounded-3xl bg-white text-[#04BB00] font-bold text-[20px] sm:text-[24px] lg:text-[28px] border-2 border-slate-200 mx-auto lg:mx-0">
            {t('flipkartGroceryButton')}
          </button>
        </div>

        <div className="w-full lg:w-1/2 flex justify-center">
          <img
            src={rice}
            alt={t('riceAltText')}
            className="w-full max-w-[400px] sm:max-w-[500px] lg:max-w-[611px] h-auto object-contain"
          />
        </div>
      </div>
    </div>*/}
  );
}

export default Cards;