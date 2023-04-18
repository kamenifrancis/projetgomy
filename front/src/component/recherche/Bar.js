import React, { useState } from 'react';
import SearchButton from './SearchButton';
import './recherche.css'
const SearchBar=()=> {
    const [searchValue, setSearchValue] = useState('');
  
    const handleSearchChange = (event) => {
      setSearchValue(event.target.value);
    };
  
    const handleSearchClick = () => {
      console.log(`Recherche pour ${searchValue}`);
      // Ajouter ici la logique de recherche
    };
  
    return (
      <div>
        <input className='search' type="text" value={searchValue} onChange={handleSearchChange} />
        <SearchButton onClick={handleSearchClick} />
      </div>
    );
  }
  
  export default SearchBar;


