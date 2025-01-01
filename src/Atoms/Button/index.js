import React from 'react';
import styles from './Button.module.css';

const Button = ({ label, onClick, variant = 'primary', disabled = false, type = 'button', customStyle = {} }) => {
  const buttonClass = `${styles.button} ${styles[variant]}`;

  return (
    <button 
      className={buttonClass} 
      onClick={onClick} 
      disabled={disabled} 
      type={type} 
      style={customStyle}
    >
      {label}
    </button>
  );
};

export default Button;
