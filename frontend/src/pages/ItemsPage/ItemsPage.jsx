import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./ItemsPage.module.css";

export default function ItemsPage() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchItems = async () => {
      try {
        setLoading(true);
        const response = await fetch("http://localhost:3000/items");
        if (!response.ok) throw new Error("Serveren svarede ikke korrekt");
        const data = await response.json();
        setItems(data);
      } catch (err) {
        console.error("Fejl ved indhentning:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchItems();
  }, []);

  return (
    <div className={styles.container}>
      <h2>Items</h2>
      {loading && <p>Henter items</p>}

      {error && <p>Fejl: {error}</p>}

      {!loading && items.length === 0 && !error && <p>Ingen items fundet...</p>}

      <ul className={styles.itemsList}>
        {items.map((item) => (
          <li key={item.id} className={styles.items}>
            <div>
              <p>
                <strong>{item.name}</strong>, {item.age}
              </p>
              <p>{item.description}</p>
              <button
                onClick={() => navigate(`/items/${item.id}`)}
                className={styles.detailBtn}
              >
                Show details
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
