import hourIcon from '../assets/Ic_Hour.svg';
import homeOfficeIcon from '../assets/Ic_HomeOffice.svg';
import workShopIcon from '../assets/Ic_Workshops.svg';
import drinkSnaksIcon from '../assets/Ic_DrinkSnacks.svg';
import laptopIcon from '../assets/Ic_laptop.svg';
import brainIcon from '../assets/Ic_brain.svg';

const BASE_URL = 'https://private-8e8921-woloxfrontendinverview.apiary-mock.com';

const sliderOptions = [
  {
    id: 1,
    image: hourIcon,
    next: 2,
    prev: 6,
    text: 'Flexibilidad Horaria',
    alt: 'hour-icon'
  },
  {
    id: 2,
    image: homeOfficeIcon,
    next: 3,
    prev: 1,
    text: 'Home Office',
    alt: 'home-icon'
  },
  {
    id: 3,
    image: workShopIcon,
    next: 4,
    prev: 2,
    text: 'Capacitaciones y workshops',
    alt: 'workshop-icon'
  },
  {
    id: 4,
    image: drinkSnaksIcon,
    next: 5,
    prev: 3,
    text: 'Snacks, frutas y bebidas gratis',
    alt: 'drink-snacks-icon'
  },
  {
    id: 5,
    image: laptopIcon,
    next: 6,
    prev: 4,
    text: 'Semana remota',
    alt: 'laptop-icon'
  },
  {
    id: 6,
    image: brainIcon,
    next: 1,
    prev: 5,
    text: 'Trabajar en últimas tecnologías',
    alt: 'brain-icon'
  }
];

const countriesOptions = [
  {
    id: 1,
    name: 'Argentina',
    value: 'Argentina',
    provinces: [
      {
        id: 1,
        name: 'Buenos Aires',
        value: 'Buenos Aires'
      },
      {
        id: 2,
        name: 'Córdoba',
        value: 'Córdoba'
      },
      {
        id: 3,
        name: 'Mendoza',
        value: 'Mendoza'
      },
      {
        id: 4,
        name: 'La Pampa',
        value: 'La Pampa'
      },
      {
        id: 5,
        name: 'Tucumán',
        value: 'Tucumán'
      }
    ]
  },
  {
    id: 2,
    name: 'Brasil',
    value: 'Brasil',
    provinces: [
      {
        id: 1,
        name: 'Bahía',
        value: 'Bahía'
      },
      {
        id: 2,
        name: 'Goiás',
        value: 'Goiás'
      },
      {
        id: 3,
        name: 'Paraíba',
        value: 'Paraíba'
      },
      {
        id: 4,
        name: 'Río de Janeiro',
        value: 'Río de Janeiro'
      },
      {
        id: 5,
        name: 'São Paulo',
        value: 'São Paulo'
      }
    ]
  },
  {
    id: 3,
    name: 'Colombia',
    value: 'Colombia',
    provinces: [
      {
        id: 1,
        name: 'Amazonas',
        value: 'Amazonas'
      },
      {
        id: 2,
        name: 'Antioquia',
        value: 'Antioquia'
      },
      {
        id: 3,
        name: 'Atlántico',
        value: 'Atlántico'
      },
      {
        id: 4,
        name: 'Caldas',
        value: 'Caldas'
      },
      {
        id: 5,
        name: 'Nariño',
        value: 'Nariño'
      }
    ]
  },
  {
    id: 4,
    name: 'Ecuador',
    value: 'Ecuador',
    provinces: [
      {
        id: 1,
        name: 'Esmeraldas',
        value: 'Esmeraldas'
      },
      {
        id: 2,
        name: 'Manabí',
        value: 'Manabí'
      },
      {
        id: 3,
        name: 'Los Ríos',
        value: 'Los Ríos'
      },
      {
        id: 4,
        name: 'Santa Elena',
        value: 'Santa Elena'
      },
      {
        id: 5,
        name: 'Guayas',
        value: 'Guayas'
      }
    ]
  },
  {
    id: 5,
    name: 'Venezuela',
    value: 'Venezuela',
    provinces: [
      {
        id: 1,
        name: 'Trujillo',
        value: 'Trujillo'
      },
      {
        id: 2,
        name: 'La Guaira',
        value: 'La Guaira'
      },
      {
        id: 3,
        name: 'Carabobo',
        value: 'Carabobo'
      },
      {
        id: 4,
        name: 'Bolívar',
        value: 'Bolívar'
      },
      {
        id: 5,
        name: 'Zulia',
        value: 'Zulia'
      }
    ]
  }
];

const lowerCase = /[a-z]/;
const upperCase = /[A-Z]/;
const numbers = /[0-9]/;
const specialCharacter = /[!"#$%¿&'()*+,-./:;<=>?@[\]^_`{|}\\~]/;
const onlyNumbers = /^\d+$/;
const characters = [
  '!',
  '¿',
  '"',
  '#',
  '$',
  '%',
  '&',
  "'",
  '(',
  ')',
  '*',
  '+',
  ',',
  '-',
  '.',
  '/',
  ':',
  ';',
  '<',
  '=',
  '>',
  '?',
  '}',
  '~',
  '\\',
  '@',
  '[',
  ']',
  '^',
  '_',
  '`',
  '{',
  '|'
];

export { BASE_URL, sliderOptions, countriesOptions, lowerCase, upperCase, numbers, characters, specialCharacter, onlyNumbers };
