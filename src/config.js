import { ROUTER } from "./router/router";

export const navConfig = [
  { id: 1, title: "Главная", link: ROUTER.HOME_PAGE_ROUTE, children: [] },
  {
    id: 2,
    title: "Услуги",
    link: ROUTER.HOME_PAGE_ROUTE,
    children: [
      { id: 1, title: "Строительство дорог", link: ROUTER.HOME_PAGE_ROUTE },
      { id: 2, title: "Асфальтирование дорог", link: ROUTER.HOME_PAGE_ROUTE },
      { id: 3, title: "Ремонт дорог", link: ROUTER.HOME_PAGE_ROUTE },
      { id: 4, title: "Асфальтовая крошка", link: ROUTER.HOME_PAGE_ROUTE },
    ],
  },
  { id: 3, title: "Цены", link: ROUTER.HOME_PAGE_ROUTE, children: [] },
  { id: 4, title: "Галерея", link: ROUTER.GALLERY_PAGE_ROUTE, children: [] },
  { id: 5, title: "Контакты", link: ROUTER.CONTACT_PAGE_ROUTE, children: [] },
];

export const homeServicesConfig = [
  {
    id: 1,
    title: "Строительство дорог",
    description:
      "Строительство дорог  и дорожные работы на новых дорогах, шоссе и трассах",
    link: ROUTER.HOME_PAGE_ROUTE,
  },
  {
    id: 2,
    title: "Асфальтирование дорог",
    description:
      "Укладка асфальта и  асфальтирование дорог, тротуаров, площадок, складских территорий",
    link: ROUTER.HOME_PAGE_ROUTE,
  },
  {
    id: 3,
    title: "Ремонт дорог",
    description:
      "Замена асфальтового покрытия, ямочный ремонт дорог, заделка трещин",
    link: ROUTER.HOME_PAGE_ROUTE,
  },
  {
    id: 4,
    title: "Асфальтовая крошка",
    description:
      "Замена асфальтового покрытия, ямочный ремонт дорог, заделка трещин",
    link: ROUTER.HOME_PAGE_ROUTE,
  },
];
