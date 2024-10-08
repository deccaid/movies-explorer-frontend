import { useState, useCallback } from 'react';
import isEmail from 'validator/es/lib/isEmail';

const useFormWithValidation = (initValues = {}) => {
  const [values, setValues] = useState(initValues);
  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(false);

  const handleChange = (e) => {
    const input = e.target;
    const { value, name } = input;

    if (name === 'name' && input.validity.patternMismatch) {
      input.setCustomValidity(
        'Имя должно содержать только латиницу, кириллицу.'
      );
    } else {
      input.setCustomValidity('');
    }

    if (name === 'email') {
      if (!isEmail(value)) {
        input.setCustomValidity('Некорректый адрес почты.');
      } else {
        input.setCustomValidity('');
      }
    }

    setValues({
      ...values,
      [input.name]: input.type === 'checkbox' ? input.checked : input.value,
    }); // универсальный обработчик полей
    setErrors({ ...errors, [name]: input.validationMessage }); // ошибок
    setIsValid(input.closest('form').checkValidity()); // проверка валидности
  };
  const resetForm = useCallback(
    (newValues = {}, newErrors = {}, newIsValid = false) => {
      // это метод для сброса формы, полей, ошибок
      setValues(newValues);
      setErrors(newErrors);
      setIsValid(newIsValid);
    },
    [setValues, setErrors, setIsValid]
  );

  return { values, errors, isValid, handleChange, resetForm, setIsValid };
};

export default useFormWithValidation;