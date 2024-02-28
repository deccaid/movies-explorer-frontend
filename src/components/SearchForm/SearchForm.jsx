import "./SearchForm.css";
import SwitchCheckbox from "../SwitchCheckbox/SwitchCheckbox"

const SearchForm = () => {

  return (
            <>
                <div className="search">
                    <input type="text" placeholder="Фильм" className="search__input"/>
                    <button className="search__button"></button>
                    </div>
           <SwitchCheckbox/>
           </>
          
  );
};

export default SearchForm;