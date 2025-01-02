import React from 'react';
import Button from './Atoms/Button';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const App = () => {
  const handleClick = () => {
    alert('Button clicked!');
  };

  return (
    <div style={{display:'flex',gap:"10px",justifyContent:'center',alignItems:'center'}}>
      {/* Button with an icon on the left */}
      <Button
        label="Previous"
        onClick={handleClick}
        variant="danger"
        iconLeft={<FaArrowLeft />}
      />
      
      {/* Button with an icon on the right */}
      <Button
        label="Next"
        onClick={handleClick}
        variant="primary"
        iconRight={<FaArrowRight />} 
      />
      <p className='fs-18 fw-700'>Helooooo</p>
      
    </div>
  );
};

export default App;
