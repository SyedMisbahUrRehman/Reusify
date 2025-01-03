import React from 'react';
import SearchBar from './Molecules/SearchBar/index'; 
import styles from './App.module.css'; 
const App = () => {
  const handleSearch = (query) => {
    console.log('Searching for:', query);
  };

  return (
    <div className={styles.appContainer}>
      <h1 className={styles.title}>My Search App</h1>
      <SearchBar onSearch={handleSearch} />
    </div>
  );
};

export default App;