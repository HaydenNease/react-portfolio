import React from "react";
import './style.css';
import bottomImg from "../../../public/bottom.png"

export default function Footer() {
  return (
    <footer style={{ backgroundImage: `url(${bottomImg})` }}>
      <h2>Footer</h2>
    </footer>
  )
};