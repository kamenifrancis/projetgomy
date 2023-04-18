import React from 'react';
import './recherche.css'
function SearchButton(props) {
  return (
    <button className='cherch' onClick={props.onClick}>
      Rechercher
    </button>
  );
}

export default SearchButton;
