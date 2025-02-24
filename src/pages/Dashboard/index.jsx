import React from "react";
import styles from "./Dashboard.module.css";

export default function Dashboard() {
    return (
        <div className={styles.container}>
        <h1 className={styles.heading}>Dashboard</h1>
        <p className={styles.text}>
            This is a dashboard page. You can add your components here.
        </p>
        </div>
    );
    }