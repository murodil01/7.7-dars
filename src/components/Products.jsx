import React from "react";
import { useTranslation } from "react-i18next";
import per1 from "../assets/per1.png";
import per2 from "../assets/per2.png";
import per3 from "../assets/per3.png";
import per4 from "../assets/per4.png";
import signature from "../assets/signature.png";

const Products = () => {
  const { t } = useTranslation();

  return (
    <div
      className="pb-[100px]"
      style={{
        background:
          "radial-gradient(50% 50% at 50% 50%, #30313A 0%, #2C2D34 20.31%, #1F2025 50.52%, #18191E 86.98%, #17181D 99.48%)",
      }}
    >
      <div className="max-w-7xl mx-auto py-[100px] text-white">
        <h1 className="text-3xl font-bold text-center mb-12">
          {t("products.title")}
        </h1>

        <div className="flex flex-wrap items-center justify-center gap-6">
          <img
            src={per1}
            alt="Person"
            className="w-full max-w-[300px] sm:max-w-[280px] md:max-w-[240px] lg:max-w-[320px] xl:max-w-[380px] h-[500px] sm:h-[540px] md:h-[500px] lg:h-[580px] xl:h-[600px] object-cover"
          />
          <img
            src={per2}
            alt="Person"
            className="w-full max-w-[300px] sm:max-w-[280px] md:max-w-[240px] lg:max-w-[320px] xl:max-w-[380px] h-[500px] sm:h-[540px] md:h-[500px] lg:h-[580px] xl:h-[600px] object-cover"
          />
          <img
            src={per3}
            alt="Person"
            className="w-full max-w-[300px] sm:max-w-[280px] md:max-w-[240px] lg:max-w-[320px] xl:max-w-[380px] h-[500px] sm:h-[540px] md:h-[500px] lg:h-[580px] xl:h-[600px] object-cover"
          />
        </div>
      </div>

      <div className="max-w-7xl mx-auto text-white border-2 border-gray-100 rounded-xl py-[70px] px-6 md:px-[60px] flex flex-col lg:flex-row items-center justify-between gap-16">
        <img
          src={per4}
          alt="Image"
          className="max-w-[300px] md:max-w-[320px] lg:max-w-[340px] w-full h-[360px] sm:h-[400px] md:h-[420px] object-cover"
        />

        <div className="flex flex-col gap-[30px] w-full">
          <p className="text-sm md:text-base">{t("products.quote")}</p>

          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
            <div className="flex flex-col gap-4">
              <h3 className="text-lg font-semibold">{t("products.name")}</h3>
              <p className="text-sm">{t("products.position")}</p>
              <button className="mt-6 md:mt-[80px] w-full md:w-[228px] h-[52px] border-2 bg-white text-black py-[15px] px-[30px] rounded-lg text-sm">
                {t("products.button")}
              </button>
            </div>
            <img
              src={signature}
              alt="Signature"
              className="w-[150px] md:w-[180px] lg:w-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
