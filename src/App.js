import React from 'react';
import Button from './Atoms/Button';

const App = () => {
  const handleClick = () => {
    alert('Button clicked!');
  };

  return (
    <div>
      {/* Default Button with Primary Variant */}
      <Button
        label="Primary Button" 
        onClick={handleClick} 
        variant="primary" 
      />
      
      {/* Secondary Button with custom inline style */}
      <Button 
        label="Custom Styled Secondary Button" 
        onClick={handleClick} 
        variant="secondary" 
        customStyle={{ backgroundColor: '#8e44ad', color: 'white', padding: '12px 24px', fontSize: '16px' }} 
      />
      
      {/* Danger Button with Disabled State */}
      <Button 
        label="Disabled Danger Button" 
        onClick={handleClick} 
        variant="danger" 
        disabled 
      />
      
      {/* A Large Button with Custom Style */}
      <Button 
        label="Large Custom Styled Button" 
        onClick={handleClick} 
        customStyle={{ fontSize: '20px', padding: '16px 32px', backgroundColor: '#f39c12' }} 
      />
    </div>
  );
};

export default App;
