import React from "react";
import Form from "../../components/Form/Form";
import styles from "./Home.module.css";

export default function Home() {
  return (
    <div className={styles.pageContainer}>
      <Form />
    </div>
  );
}
