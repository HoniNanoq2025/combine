import React, { useState, useEffect } from "react";
import styles from "./ItemDetails.module.css";

export default function ItemDetails({ itemId, onDelete }) {
  const [item, setItem] = useState(null);
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  //Hent item data når komponent loader
  useEffect(() => {
    fetchItem();
  }, [itemId]);

  const fetchItem = async () => {
    try {
      const response = await fetch(`http://localhost:3000/items/${itemId}`);
      if (!response.ok) throw new Error("Item ikke fundet");

      const data = await response.json();
      setItem(data);
      setName(data.name);
      setAge(data.age || "");
      setDescription(data.description);
      setLoading(false);
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };

  //UPDATE: send PUT request
  const handleUpdate = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`http://localhost:3000/items${itemId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, age, description }),
      });

      const updatedItem = await response.json();
      setItem(updatedItem);
      console.log("Item opdateret:", updatedItem);
    } catch (err) {
      console.error("Fejl ved opdatering:", err);
      alert("Kunne ikke opdatere item");
    }
  };

  // DELETE: Send DELETE request
  const handleDelete = async () => {
    if (!confirm("Er du sikker på at du vil slette dette item?")) return;

    try {
      const response = await fetch(`http://localhost:3000/items/${itemId}`, {
        method: "DELETE",
      });

      const result = await response.json();
      console.log("Item slettet:", result);
      alert("Item slettet!");

      //Kald callcback function hvis den findes
      if (onDelete) onDelete(itemId);
    } catch (error) {
      console.error("Fejl ved sletning:", error);
      alert("Kunne ikke slette item");
    }
  };

  if (loading) return <p className={styles.loading}>Loader...</p>;
  if (error) return <p className={styles.error}>Fejl: {error}</p>;
  if (!item) return <p className={styles.error}>Item ikke fundet!</p>;

  return (
    <div className={styles.container}>
      <h2>Item Details</h2>
      <div className={styles.details}>
        <div className={styles.detailRow}>
          <span className={styles.label}>ID:</span>
          <span className={styles.value}>{item.id}</span>
        </div>
        <div className={styles.detailRow}>
          <span className={styles.label}>Name:</span>
          <span className={styles.value}>{item.name}</span>
        </div>
        <div className={styles.detailRow}>
          <span className={styles.label}>Description:</span>
          <span className={styles.value}>{item.description}</span>
        </div>
        {item.age && (
          <div className={styles.detailRow}>
            <span className={styles.label}>Age:</span>
            <span className={styles.value}>{item.age}</span>
          </div>
        )}
      </div>

      <h3>Edit Item</h3>

      <form className={styles.form} onSubmit={handleUpdate}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          className={styles.input}
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <label htmlFor="description">Description</label>
        <input
          type="text"
          id="description"
          className={styles.input}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />

        <label htmlFor="age">Age</label>
        <input
          type="number"
          id="age"
          className={styles.input}
          value={age}
          onChange={(e) => setAge(e.target.value)}
          min="0"
        />

        <div className={styles.buttonGroup}>
          <button type="submit" className={styles.updateBtn}>
            Update Item
          </button>

          <button
            type="button"
            className={styles.deleteBtn}
            onClick={handleDelete}
          >
            Delete Item
          </button>
        </div>
      </form>
    </div>
  );
}
