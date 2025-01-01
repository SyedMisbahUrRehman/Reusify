import React from 'react';
import Button from './Atoms/Button';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const App = () => {
  const handleClick = () => {
    alert('Button clicked!');
  };

  return (
    <div>
      {/* Button with an icon on the left */}
      <Button
        label="Previous"
        onClick={handleClick}
        variant="primary"
        iconLeft={<FaArrowLeft />} // Passing icon as a prop
      />
      
      {/* Button with an icon on the right */}
      <Button
        label="Next"
        onClick={handleClick}
        variant="primary"
        iconRight={<FaArrowRight />} // Passing icon as a prop
      />
      
      {/* Button with icons on both sides */}
      <Button
        label="Go"
        onClick={handleClick}
        variant="primary"
        iconLeft={<FaArrowLeft />}
        iconRight={<FaArrowRight />}
      />
    </div>
  );
};

export default App;
