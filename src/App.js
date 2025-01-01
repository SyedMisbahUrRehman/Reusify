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
      
      {/* Example of maxLine classes applied */}
      <p className="fs-18 fw-700 maxLine2">
        This is a long paragraph, and it should display only two lines of text. The rest will be truncated.        This is a long paragraph, and it should display only two lines of text. The rest will be truncated.
        This is a long paragraph, and it should display only two lines of text. The rest will be truncated.        This is a long paragraph, and it should display only two lines of text. The rest will be truncated.
        This is a long paragraph, and it should display only two lines of text. The rest will be truncated.
        This is a long paragraph, and it should display only two lines of text. The rest will be truncated.


      </p>

      <Button 
        label="Custom Styled Secondary Button" 
        onClick={handleClick} 
        variant="secondary" 
        customStyle={{ backgroundColor: '#8e44ad', color: 'white', padding: '12px 24px', fontSize: '16px' }} 
      />
      

    

    </div>
  );
};

export default App;
