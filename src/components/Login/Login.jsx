import logo from "../../images/logo__COLOR_main-1.svg"
import './Login.css';
import { Link } from "react-router-dom";

const Login = () => {

  return (   
    <div className="login">
        <div className="login__container">
        <Link to="/">
            <img src={logo} alt='Логотип' className='login__logo'></img>
            </Link>
          <h1 className="login__title">Рады видеть!</h1>
          <div className="login__inputs">
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
          <label className="login__label login__label-margin">
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
          <button className="login__button">Войти</button>
          <p className="login__caption">Ещё не зарегистрированы?
          <Link to="/signup" className="login__link">Регистрация</Link></p>
          </div>
            </div>
  )
  }
export default Login;