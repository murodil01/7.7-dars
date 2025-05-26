import { useTranslation } from "react-i18next";

function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const handleChange = (e) => {
    i18n.changeLanguage(e.target.value);
  };

  return (
    <div className="flex gap-3 justify-end p-2">
      <select
        onChange={handleChange}
        value={i18n.language}
        className="border border-blue-500 rounded-xl px-[25px] py-[10px] bg-blue-500 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <option value="en"> English</option>
        <option value="uz">O'zbek</option>
        <option value="ru">Русский</option>
      </select>
    </div>
  );
}

export default LanguageSwitcher;