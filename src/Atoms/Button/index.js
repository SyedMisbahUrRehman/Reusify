import React from 'react';
import styles from './Button.module.css';
import { mergeClass } from '../../utils/mergeClass';

const Button = ({
  label,
  onClick,
  variant,
  disabled = false,
  type = 'button',
  customClass,
  customStyle,
  iconLeft,
  iconRight
}) => {

  const combinedClasses = mergeClass(customClass, styles.button, styles[variant]);
  return (
    <button
      className={combinedClasses}
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
