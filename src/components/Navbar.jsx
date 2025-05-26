import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./LanguageSwitcher";
import Logo from "../assets/Logo.svg";

function Navbar() {
  const { t } = useTranslation();

  return (
    <header className="sticky top-0 z-50 bg-[#0E0E0E] py-8 shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-8">
          <img src={Logo} alt="Logo" />
          <ul className="flex items-center gap-4 text-white">
            <li><a href="#products">{t("navbar.products")}</a></li>
            <li><a href="#reviews">{t("navbar.reviews")}</a></li>
            <li><a href="#about">{t("navbar.about")}</a></li>
          </ul>
        </div>
        <div className="flex items-center gap-4">
          <LanguageSwitcher />
          <button className="bg-white text-black py-[10px] px-[25px] rounded-xl">
            {t("navbar.becomeClient")}
          </button>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
