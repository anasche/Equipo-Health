import React, { useState } from "react";
import styles from "./header.module.scss";
import { useHeader } from "./useHeader";
import { Button, Offcanvas } from "react-bootstrap";
import { CgMenuLeftAlt } from "react-icons/cg";

function Header() {
  const [showMenu, setShowMenu] = useState(false);
  const { handleGoogleLogin } = useHeader();
  return (
    <header className={`${styles.header} mx-2 md:mx-8`}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <img
            src="/logo-homepage.svg"
            alt="Company Logo"
            className={styles.logo_img}
          />
        </div>
        <nav id="navbar-nav" className={`${styles.nav} hidden md:flex`}>
          <a className={`${styles.nav_item} ${styles.active}`} href="#home">
            Home
          </a>
          <a className={`${styles.nav_item}`}>Features</a>
          <a className={`${styles.nav_item}`}>Pricing</a>
          <a className={`${styles.nav_item}`}>Blog</a>
          <a className={`${styles.nav_item}`}>Resource</a>
        </nav>
        <button
          className={`${styles.signin} ml-auto md:ml-0`}
          onClick={handleGoogleLogin}
        >
          Sign In
        </button>
        <div className="md:hidden">
          <Button
            className="!bg-transparent !p-0 !border-none"
            onClick={() => setShowMenu(true)}
          >
            <CgMenuLeftAlt className="text-black h-8 w-8" />
          </Button>
          <Offcanvas
            show={showMenu}
            onHide={() => setShowMenu(false)}
            placement="end"
            className="!w-2/3 !bg-[#f1f1f1]"
          >
            <Offcanvas.Header closeButton />
            <nav className={`${styles.nav} flex flex-col *:!rounded-none `}>
              <a className={`${styles.nav_item} ${styles.active}`} href="#home">
                Home
              </a>
              <a className={`${styles.nav_item}`} href="#features">
                Features
              </a>
              <a className={`${styles.nav_item}`} href="#pricing">
                Pricing
              </a>
              <a className={`${styles.nav_item}`} href="#blog">
                Blog
              </a>
              <a className={`${styles.nav_item}`} href="#resource">
                Resource
              </a>
            </nav>
          </Offcanvas>
        </div>
      </div>
    </header>
  );
}

export default Header;
