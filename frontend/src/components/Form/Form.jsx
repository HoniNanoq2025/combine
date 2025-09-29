import React, { useState } from "react";
import styles from "./Form.module.css";

export default function Form() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:3000/items", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, description }),
      });

      const data = await response.json();
      console.log("Item oprettet", data);

      //Nulstil form
      setName("");
      setDescription("");
    } catch (error) {
      console.error("Fejl", error);
    }
  };
  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <label htmlFor="name">name</label>
        <input
          type="text"
          name="name"
          id="name"
          className={styles.input}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <label htmlFor="description">description</label>
        <input
          type="text"
          name="description"
          id="description"
          className={styles.input}
          value={name}
          onChange={(e) => setDescription(e.target.value)}
        />

        <button type="submit" className={styles.btn}>
          send data
        </button>
      </form>
    </div>
  );
}
