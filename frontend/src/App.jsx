import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import ItemDetailPage from "./pages/ItemDetailPage/ItemDetailPage";
import styles from "./App.module.css";

export default function App() {
  return (
    <Router>
      <div className={styles.app}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/items/:id" element={<ItemDetailPage />} />
        </Routes>
      </div>
    </Router>
  );
}
