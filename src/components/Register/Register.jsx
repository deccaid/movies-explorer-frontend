import logo from "../../images/logo__COLOR_main-1.svg"
import './Register.css';
import { Link } from "react-router-dom";

const Register = () => {

  return (   
    <div className="login">
        <div className="login__container">
        <img className="login__logo" src={logo} alt="Логотип"/>
          <h1 className="login__title">Добро пожаловать!</h1>
          <div className="login__inputs">
          <label className="login__label">
            <span className="login__label-text">Имя</span>
            <input
              className="login__input"
              name="password"
              type="password"
              minLength="6"
              maxLength="30"
              required
              placeholder="Введите пароль"
            />
            
          </label>
          <label className="login__label">
            <span className="login__label-text">E-mail</span>
            <input
              className="login__input"
              name="email"
              type="email"
              required
              placeholder="Введите почту"
            />            
          </label>
          <label className="login__label">
            <span className="login__label-text">Пароль</span>
            <input
              className="login__input"
              name="password"
              type="password"
              minLength="6"
              maxLength="30"
              required
              placeholder="Введите пароль"
            />
            
          </label>
          </div>
          <button className="login__button">Регистрация</button>
          <p className="login__caption">Уже зарегистрированы?
          <Link to="/signin" className="login__link">Войти</Link></p>
          </div>
            </div>
  )
  }
export default Register;