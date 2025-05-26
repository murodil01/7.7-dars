import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

const resources = {
  uz: {
    translation: {
      /* Navbar */
      navbar: {
        products: "Mahsulotlar",
        reviews: "Fikrlar",
        about: "Biz haqimizda",
        becomeClient: "Mijoz bo'lish",
      },
      /* Navbar */

      /* Hero */
      hero: {
        title: "Paytion",
        subtitle: "Hayot va biznes uchun moliyaviy xizmatlar va mahsulotlar",
        button: "Batafsil →",
        stat1: "15 ta ofis va vakolatxona (AQSh, Yevropa, BAA, Osiyo)",
        stat2: "Kriptovalyuta va fiat bilan operatsiyalar",
        stat3: "700+ mamnun mijozlar",
      },
      /* Hero */

      /* Products */
      /* Products */

      /* Shops */
      /* Shops */

      /* Cards */
      /* Cards */

      /* Footer */
      footer: {
        description: "Hayot va biznes uchun moliyaviy xizmatlar va mahsulotlar",
        company: "Kompaniya",
        about: "Biz haqimizda",
        reviews: "Fikrlar",
        products: "Mahsulotlar",
        contacts: "Kontaktlar",
        exchange: "Valyuta ayirboshlash",
        concierge: "Konsyerj xizmati",
        bankCard: "Bank kartasi (Tez orada)",
        personalAccount: "Shaxsiy hisob (Tez orada)",
        web3wallet: "Web3 hamyon (Tez orada)",
        bottom: {
          company: "Paytion",
          offer: "Ommaviy oferta shartnomasi",
          privacy: "Maxfiylik siyosati",
        },
      },
      /* Footer */
    },
  },
  en: {
    translation: {
      /* Navbar */
      navbar: {
        products: "Products",
        reviews: "Reviews",
        about: "About us",
        becomeClient: "Become a client",
      },
      /* Navbar */
      /* Hero */
      hero: {
        title: "Paytion",
        subtitle: "Financial services and products for life and business",
        button: "Learn more →",
        stat1: "15 offices and branches (USA, Europe, UAE, Asia)",
        stat2: "Operations with crypto and fiat",
        stat3: "700+ satisfied clients",
      },
      /* Hero */
      /* Products */
      /* Products */
      /* Shops */
      /* Shops */
      /* Cards */
      /* Cards */
      /* Footer */
      footer: {
        description: "Financial services and products for life and business",
        company: "Company",
        about: "About Us",
        reviews: "Reviews",
        products: "Products",
        contacts: "Contacts",
        exchange: "Currency Exchange",
        concierge: "Concierge Service",
        bankCard: "Bank Card (Coming Soon)",
        personalAccount: "Personal Account (Coming Soon)",
        web3wallet: "Web3 Wallet (Coming Soon)",
        bottom: {
          company: "Paytion",
          offer: "Public Offer Agreement",
          privacy: "Privacy Policy",
        },
      },

      /* Footer */
    },
  },
  ru: {
    translation: {
      /* Navbar */
      navbar: {
        products: "Продукты",
        reviews: "Отзывы",
        about: "O нас",
        becomeClient: "Стать клиентом",
      },
      /* Navbar */
      /* Hero */
      hero: {
        title: "Paytion",
        subtitle: "Финансовые услуги и продукты для жизни и бизнеса",
        button: "Узнать больше →",
        stat1: "15 офисов и представительств (США, Европа, ОАЭ, Азия)",
        stat2: "Операции c криптовалютами и фиатом",
        stat3: "700+ довольных клиентов",
      },
      /* Hero */
      /* Products */
      /* Products */
      /* Shops */
      /* Shops */
      /* Cards */
      /* Cards */
      /* Footer */
      footer: {
        description: "Финансовые услуги и продукты для жизни и бизнеса",
        company: "Компания",
        about: "О нас",
        reviews: "Отзывы",
        products: "Продукты",
        contacts: "Контакты",
        exchange: "Обмен валют",
        concierge: "Консьерж-сервис",
        bankCard: "Банковская карта (Скоро)",
        personalAccount: "Личный кабинет (Скоро)",
        web3wallet: "Web3 кошелёк (Скоро)",
        bottom: {
          company: "Paytion",
          offer: "Договор публичной оферты",
          privacy: "Политика конфиденциальности",
        },
      },
      /* Footer */
    },
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "uz",
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
