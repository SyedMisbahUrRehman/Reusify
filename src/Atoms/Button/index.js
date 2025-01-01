import React from 'react';
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';
import styles from './Button.module.css';

const Button = ({
  label,
  onClick,
  variant = 'primary',
  disabled = false,
  type = 'button',
  customStyle = {},
  iconLeft,
  iconRight
}) => {
  const buttonClass = `${styles.button} ${styles[variant]}`;

  return (
    <button
      className={buttonClass}
      onClick={onClick}
      disabled={disabled}
      type={type}
      style={customStyle}
    >
      {iconLeft && <span className={styles.iconLeft}>{iconLeft}</span>}
      
      {label}

      {iconRight && <span className={styles.iconRight}>{iconRight}</span>}
    </button>
  );
};

export default Button;
