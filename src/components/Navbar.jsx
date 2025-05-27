import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./LanguageSwitcher";
import Logo from "../assets/Logo.svg";
import { Menu, X } from "lucide-react";
import { useState } from "react";

function Navbar() {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header
      className="sticky top-0 z-50 py-6 shadow-md"
      style={{
        background:
          "radial-gradient(50% 50% at 50% 50%, #30313A 0%, #2C2D34 20.31%, #1F2025 50.52%, #18191E 86.98%, #17181D 99.48%)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center gap-6">
          <img src={Logo} alt="Logo" className="w-[120px]" />
        </div>

        <ul className="hidden md:flex items-center gap-6 text-white">
          <li>
            <a href="#products">{t("navbar.products")}</a>
          </li>
          <li>
            <a href="#reviews">{t("navbar.reviews")}</a>
          </li>
          <li>
            <a href="#about">{t("navbar.about")}</a>
          </li>
        </ul>

        <div className="hidden md:flex items-center gap-4">
          <LanguageSwitcher />
          <button className="bg-white text-black py-2 px-5 rounded-xl text-sm">
            {t("navbar.becomeClient")}
          </button>
        </div>

        <div className="md:hidden flex items-center gap-4">
          <LanguageSwitcher />
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden px-4 pt-4 pb-6 bg-[#1F2025] text-white space-y-4">
          <a href="#products" onClick={() => setIsOpen(false)} className="block">
            {t("navbar.products")}
          </a>
          <a href="#reviews" onClick={() => setIsOpen(false)} className="block">
            {t("navbar.reviews")}
          </a>
          <a href="#about" onClick={() => setIsOpen(false)} className="block">
            {t("navbar.about")}
          </a>
          <button
            onClick={() => setIsOpen(false)}
            className="mt-4 w-full bg-white text-black py-2 px-5 rounded-xl text-sm"
          >
            {t("navbar.becomeClient")}
          </button>
        </div>
      )}
    </header>
  );
}

export default Navbar;
