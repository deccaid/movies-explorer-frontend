import "./Promo.css";

const Promo = ({ isLoggedIn }) => {

  return (   
   <section className="promo">
    <h1 className="promo__title">Учебный проект студента факультета Веб-разработки.</h1>
    <div className="promo__blocks">
        <a className="promo__block" href="#aboutProject">
            <p className="promo__text">О проекте</p>
        </a>
        <a className="promo__block" href="#techs">
            <p className="promo__text">Технологии</p>
        </a>
        <a className="promo__block" href="#aboutMe">
            <p className="promo__text">Студент</p>
        </a>
    </div>
   </section>
  );
};

export default Promo;