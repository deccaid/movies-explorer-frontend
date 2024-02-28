import "./Footer.css";

const Footer = () => {

  return (
            <div className="container-movies">
                <section className="footer">
               <h4 className="footer__title">Учебный проект Яндекс.Практикум х BeatFilm.</h4>
               <div className="footer__block">
                <p className="footer__text">© 2020</p>
                <div className="footer__links">
                    <a className="footer__link" href="https://practicum.yandex.ru/">Яндекс.Практикум</a>
                    <a className="footer__link" href="https://github.com/">Github</a>
                </div>
               </div>
               </section>
            </div>
  );
};

export default Footer;