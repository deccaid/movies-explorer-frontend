import "./Portfolio.css";
import Icon from '../../images/text__COLOR_font-main.svg'

const Portfolio = () => {

  return (
            <div className="container">
                <div className="portfolio">
                    <h2 className="portfolio__title">Портфолио</h2>
                    <ul className="portfolio__blocks">
                      
                        <a href="https://github.com/deccaid"  target="_blank" className="portfolio__block">
                            <p className="portfolio__text">Статичный сайт</p>
                            <img className="portfolio__icon" src={Icon} alt="Иконка стрелки"/>
                        </a>
                      
                      
                        <a href='https://github.com/deccaid'  target="_blank" className="portfolio__block">
                            <p className="portfolio__text">Адаптивный сайт</p>
                            <img className="portfolio__icon" src={Icon} alt="Иконка стрелки"/>
                        </a>
                     
                      
                        <a href="https://github.com/deccaid"  target="_blank"  className="portfolio__block">
                            <p className="portfolio__text">Одностраничное приложение</p>
                            <img className="portfolio__icon" src={Icon} alt="Иконка стрелки"/>
                        </a>
                      
                    </ul>
                </div>
            </div>
  );
};

export default Portfolio;