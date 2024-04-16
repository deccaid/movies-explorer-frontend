import React from "react";
import { useEffect, useState, useContext, } from 'react';
import logo from "../../images/logo__COLOR_main-1.svg"
import './Register.css';
import { Link, useNavigate } from "react-router-dom";
import useFormWithValidation from '../../hooks/useFormWithValidation';
import CurrentUserContext from "../../contexts/CurrentUserContext";
import MainApi from "../../utils/MainApi";

const Register = ({ handleRegister }) => {
  // const currentUser = useContext(CurrentUserContext);
  const [isRequesting, setIsRequesting] = useState(false);
  const { values, handleChange,  resetForm, errors, isValid } = useFormWithValidation();
    // const [formValue, setFormValue] = useState({
    //   name: '',
    //   email: '',
    //   password: ''
    // });
  
    // const handleChange = (e) => {
    //   const {name, value} = e.target;
  
    //   setFormValue({
    //     ...formValue,
    //     [name]: value
    //   });
    // }
  
    const handleSubmit = (evt) => {
      evt.preventDefault();
      setIsRequesting(true);
      handleRegister(values.name, values.email, values.password).finally(() => {
        setIsRequesting(false);
      });
    }
     
  return (   
    <div className="login">
        <div className="login__container">
        <Link to="/">
            <img src={logo} alt='Логотип' className='login__logo'></img>
            </Link>
          <h1 className="login__title">Добро пожаловать!</h1>
          <form
      className="auth"
      name="auth__form"
      id="auth__form"
      onSubmit={handleSubmit}
      noValidate
    >
          <div className="login__inputs">
          <label className="login__label">
            <span className="login__label-text">Имя</span>
            <input
               className={`login__input ${
                errors.name && 'login__input_error'
              }`}
              name="name"
              type="text"
              minLength="4"
              maxLength="30"
              required
              placeholder="Введите Имя"
              value={values.name}
              onChange={handleChange}
              autoComplete="off"
            />
            <span className="login__error">{errors.name || ''}</span>
          </label>
          <label className="login__label">
            <span className="login__label-text">E-mail</span>
            <input
               className={`login__input ${
                errors.email && 'login__input_error'
              }`}
              name="email"
              type="email"
              required
              placeholder="Введите почту"
              value={values.email}
              onChange={handleChange}
            />   
            <span className="login__error">{errors.email || ''}</span>         
          </label>
          <label className="login__label register__label">
            <span className="login__label-text">Пароль</span>
            <input
               className={`login__input ${
                errors.password && 'login__input_error'
              }`}
              name="password"
              type="password"
              minLength="6"
              maxLength="30"
              required
              placeholder="Введите пароль"
              value={values.password}
              onChange={handleChange}
            />
             <span className="login__error">{errors.password || ''}</span>  
          </label>
          </div>
          <button className="login__button"
           type="submit"
           disabled={!isValid || isRequesting}
           >Зарегистрироваться</button>
          </form>
          <p className="login__caption">Уже зарегистрированы?
          <Link to="/signin" className="login__link">Войти</Link></p>
          </div>
            </div>
  )
  }
export default Register;