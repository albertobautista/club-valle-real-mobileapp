import { componentsNames } from '../types/componetsNames';

export const menuItems = [
  {
    id: 1,
    title: 'Home',
    icon: 'home-outline',
    color: 'black',
    component: componentsNames.Home.name,
  },
  {
    id: 2,
    title: 'Actividades',
    icon: 'body-outline',
    color: 'black',
    component: componentsNames.Activities.name,
  },
  {
    id: 3,
    title: 'Restaurante',
    icon: 'restaurant-outline',
    color: 'black',
    component: componentsNames.Restaurant.name,
  },
  {
    id: 4,
    title: 'Galería',
    icon: 'easel-outline',
    color: 'black',
    component: componentsNames.Gallery.name,
  },
  {
    id: 5,
    title: 'Eventos',
    icon: 'calendar-outline',
    color: 'black',
    component: componentsNames.Events.name,
  },
  {
    id: 6,
    title: 'Configuración',
    icon: 'settings-outline',
    color: 'black',
    component: componentsNames.Configuration.name,
  },
];
