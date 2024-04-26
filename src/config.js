import { ROUTER } from "./router/router";

import creatingImg from "./assets/images/services/creating.jpg";
import asphaltingImg from "./assets/images/services/asphalting.jpg";
import repairingImg from "./assets/images/services/repairing.jpg";
import crumbsImg from "./assets/images/services/crumbs.jpg";

export const navConfig = [
  { id: 1, title: "Главная", link: ROUTER.HOME_PAGE_ROUTE, children: [] },
  {
    id: 2,
    title: "Услуги",
    link: ROUTER.SERVICES_PAGE_ROUTE,
    children: [
      {
        id: 1,
        title: "Строительство дорог",
        link: ROUTER.CREATING_ROADS_PAGE_ROUTE,
      },
      {
        id: 2,
        title: "Асфальтирование дорог",
        link: ROUTER.ASPHALTING_ROADS_PAGE_ROUTE,
      },
      { id: 3, title: "Ремонт дорог", link: ROUTER.REPAIRING_ROADS_PAGE_ROUTE },
      {
        id: 4,
        title: "Асфальтовая крошка",
        link: ROUTER.ASPHALT_CRUMBS_PAGE_ROUTE,
      },
    ],
  },
  { id: 3, title: "Цены", link: ROUTER.PRICES_PAGE_ROUTE, children: [] },
  { id: 4, title: "Галерея", link: ROUTER.GALLERY_PAGE_ROUTE, children: [] },
  { id: 5, title: "Контакты", link: ROUTER.CONTACT_PAGE_ROUTE, children: [] },
];

export const homeServicesConfig = [
  {
    id: 1,
    title: "Строительство дорог",
    description:
      "Строительство дорог  и дорожные работы на новых дорогах, шоссе и трассах",
    link: ROUTER.CREATING_ROADS_PAGE_ROUTE,
  },
  {
    id: 2,
    title: "Асфальтирование дорог",
    description:
      "Укладка асфальта и  асфальтирование дорог, тротуаров, площадок, складских территорий",
    link: ROUTER.ASPHALTING_ROADS_PAGE_ROUTE,
  },
  {
    id: 3,
    title: "Ремонт дорог",
    description:
      "Замена асфальтового покрытия, ямочный ремонт дорог, заделка трещин",
    link: ROUTER.REPAIRING_ROADS_PAGE_ROUTE,
  },
  {
    id: 4,
    title: "Асфальтовая крошка",
    description: "Доставка и укладка асфальтовой крошки, щебня, песка",
    link: ROUTER.ASPHALT_CRUMBS_PAGE_ROUTE,
  },
];

export const servicesConfig = [
  {
    id: 1,
    title: "Строительство дорог",
    img: creatingImg,
    link: ROUTER.CREATING_ROADS_PAGE_ROUTE,
  },
  {
    id: 2,
    title: "Асфальтирование дорог",
    img: asphaltingImg,
    link: ROUTER.ASPHALTING_ROADS_PAGE_ROUTE,
  },
  {
    id: 3,
    title: "Ремонт дорог",
    img: repairingImg,
    link: ROUTER.REPAIRING_ROADS_PAGE_ROUTE,
  },
  {
    id: 4,
    title: "Асфальтовая крошка",
    img: crumbsImg,
    link: ROUTER.ASPHALT_CRUMBS_PAGE_ROUTE,
  },
];
