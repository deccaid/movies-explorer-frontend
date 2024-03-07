import "./AboutMe.css";
import Img from '../../images/msg1010230686-471495.jpg'

const AboutMe = () => {

  return (
            <div className="container">
            <section className="info" id='aboutMe'>
            <h2 className="techs__name">
            Студент
            </h2>
            <div className="info__container">
              <div className="info-block">
                <h3 className="info__title">Илья</h3>
                <h4 className="info__subtitle">Фронтенд-разработчик, 20 лет</h4>
                <p className="info__text">Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена 
и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ Контур». После того, как прошёл курс по веб-разработке, начал заниматься фриланс-заказами и ушёл с постоянной работы.</p>
              <p className="info__caption">Github</p>
              </div>
              <img className="info__img" src={Img} alt="Аватарка"/>
            </div>
            </section>
            </div>
  );
};

export default AboutMe;