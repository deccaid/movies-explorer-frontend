import "./Techs.css";

const Techs = () => {

  return (
        <section className="techs" id="techs">
            <div className="container">
            <h2 className="techs__name">
            Технологии
            </h2>
            <h3 className="techs__title">7 технологий</h3>
            <p className="techs__subtitle">На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
            <ul className="techs__blocks">
                <li className="techs__block">
                    <p className="techs__text">HTML</p>
                </li>
                <li className="techs__block">
                    <p className="techs__text">CSS</p>
                </li>
                <li className="techs__block">
                    <p className="techs__text">JS</p>
                </li>
                <li className="techs__block">
                    <p className="techs__text">React</p>
                </li>
                <li className="techs__block">
                    <p className="techs__text">Git</p>
                </li>
                <li className="techs__block">
                    <p className="techs__text">Express.js</p>
                </li>
                <li className="techs__block">
                    <p className="techs__text">mongoDB</p>
                </li>
            </ul>
            </div>
        </section>
  );
};

export default Techs;