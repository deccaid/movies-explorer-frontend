import "./AboutProject.css";

const AboutProject = () => {

  return (
    <div className="container">
        <section className="about" id="aboutProject">
            <h2 className="about__title">О проекте</h2>
            <div className="about__blocks">
                <div className="about__block">
                    <h3 className="about__subtitle">Дипломный проект включал 5 этапов</h3>
                    <p className="about__text">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
                </div>
                <div className="about__block">
                    <h3 className="about__subtitle">На выполнение диплома ушло 5 недель</h3>
                    <p className="about__text">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
                </div>
            </div>
            <div className="about__line-blocks">
                <div className="about__line-block about__line-block-backend">
                    <p className="about__time-text about__time-text_backend">1 неделя</p>
                    <p className="about__caption">Back-end</p>
                </div>
                <div className="about__line-block">
                    <p className="about__time-text">4 недели</p>
                    <p className="about__caption">Front-end</p>
                </div>
            </div>
        </section>
   </div>
  );
};

export default AboutProject;