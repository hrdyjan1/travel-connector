import { colors } from '@material-ui/core';

const UNI = {
  UMEA: 'UMEA',
  CTU: 'CTU',
  HARVARD: 'Harvard',
};

const TYPE = {
  ECONOMY: 'Economy',
  BUSINESS: 'Business',
  GREENPEACE: 'Greenpeace',
  IT: 'IT',
};

const LEVEL = {
  MASTER: 'Master',
  BACHELOR: 'Bachelor',
};

const COUNTRY = {
  USA: 'USA',
  JAPAN: 'Japan',
  FRANCE: 'France123',
  GERMANY: 'Germany',
  IRELAND: 'Ireland',
};

// const students = [
//   {
//     color: colors.blue[500],
//     type: TYPE.ECONOMY,
//     typeDetail: 'Brain design',
//     level: LEVEL.MASTER,
//     country: COUNTRY.IRELAND,
//     uni: UNI.UMEA,
//     companyLogo:
//       'https://media4.s-nbcnews.com/i/newscms/2021_09/3453866/210302-donald-trump-cpac-se-502p_4679926547fc16d42d26936ecda18a3d.jpg',
//     name: 'Hanne Wiegand',
//   },
// ];

const choices = [
  {
    value: 'NAM',
    label: 'Name ✨',
  },
  {
    value: 'TYP',
    label: 'Type 🎭',
  },
  {
    value: 'LEV',
    label: 'Level ⚔',
  },
  {
    value: 'COU',
    label: 'Countries 🏆',
  },
  {
    value: 'UNI',
    label: 'Universities 🎮',
  },
];

const listOfCountries = [
  { label: COUNTRY.USA, value: COUNTRY.USA, type: 'COU' },
  { label: COUNTRY.JAPAN, value: COUNTRY.JAPAN, type: 'COU' },
  { label: COUNTRY.FRANCE, value: COUNTRY.FRANCE, type: 'COU' },
  { label: COUNTRY.GERMANY, value: COUNTRY.GERMANY, type: 'COU' },
  { label: COUNTRY.IRELAND, value: COUNTRY.IRELAND, type: 'COU' },
];

const listOfUniversities = [
  { label: UNI.UMEA, value: UNI.UMEA, type: 'UNI' },
  { label: UNI.CTU, value: UNI.CTU, type: 'UNI' },
  { label: UNI.HARVARD, value: UNI.HARVARD, type: 'UNI' },
];

const listOfLevels = [
  { label: LEVEL.BACHELOR, value: LEVEL.BACHELOR, type: 'LEV' },
  { label: LEVEL.MASTER, value: LEVEL.MASTER, type: 'LEV' },
];

const listOfTypes = [
  { label: TYPE.IT, value: TYPE.IT, type: 'TYP' },
  { label: TYPE.ECONOMY, value: TYPE.ECONOMY, type: 'TYP' },
  { label: TYPE.BUSINESS, value: TYPE.BUSINESS, type: 'TYP' },
  { label: TYPE.GREENPEACE, value: TYPE.GREENPEACE, type: 'TYP' },
];

export {
  listOfTypes,
  listOfLevels,
  listOfUniversities,
  listOfCountries,
  choices,
  COUNTRY,
  LEVEL,
  TYPE,
  UNI,
};
