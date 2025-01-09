import React from "react";
import styles from "./Card.module.css";
import { MdVerified } from "react-icons/md";

const Card = ({ data }) => {
  return (  
    <div className={styles.card}>
        <span style={{display:"flex", alignItems:"baseline",justifyContent:"center", gap:"8px"}}>
      <h2>{data.name}</h2>
        {data.isVerified && <MdVerified color="blue"/>}
        </span>

      <p>Age: {data.age}</p>
      <p>City: {data.city}</p>
    </div>
  );
};

export default Card;
