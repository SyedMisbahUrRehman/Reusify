import React from 'react';
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
      
      <span className='fs-14 fw-600'>{label}</span>

      {iconRight && <span className={styles.iconRight}>{iconRight}</span>}
    </button>
  );
};

export default Button;
