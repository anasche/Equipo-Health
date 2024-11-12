// src/components/Header.js
import React from "react";
import "./Header.css";
import { useHeader } from "./useHeader";

function Header() {

  const {handleGoogleLogin}=useHeader()
  return (
    <header className="header">
      <div className="logo">Coca</div>
      <nav>
        <a href="#home">Home</a>
        <a href="#features">Features</a>
        <a href="#pricing">Pricing</a>
        <a href="#blog">Blog</a>
        <a href="#resource">Resource</a>
      </nav>
      <button className="sign-in-button" onClick={handleGoogleLogin}>Sign In</button>
    </header>
  );
}

export default Header;
