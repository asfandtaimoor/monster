import React from 'react';
import './search-box.style.css';
import PropTypes from 'prop-types';

export const SearchBox = ({ placeholder , handleChange }) => (
    <input 
    className="search"
     type="search" 
     placeholder={placeholder} 
     onChange={handleChange}
    />
)


SearchBox.propTypes = {
    placeholder: PropTypes.string,
    handleChange: PropTypes.any
  };