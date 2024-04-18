// import "./SearchForm.css";
// import SwitchCheckbox from "../SwitchCheckbox/SwitchCheckbox"

// import { useState, useEffect } from 'react';
// import { useLocation } from 'react-router-dom';


// const SearchForm = ({
//   setSearchInputValue,
//   searchInputValue,
//   setIsLoading,
//   isShortFilm,
//   savedMovies,
//   setSavedMovies,
//   onShortFilmChange,
// }) => {
//   const location = useLocation();
//   const [error, setError] = useState('');  
//   const [textInput, setTextInput] = useState(searchInputValue);
  
//   const handleSearchSubmit = (e) => {
//     e.preventDefault();
//     try {
//       setIsLoading(true);     
//       if (location.pathname === '/movies') {
//         localStorage.setItem('searchInputValue', textInput);
//       } else {
//         localStorage.setItem('searchSavedInputValue', textInput);
//       }
//       setSearchInputValue(textInput);      
//       if (savedMovies.length === 0 && location.pathname === '/saved-movies') {
//           setError('У Вас нет сохраненных фильмов');
//         } else {
//           if (!textInput) {
//              setError('Введите название');
//           } else {
//           setError('');
//         }       
//       }              
//     } catch (e) {
//       console.error(e?.reason || e?.message);
//       setIsLoading(false);
//     } finally {
//       setIsLoading(false);
//     }    
//   };

//   useEffect(() => {
//     location.pathname === '/saved-movies' && !searchInputValue
//       ? setSearchInputValue(localStorage.getItem('searchSavedInputValue') || '')
//       : setSearchInputValue('') && setSavedMovies(localStorage.getItem('allSavedMovies', savedMovies));
//     return () => {
//       setSearchInputValue('');
//     };
//   }, [location.pathname]);

//   useEffect(() => {
//     location.pathname === '/movies'
//       ? setSearchInputValue(localStorage.getItem('searchInputValue') || '')
//       : setSearchInputValue('') && setSavedMovies(localStorage.getItem('allSavedMovies', savedMovies));
//     return () => {
//       setSearchInputValue('');
//     };
//   }, [location.pathname]);
  
//   const handleInputChange = (e) => {
//     setTextInput(e.target.value);
//   };

//   useEffect(() => {
//     setTextInput(searchInputValue);
//   }, [searchInputValue]);
//   const handleShortFilmToggle = (e) => {
//     onShortFilmChange(e.target.checked);
//   };


//   return (
//             <>
//             <form  className="search__form"
//              onSubmit={(e) => handleSearchSubmit(e)}>
//                 <div className="search">
//                     <input type="text" 
//                     placeholder="Фильм" 
//                     name="search"
//                     className="search__input"
//                     autoComplete="off"
//                     value={textInput}
//                     onChange={(e) => handleInputChange(e)}/>
//                     <button className="search__button" type="submit"></button>
//                     <span className="search__error"></span>
//                     </div>
//            <SwitchCheckbox 
//           isChecked={isShortFilm}
//           onCheckboxChange={handleShortFilmToggle}
//           />
//            </form>
//            </>
          
//   );
// };

// export default SearchForm;
import "./SearchForm.css";
import SwitchCheckbox from "../SwitchCheckbox/SwitchCheckbox"

import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';


const SearchForm = ({
  setSearchInputValue,
  searchInputValue,
  setIsLoading,
  isShortFilm,
  savedMovies,
  setSavedMovies,
  onShortFilmChange,
}) => {
  const location = useLocation();
  const [error, setError] = useState('');  
  const [textInput, setTextInput] = useState(searchInputValue);
  
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    try {
      setIsLoading(true);     
      if (location.pathname === '/movies') {
        localStorage.setItem('searchInputValue', textInput);
      } else {
        localStorage.setItem('searchSavedInputValue', textInput);
      }
      setSearchInputValue(textInput);      
      if (savedMovies.length === 0 && location.pathname === '/saved-movies') {
          setError('У Вас нет сохраненных фильмов');
        } else {
          if (!textInput) {
             setError('Введите название');
          } else {
          setError('');
        }       
      }              
    } catch (e) {
      console.error(e?.reason ||  e?.message);
      setIsLoading(false);
    } finally {
      setIsLoading(false);
    }    
  };

  useEffect(() => {
    location.pathname === '/saved-movies' && !searchInputValue
      ? setSearchInputValue(localStorage.getItem('searchSavedInputValue') ||  '')
      : setSearchInputValue('') && setSavedMovies(localStorage.getItem('allSavedMovies', savedMovies));
    return () => {
      setSearchInputValue('');
    };
  }, [location.pathname]);

  useEffect(() => {
    location.pathname === '/movies'
      ? setSearchInputValue(localStorage.getItem('searchInputValue') || '')
      : setSearchInputValue('') && setSavedMovies(localStorage.getItem('allSavedMovies', savedMovies));
    return () => {
      setSearchInputValue('');
    };
  }, [location.pathname]);
  
  const handleInputChange = (e) => {
    setTextInput(e.target.value);
  };
  const handleFormSubmit = (e) => {
    handleSearchSubmit(e);
    handleShortFilmToggle(e);
 };

  useEffect(() => {
    setTextInput(searchInputValue);
  }, [searchInputValue]);
  const handleShortFilmToggle = (e) => {
    const newValue = !isShortFilm; // Инвертируем текущее значение isShortFilm
    onShortFilmChange(newValue);
    setSearchInputValue(textInput);
  };


  return (
            <>
            <form  className="search__form"
             onSubmit={(e) => handleFormSubmit(e)}>
                <div className="search">
                    <input type="text" 
                    placeholder="Фильм" 
                    name="search"
                    className="search__input"
                    autoComplete="off"
                    value={textInput}
                    onChange={(e) => handleInputChange(e)}/>
                    <button className="search__button" type="submit"></button>
                    <span className="search__error"></span>
                    </div>
           <SwitchCheckbox 
          isChecked={isShortFilm}
          onCheckboxChange={handleShortFilmToggle}
          />
           </form>
           </>
          
  );
};

export default SearchForm;