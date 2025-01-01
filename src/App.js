import React from 'react';
import Button from './Atoms/Button';
import styles from './App.module.css';

const App = () => {
  const handleClick = () => {
    alert('Button clicked!');
  };

  return (
    <div>
      <Button
        label="Primary Button" 
        onClick={handleClick} 
        variant="primary" 
      />
      <p className="fs-18 fw-700">Hello</p>
      <Button 
        label="Custom Styled Secondary Button" 
        onClick={handleClick} 
        variant="secondary" 
        customStyle={{ backgroundColor: '#8e44ad', color: 'white', padding: '12px 24px', fontSize: '16px' }} 
      />
      
     
      <Button 
        label="Disabled Danger Button" 
        onClick={handleClick} 
        variant="danger" 
        disabled 
      />
      
      
      <Button 
        label="Large Custom Styled Button" 
        onClick={handleClick} 
        customStyle={{ fontSize: '20px', padding: '16px 32px', backgroundColor: '#f39c12' }} 
      />
    </div>
  );
};

export default App;
