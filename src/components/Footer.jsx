import React from "react";
import { useTranslation } from "react-i18next";
import Logo from "../assets/Logo.svg";
import LanguageSwitcher from "./LanguageSwitcher";
import { FaInstagram, FaTelegramPlane, FaTwitter } from "react-icons/fa";

function Footer() {
  const { t } = useTranslation();

  return (
    <footer
      className="border-t text-white pt-[80px] pb-8 px-4 sm:px-6 lg:px-8"
      style={{
        background:
          "radial-gradient(50% 50% at 50% 50%, #30313A 0%, #2C2D34 20.31%, #1F2025 50.52%, #18191E 86.98%, #17181D 99.48%)",
      }}
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        <div>
          <img src={Logo} alt="Logo" className="w-32 mb-4" />
          <p className="text-sm text-gray-300 mb-4">
            {t("footer.description")}
          </p>
          <div className="flex gap-4 mt-2 text-xl">
            <a
              href="#"
              className="hover:text-[#00FFB3] transition"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
            <a
              href="#"
              className="hover:text-[#00FFB3] transition"
              aria-label="Telegram"
            >
              <FaTelegramPlane />
            </a>
            <a
              href="#"
              className="hover:text-[#00FFB3] transition"
              aria-label="Twitter"
            >
              <FaTwitter />
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">{t("footer.company")}</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>
              <a href="#about" className="hover:text-white">
                {t("footer.about")}
              </a>
            </li>
            <li>
              <a href="#reviews" className="hover:text-white">
                {t("footer.reviews")}
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">{t("footer.products")}</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>
              <a href="#" className="hover:text-white">
                {t("footer.exchange")}
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                {t("footer.concierge")}
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                {t("footer.bankCard")}
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                {t("footer.personalAccount")}
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                {t("footer.web3wallet")}
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">{t("footer.contacts")}</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>
              <a href="mailto:info@paytion.com" className="hover:text-white">
                info@paytion.com
              </a>
            </li>
            <li>
              <a href="tel:+79999999999" className="hover:text-white">
                +7 (999) 999-99-99
              </a>
            </li>
          </ul>
          <div className="mt-4">
            <LanguageSwitcher />
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-12 pt-6 border-t border-gray-700 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-500 text-center sm:text-left">
        <p>{t("footer.bottom.company")}</p>
        <p>{t("footer.bottom.offer")}</p>
        <p>{t("footer.bottom.privacy")}</p>
      </div>
    </footer>
  );
}

export default Footer;
