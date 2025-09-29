import React from "react";
import { useParams } from "react-router-dom";
import ItemDetails from "../../components/ItemDetails/ItemDetails";
import styles from "./ItemDetailPage.module.css";

export default function ItemDetailPage() {
  const { id } = useParams();

  return (
    <ItemDetails
      itemId={parseInt(id)}
      onDelete={() => {
        // Naviger tilbage efter sletning
        window.location.href = "/";
      }}
    />
  );
}
