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

      /* Gift */
      gift: {
        title: "Biz moliyaviy muammolarni hal qilamiz",
        card1: "Fiat va kriptovalyutalarni xarid qilish/sotish/ayirboshlash",
        card2: "Dunyoning istalgan nuqtasida pul yuborish/qabul qilish",
        card3: "Mehmonxona, aviachiptalar, tovar yoki xizmatlar uchun to'lov",
      },
      /* Gift */

      /* Cards */
      cards: {
        title: "Mahsulotlarimiz",
        card1: {
          title: "Valyuta ayirboshlash",
          desc: "Fiat va kriptovalyutalarni xavfsiz tarzda butun dunyo bo'ylab ayirboshlang",
          btn: "Ayirboshlash →",
        },
        card2: {
          title: "Konsyerj xizmati",
          desc: "Bu sizning shaxsiy yordamchingiz bo'lib, moliyaviy masalalarni hal qilishda yordam beradi: hisob-kitoblar to'lovi yoki kredit kartani to'ldirishgacha",
          btn: "Bog'lanish →",
        },
        card3: {
          title: "Hamyon",
          desc: "Fiat va kriptovalyutalarni xavfsiz tarzda butun dunyo bo'ylab ayirboshlang",
          btn: "Bog'lanish →",
        },
      },

      /* Cards */

      /* Products */
      products: {
        title: "Bizga ishonishadi",
        quote:
          "Bizning maqsad — raqamli valyutalardan real hayotda foydalanishning oddiy, shaffof va qulay usulini yaratish. Odamlarga o‘z aktivlarini erkin boshqarish imkoniyatini berish.",
        name: "Oleg Kurchenko",
        position: "CEO va asoschi, Paytion",
        button: "Mijoz bo'lish",
      },

      /* Products */

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

      /* Gift */
      gift: {
        title: "We solve financial problems",
        card1: "Purchase/sale/exchange of fiat and cryptocurrencies",
        card2: "Send/receive money anywhere in the world",
        card3: "Bill payment for hotels, flights, goods or services",
      },
      /* Gift */

      /* Cards */
      cards: {
        title: "Our Products",
        card1: {
          title: "Currency Exchange",
          desc: "Exchange fiat and cryptocurrencies securely worldwide",
          btn: "Exchange →",
        },
        card2: {
          title: "Concierge Service",
          desc: "Your personal assistant for solving financial tasks: from paying bills to topping up your credit card",
          btn: "Contact →",
        },
        card3: {
          title: "Wallet",
          desc: "Exchange fiat and cryptocurrencies securely worldwide",
          btn: "Contact →",
        },
      },

      /* Cards */

      /* Products */
      products: {
        title: "We are trusted",
        quote:
          "Our goal is to create a simple, transparent, and convenient way to use digital currencies in the real world. Enable people to freely own and use their assets.",
        name: "Oleg Kurchenko",
        position: "CEO & Founder Paytion",
        button: "Become a client",
      },
      /* Products */

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

      /* Gift */
      gift: {
        title: "Решаем задачи, связанные c финансами",
        card1: "Покупка/продажа/обмен фиатных и криптовалют",
        card2: "Отправка/получение денег в любой точке мира",
        card3: "Оплата счетов за отели, перелеты, товары или услуги",
      },
      /* Gift */

      /* Cards */
      cards: {
        title: "Наши продукты",
        card1: {
          title: "Обмен валют",
          desc: "Обменивайте фиатные и криптовалюты безопасно по всему миру",
          btn: "Обменять →",
        },
        card2: {
          title: "Консьерж сервис",
          desc: "Это ваш личный ассистент, который поможет решить финансовые задачи: от оплаты счетов до пополнения кредитки",
          btn: "Связаться →",
        },
        card3: {
          title: "Кошелек",
          desc: "Обменивайте фиатные и криптовалюты безопасно по всему миру",
          btn: "Связаться →",
        },
      },

      /* Cards */

      /* Products */
      products: {
        title: "Нам доверяют",
        quote:
          "Наша цель — создать простой, прозрачный и удобный способ использования цифровых валют в реальном мире. Дать возможность людям свободно владеть и использовать их активы.",
        name: "Олег Курченко",
        position: "CEO & Founder Paytion",
        button: "Стать клиентом",
      },

      /* Products */

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
