import "./Profile.css";
import useFormWithValidation from "../../hooks/useFormWithValidation";
import { useContext, useState } from "react";
import CurrentUserContext from "../../contexts/CurrentUserContext";

const Profile = ({ onLogOut, updateUser }) => {
  const currentUser = useContext(CurrentUserContext);

  const handleLogOut = () => {
    onLogOut();
  };
  
  const { values, handleChange, errors, isValid } = useFormWithValidation({
    name: currentUser.name,
    email: currentUser.email,
  });
  const [isErrorSending, setIsErrorSending] = useState();
  const [isDoneSending1, setIsDoneSending] = useState();
  const [isEditProfile, setIsEditProfile] = useState(false);
  const [isRequesting, setIsRequesting] = useState(false);

  const openEditProfile = (e) => {
    e.preventDefault();
    setIsEditProfile(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsRequesting(true);
    updateUser(values, setIsErrorSending, setIsDoneSending, localStorage.getItem('jwt'))
    .then(() => {
      setIsEditProfile(false);
    })
    .finally(() => {
      setIsRequesting(false);
    });
  };

  const requirementValidity =
    !isValid ||
    (currentUser.name === values.name && currentUser.email === values.email);

  return (
    <div className="profile">
      <form className="profile__form" onSubmit={handleSubmit}>
        <div className="profile__container">
          <h1 className="profile__title">Привет, {values.name}!</h1>
          <label className="profile__label">
            <span className="profile__span">Имя</span>
            <input
               className={`profile__input ${
                errors.name && 'profile__input_error'
              }`}
              name="name"
              type="text"
              required
              minLength="2"
              maxLength="30"
              disabled={!isEditProfile}
              placeholder="Имя"
              onChange={handleChange}
              value={values.name}
            />
            
          </label>
          <span className="profile__error profile__error-name ">{errors.name || ''}</span>
          <label className="profile__label">
            <span className="profile__span">E-mail</span>
            <input
               className={`profile__input ${
                errors.email && 'profile__input_error'
              }`}
              name="email"
              type="email"
              required
              placeholder="Email"
              disabled={!isEditProfile}
              onChange={handleChange}
              value={values.email}
            />
             
          </label>
          <span className="profile__error">{errors.email || ''}</span>
          {!isEditProfile ? (
            <div>
               {isErrorSending && (
              <p className="profile__error">
                При обновлении профиля произошла ошибка.
              </p>
            )}
             {isDoneSending1 && (
              <p className="profile__error profile__done">
                Данные успешно изменены
              </p>
            )}
              <button className="profile__button" onClick={openEditProfile}>
                Редактировать
              </button>
              <button
                className="profile__link"
                to="/signin"
                onClick={handleLogOut}
              >
                Выйти из аккаунта
              </button>
            </div>
          ) : (
            <div className="profile__button-container">
              <button
                type="submit"
                className="profile__button-save"
                disabled={requirementValidity || isRequesting}
              >
                Сохранить
              </button>
            </div>
          )}
        </div>
      </form>
    </div>
  );
};
export default Profile;
