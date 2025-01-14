import styles from './SearchBar.module.css';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {getPetByName } from '../../redux/actions'






const SearchBar = () => {
  const dispatch = useDispatch();
  const [nombre, setNombre] = useState('');

  const handleInputChange = (event) => {
    setNombre(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(getPetByName(nombre)); 
    
  };

  return (
    <form className={styles.searchForm} onSubmit={handleSubmit}>
      <input type="text"
        className={styles.searchInput}
        placeholder="Buscar raza de perro..."
        value={nombre}
        onChange={handleInputChange}
      />
      <button type="submit"  className={styles.submitButton} disabled={!nombre}>Buscar</button>
    </form>
  );
};

export default SearchBar;
