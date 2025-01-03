import React, { useState } from 'react';
import styles from './SearchBar.module.css';
import Button from '../../Atoms/Button/index';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSearch = () => {
    if (onSearch) {
      onSearch(query);
    }
    setQuery('');
  };

  return (
    <div className={styles.searchBar}>
      <input
        type="text"
        value={query}
        onChange={handleInputChange}
        placeholder="Search..."
        className={styles.input}
      />
      <Button
        label="🔍"
        onClick={handleSearch}
        variant="primary"
      />
    </div>
  );
};

export default SearchBar;