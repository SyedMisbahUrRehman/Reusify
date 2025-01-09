import React from "react";
import styles from "./Card.module.css";
import { MdVerified } from "react-icons/md";

const Card = ({ data: { name, city, isVerified, isOrganisation } }) => {
  return (
    <div className={styles.card}>
      <div className={styles.nameWrapper}>
        <span className={styles.name}>{name}</span>
        {isVerified && (
          <MdVerified color={isOrganisation ? "gold" : "blue"} size={20} />
        )}
      </div>
      <p className={styles.city}>City: {city}</p>
    </div>
  );
};

export default Card;
  