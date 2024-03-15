import "./SearchForm.css";
import SwitchCheckbox from "../SwitchCheckbox/SwitchCheckbox"
import useFormWithValidation from '../../hooks/useFormWithValidation';


const SearchForm = ({
  onSearch,
  onShortFilmChange,
  shortFilm,
  searchQuery = '',
}) => {

  const { values, handleChange } = useFormWithValidation({
    search: searchQuery,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(values.search);
  };

  const handleShortFilmToggle = (e) => {
    onShortFilmChange(e.target.checked);
  };


  return (
            <>
            <form  className="search__form"
              onSubmit={handleSubmit}>
                <div className="search">
                    <input type="text" 
                    placeholder="Фильм" 
                    name="search"
                    className="search__input"
                    autoComplete="off"
                    value={values.search || ''}
                    onChange={handleChange} />
                    <button className="search__button" type="submit"></button>
                    <span className="search__error"></span>
                    </div>
           <SwitchCheckbox 
           isChecked={shortFilm}
          onCheckboxChange={handleShortFilmToggle}
          />
           </form>
           </>
          
  );
};

export default SearchForm;