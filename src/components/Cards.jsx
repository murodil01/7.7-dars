import { useTranslation } from "react-i18next";
import img1 from "../assets/img1.svg";
import pics from "../assets/pics.svg";
import img2 from "../assets/img2.png";

function Cards() {
  const { t } = useTranslation();

  return (
    <div
      style={{
        background:
          "radial-gradient(50% 50% at 50% 50%, #30313A 0%, #2C2D34 20.31%, #1F2025 50.52%, #18191E 86.98%, #17181D 99.48%)",
      }}
    >
      <div className="max-w-7xl mx-auto text-white pt-[52px] pb-[148px]">
        <h1 className="text-xl md:text-2xl lg:text-3xl font-semibold mb-6 text-center md:text-left">
          {t("cards.title")}
        </h1>

        <div className="flex flex-col gap-8 mt-[80px]">
          <div className="w-full flex flex-col md:flex-row items-center justify-between gap-6 border-2 border-grey-100 rounded-xl py-[13px] px-4 sm:px-6 md:px-[81px]">
            <div className="flex flex-col gap-4 max-w-[350px] text-center md:text-left">
              <h3 className="text-lg font-semibold">{t("cards.card1.title")}</h3>
              <p>{t("cards.card1.desc")}</p>
              <button className="w-[203px] h-[52px] border-2 bg-white text-black py-[15px] px-[50px] rounded-lg mx-auto md:mx-0">
                {t("cards.card1.btn")}
              </button>
            </div>
            <img src={img1} alt="Exchange" className="max-w-[566px] w-full h-[474px]" />
          </div>

          <div className="w-full flex flex-col md:flex-row items-center justify-between gap-6 border-2 border-grey-100 rounded-xl py-[13px] px-4 sm:px-6 md:px-[81px]">
            <div className="flex flex-col gap-4 max-w-[350px] text-center md:text-left">
              <h3 className="text-lg font-semibold">{t("cards.card2.title")}</h3>
              <p>{t("cards.card2.desc")}</p>
              <button className="w-[203px] h-[52px] border-2 bg-white text-black py-[15px] px-[50px] rounded-lg mx-auto md:mx-0">
                {t("cards.card2.btn")}
              </button>
            </div>
            <img src={pics} alt="Concierge" className="max-w-[665px] w-full h-[457px]" />
          </div>

          <div className="w-full flex flex-col md:flex-row items-center justify-between gap-6 border-2 border-grey-100 rounded-xl py-[13px] px-4 sm:px-6 md:px-[81px]">
            <div className="flex flex-col gap-4 max-w-[350px] text-center md:text-left">
              <h3 className="text-lg font-semibold">{t("cards.card3.title")}</h3>
              <p>{t("cards.card3.desc")}</p>
              <button className="w-[203px] h-[52px] border-2 bg-white text-black py-[15px] px-[50px] rounded-lg mx-auto md:mx-0">
                {t("cards.card3.btn")}
              </button>
            </div>
            <img src={img2} alt="Wallet" className="max-w-[456px] w-full h-[357px]" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
