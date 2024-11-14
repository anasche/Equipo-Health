


import React from "react";
import styles from "./header.module.scss";
import { useHeader } from "./useHeader";

function Header() {

  const {handleGoogleLogin}=useHeader()
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo}>
        <img src="/logo-homepage.svg" alt="Company Logo" className={styles.logo_img} />
        </div>
        <nav className={styles.nav}>
          <a className={`${styles.nav_item} ${styles.active}`} href="#home">Home</a>
          <a className={`${styles.nav_item}`} href="#features">Features</a>
          <a className={`${styles.nav_item}`} href="#pricing">Pricing</a>
          <a className={`${styles.nav_item}`} href="#blog">Blog</a>
          <a className={`${styles.nav_item}`} href="#resource">Resource</a>
        </nav>
        <button className={styles.signin} onClick={handleGoogleLogin}>Sign In</button>
      </div>
    </header>
  );
}

export default Header;