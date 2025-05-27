import { useTranslation } from "react-i18next";
import deposit from "../assets/deposit.png";
import map from "../assets/map.png";
import payment from "../assets/payment.png";

const Gift = () => {
  const { t } = useTranslation();

  return (
    <div
      className="py-[154px] text-white border-t-[1px] border-gray-100"
      style={{
        background:
          "radial-gradient(50% 50% at 50% 50%, #30313A 0%, #2C2D34 20.31%, #1F2025 50.52%, #18191E 86.98%, #17181D 99.48%)",
      }}
    >
      <div className="max-w-7xl mx-auto">
        <h1 className="text-2xl md:text-4xl font-semibold mb-10 text-center md:text-left">
          {t("gift.title")}
        </h1>

        <div className="flex flex-col md:flex-row justify-center md:justify-between gap-6 items-center">
          <div
            className="w-[380px] h-[320px] rounded-xl p-4 flex flex-col items-center justify-between text-center"
            style={{
              background:
                "linear-gradient(148.14deg, #202124 3.67%, #24252D 43.12%, #1C1D21 96.04%)",
            }}
          >
            <img
              src={deposit}
              alt="Deposit"
              className="w-[260px] h-[162px] object-contain"
            />
            <p className="text-left text-sm md:text-base w-full pb-[15px]">
              {t("gift.card1")}
            </p>
          </div>

          <div
            className="w-[380px] h-[320px] rounded-xl p-4 flex flex-col items-center justify-between text-center"
            style={{
              background:
                "linear-gradient(148.14deg, #202124 3.67%, #24252D 43.12%, #1C1D21 96.04%)",
            }}
          >
            <img
              src={map}
              alt="Map"
              className="w-[346px] h-[209px] object-contain"
            />
            <p className="text-left text-sm md:text-base w-full pb-[15px]">
              {t("gift.card2")}
            </p>
          </div>

          <div
            className="w-[380px] h-[320px] rounded-xl p-4 flex flex-col items-center justify-between text-center"
            style={{
              background:
                "linear-gradient(148.14deg, #202124 3.67%, #24252D 43.12%, #1C1D21 96.04%)",
            }}
          >
            <img
              src={payment}
              alt="Payment"
              className="w-[260px] h-[176px] object-contain"
            />
            <p className="text-left text-sm md:text-base w-full pb-[15px]">
              {t("gift.card3")}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gift;
