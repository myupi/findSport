import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      offer: "Tired of work? We have a useful offer for you.",
      client: "Several selected clients, who already believe in our service.",
      clientTitleFirst: "What our happy",
      clientTitleSecond: "client say",
      issueTitleFirst: "Are you facing these",
      issueTitleSecond: "common issues?",
      issueUpgrade: "You want to increase your revenue.",
      issueDocument: "You're overwhelmed with administrative work.",
      issueCursor:
        "People can't easily see when your facilities are available.",
      issuePersons: "I’m tired of looking for new customers.",
      issueDescription:
        "At FingStop, we understand your problems because we were in your place. Our sports facility booking, planning and access management program has helped hundreds of customers around the world save time and increase revenue. Register on our platform and place your object.",
      solveProblem: "We will solve these problems for you.",
      joinCustomers: "Join with more 1200+ happy customers",
      theMostPopular: "The most popular ads",
      registration: "Registration",
      allProducts: "All Products",
      FAQ: "Frequently asked questions",
      similarAds: "Similar ads",
      error: "Data did not arrive",
      search: "Search",
      wholeUzb: "The whole of Uzbekistan",
      ads: "We have 21 215 486 ads, ask what you need",
      pages: "Number of pages",
      sports: "Sports",
      types: "Типы рекламы",
      price: "Price"
    },
  },
  ru: {
    translation: {
      offer: "Устали от работы? У нас есть для вас полезное предложение.",
      client:
        "Несколько избранных клиентов, которые уже поверили в наш сервис.",
      clientTitleFirst: "Что говорит наш",
      clientTitleSecond: "счастливый клиент",
      issueTitleFirst: "Сталкиваетесь ли вы с этими",
      issueTitleSecond: "распространенными проблемами?",
      issueUpgrade: "Вы хотите увеличить свой доход.",
      issueDocument: "Вы перегружены административной работой.",
      issueCursor: "Люди не могут легко увидеть, когда ваши объекты доступны.",
      issuePersons: "Я устал искать новых клиентов.",
      issueDescription:
        "В FingStop мы понимаем ваши проблемы, потому что мы были на вашем месте. Наша программа бронирования, планирования и управления доступом к спортивным объектам помогла сотням клиентов по всему миру сэкономить время и увеличить доходы. Зарегистрируйтесь на нашей платформе и разместите свой объект.",
      solveProblem: "Мы решим эти проблемы за вас.",
      joinCustomers: "Присоединяйтесь к более чем 1200+ довольным клиентам",
      theMostPopular: "Самые популярные объявления",
      registration: "Регистрация",
      allProducts: "Все продукты",
      FAQ: "Часто задаваемые вопросы",
      similarAds: "Похожие объявления",
      error: "Данные не пришли",
      search: "Поиск",
      wholeUzb: "Весь Узбекистан",
      ads: "У нас 21 215 486 объявлений, напишите, что вам нужно",
      pages: "Количество страниц",
      sports: "Виды спорта",
      types: "Types of ads",
      price: "Цена"
    },
  },
  uz: {
    translation: {
      offer: "Ishdan charchadingizmi? Siz uchun foydali taklifimiz bor.",
      client:
        "Bizning xizmatimizga allaqachon ishongan bir nechta tanlangan mijozlar.",
      clientTitleFirst: "Bizning baxtli mijozimiz",
      clientTitleSecond: "nima deydi",
      issueTitleFirst: "Ushbu umumiy muammolarga",
      issueTitleSecond: "duch kelyapsizmi?",
      issueUpgrade: "Siz daromadingizni oshirishni xohlaysiz.",
      issueDocument: "Siz ma'muriy ishlar bilan to'lib-toshgansiz.",
      issueCursor:
        "Odamlar sizning imkoniyatlaringiz borligini osongina ko'ra olmaydi.",
      issuePersons: "Men yangi mijozlarni qidirishdan charchadim.",
      issueDescription:
        "FingStop da biz sizning muammolaringizni tushunamiz, chunki biz sizning joyingizda edik. Bizning sport inshootlarini bron qilish, rejalashtirish va kirishni boshqarish dasturimiz butun dunyo bo'ylab yuzlab mijozlarga vaqtni tejash va daromadni oshirishga yordam berdi. Bizning platformamizda ro'yxatdan o'ting va ob'ektingizni joylashtiring.",
      solveProblem: "Biz siz uchun bu muammolarni hal qilamiz.",
      joinCustomers: "1200 dan ortiq baxtli mijozlarga qo'shiling",
      theMostPopular: "Eng mashhur reklamalar",
      registration: "Roʻyxatdan oʻtish",
      allProducts: "Barcha Mahsulotlar",
      FAQ: "Tez-tez so'raladigan savollar",
      similarAds: "O'xshash reklamalar",
      error: "Ma'lumotlar kelmadi",
      search: "Qidirish",
      wholeUzb: "Butun O'zbekiston",
      ads: "Bizda 21 215 486 ta e'lon bor, nima kerakligini yozing",
      pages: "Sahifalar soni",
      sports: "Sport turlari",
      types: "E'lon turlari",
      price: "Narxi"
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "ru",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
