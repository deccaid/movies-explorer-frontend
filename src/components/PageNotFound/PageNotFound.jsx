import "./PageNotFound.css";

const PageNotFound  = ({ onReturn }) => {

  return (
    <div>
   <div className="error">
    <div className="error__block">
    <p className="error__title">404</p>
    <p className="error__subtitle">Страница не найдена</p>
    </div>
   </div>
   <p className="error__text"  onClick={onReturn}>Назад</p>
   </div>
  );
};

export default PageNotFound ;