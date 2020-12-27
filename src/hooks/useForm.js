import { useState } from 'react';

const useForm = ({ initialState = {} }) => {
  const [values, setValues] = useState(initialState);

  const handleInputChange = ({ target }, checkbox = false) => {
    setValues({
      ...values,
      [target.name]: checkbox ? target.checked : target.value
    });
  };

  const handleReset = newValue => {
    setValues(newValue);
  };

  return [values, handleInputChange, handleReset];
};

export default useForm;
