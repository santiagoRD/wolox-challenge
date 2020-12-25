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

export { validateEmail, validatePassCoincidence, validatePasswordStructure, validateOnlyNumbers, noop };
