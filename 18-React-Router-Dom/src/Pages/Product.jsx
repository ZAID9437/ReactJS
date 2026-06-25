import React from "react";
import { useParams } from "react-router-dom";

const products = {
  iphone15: {
    name: "iPhone 15 Pro",
    price: "₹1,29,900",
    image:
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500",
    description:
      "The iPhone 15 Pro features a titanium design, A17 Pro chip, advanced camera system, and all-day battery life.",
  },
  airpods: {
    name: "AirPods Pro",
    price: "₹24,900",
    image:
      "https://images.unsplash.com/photo-1518449041791-5c3b5efb2c0a?w=500",
    description:
      "AirPods Pro include active noise cancellation, transparency mode, and a customizable fit for all-day comfort.",
  },
};

function ProductPage() {
  const { productId } = useParams();
  const product = products[productId] || products.iphone15;

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <img src={product.image} alt={product.name} style={styles.image} />

        <div style={styles.content}>
          <h4>{product.name}</h4>
          <h2 style={styles.price}>{product.price}</h2>

          <p style={styles.description}>{product.description}</p>

          <button style={styles.button}>Add to Cart</button>
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
    background: "#f5f5f5",
  },
  card: {
    display: "flex",
    maxWidth: "900px",
    background: "#fff",
    borderRadius: "10px",
    overflow: "hidden",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
  },
  image: {
    width: "400px",
    objectFit: "cover",
  },
  content: {
    padding: "30px",
    flex: 1,
  },
  price: {
    color: "#28a745",
    marginBottom: "15px",
  },
  description: {
    color: "#666",
    lineHeight: "1.6",
  },
  button: {
    marginTop: "20px",
    padding: "12px 25px",
    background: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "16px",
  },
};

export default ProductPage;