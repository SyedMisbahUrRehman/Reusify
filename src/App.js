import React from 'react';
import styles from './App.module.css'; 
import Button from './Atoms/Button';
import { FaIceCream } from 'react-icons/fa';

const App = () => {
  return (
    <div className={styles.appContainer}>
      <Button label="Custom Class aaaaaaaaaaaaaaaaa b d" customClass={styles.mybtn} iconRight={<FaIceCream/>}/>
      <Button
        label="Inline Styles"
        customStyle={{ backgroundColor: "orange", color: "white", margin:"10px" }}
      />
    </div>
  );
};

export default App;
