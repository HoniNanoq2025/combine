import React from "react";
import styles from './Form.module.css'

export default function Form(){
    return (
      <div className={styles.container}>
        <form className={styles.form}>
          <label htmlFor="name">name</label>
          <input type="text" name="name" id="name" className={styles.input} />

          <label htmlFor="description">description</label>
          <input type="text" name="description" id="description" className={styles.input} />

          <button type="submit" className={styles.btn}>
            send data
          </button>

        </form>

        


      </div>
    );

}