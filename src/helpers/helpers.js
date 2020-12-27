import { lowerCase, upperCase, numbers, onlyNumbers } from './constants';

const validateEmail = email => {
  const emailRegex = /^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)$/;
  return emailRegex.test(String(email).toLocaleLowerCase());
};

const validatePassCoincidence = (pass, confirmPass) => String(pass) === String(confirmPass);

const validatePasswordStructure = pass => {
  const containNumbers = numbers.test(pass);
  const containCharacters = lowerCase.test(pass) || upperCase.test(pass);

  return [containNumbers, containCharacters];
};

const validateOnlyNumbers = text => onlyNumbers.test(text);

const noop = () => ({});

const getTechsByNameAndType = (techs, text) => {
  const formatedText = text.toLowerCase();
  const filtered = techs.filter(tech => tech.tech.toLowerCase().includes(formatedText) || tech.type.toLowerCase().includes(formatedText));
  return filtered;
};

const sortDesc = techs => {
  const sortedArray = techs.sort((a, b) => {
    const x = a.tech.toLowerCase();
    const y = b.tech.toLowerCase();

    if (x > y) return -1;
    if (x < y) return 1;
    return 0;
  });
  return sortedArray;
};

const sortAsc = techs => {
  const sortedArray = techs.sort((a, b) => {
    const x = a.tech.toLowerCase();
    const y = b.tech.toLowerCase();

    if (x > y) return 1;
    if (x < y) return -1;
    return 0;
  });
  return sortedArray;
};

export { validateEmail, validatePassCoincidence, validatePasswordStructure, validateOnlyNumbers, noop, getTechsByNameAndType, sortDesc, sortAsc };
