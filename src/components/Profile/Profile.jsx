import './Profile.css';
import { Link } from "react-router-dom";

const Profile  = () => {

  return (   
   <div className="profile">
    <div className='profile__container'>
    <h1 className="profile__title">Привет, Виталий!</h1>
    <form className="profile__form">
    <label className="profile__label">
          <span className="profile__span">Имя</span>
          <input
            className="profile__input"
            name="name"
            type="text"
            required
            disabled
            minLength="2"
            maxLength="30"
            placeholder="Имя"
            value="Виталий"
          />
        </label>
        <label className="profile__label">
          <span className="profile__span">E-mail</span>
          <input
            className="profile__input"
            name="email"
            type="email"
            required
            disabled
            placeholder="Email"
            value="pochta@yandex.ru"
          />
        </label>
        <button className="profile__button">Редактировать</button>
    </form>
    <Link className="profile__link" to="/signin">Выйти из аккаунта</Link>
    </div>
   </div>
  )
  }
export default Profile ;