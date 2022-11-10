import { people01, people02, people03, people04, people05, portal, kfu, cyber, gpa, ippio, star  } from "../assets";

export const navLinks = [
  {
    id: "home",
    title: "Главная",
  },
  {
    id: "features",
    title: "Достижения",
  },
  {
    id: "features",
    title: "Команда",
  },
  {
    id: "clients",
    title: "Участники",
  },
];

export const features = [
  {
    id: "feature-1",
    icon: star,
    title: "Хакатон, цифровой прорыв 2022",
    content: "8 место из 31 команды в кейсе от Сбербанка, разработка ИИ для распознавания текста с картинки",
  },
];

export const feedback = [
  {
    id: "feedback-1",
    content:
      "Тим лид нашей команды, от неё зависят все ключевые решения нашей команды",
    name: "Галлини Надежда",
    title: "Инженер данных, старший преподаватель кафедры математики и информатики",
    img: people01,
    link: 'https://vk.com/nadia.gallini'
  },
  {
    id: "feedback-2",
    content:
      "Спикер нашей команды",
    name: "Денисенко Александр",
    title: "Менеджер команды, обучающийся группы Я/Э-б-о-201",
    img: people02,
    link: 'https://vk.com/latentsasha'
  },
  {
    id: "feedback-3",
    content:
      "Разрабатывает и склеивает серверную часть с клиентской",
    name: "Казаков Александр",
    title: "Full-Stack Разработчик, обучающийся группы Я/ПИ-б-о-201",
    img: people03,
    link: 'https://vk.com/alex_kedmy'
  },
  {
    id: "feedback-4",
    content:
        "Разработчик серверной части",
    name: "Гуляев Сарвар",
    title: "Back-End Разработчик, обучающийся группы Я/ПИ-б-о-201",
    img: people04,
    link: 'https://vk.com/gulyaevsm'
  },
  {
    id: "feedback-4",
    content:
        "Разработчик клиентской части",
    name: "Кулик Леонид",
    title: "Front-End Разработчик, обучающийся группы Я/ПИ-б-о-201.",
    img: people05,
    link: 'https://vk.com/lyonyaie'
  },
];

export const stats = [
  {
    id: "stats-1",
    title: "Активных участников",
    value: "5",
  },
  {
    id: "stats-2",
    title: "Участия в крупнейшем в Российской Федерации хакатоне",
    value: "2",
  },
  {
    id: "stats-3",
    title: "наше местоположение",
    value: "Ялта, Россия",
  },
];

export const socialMedia = [
  {
    id: "social-media-3",
    icon: kfu,
    link: "https://gpa.cfuv.ru/ru/",
  },
  {
    id: "social-media-3",
    icon: portal,
    link: "https://gpayalta.com/",
  },
];

export const clients = [
  {
    id: "client-1",
    logo: kfu,
  },
  {
    id: "client-3",
    logo: gpa,
  },
  {
    id: "client-4",
    logo: ippio,
  },
  {
    id: "client-2",
    logo: cyber,
  },
];