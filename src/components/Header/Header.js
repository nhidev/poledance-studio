import React, { useEffect, useRef } from "react";
import styles from "./Header.module.scss";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import SwiperSlider from "./SwiperSlider";

const Header = () => {
  const { t } = useTranslation("footer");
  const router = useRouter();
  const { locale } = router;
  const iconMenuRef = useRef(null);
  const mainNavRef = useRef(null);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", () => handleScroll);
    };
  }, []);

  const handleScroll = () => {
    const iconMenu = iconMenuRef.current;
    window.onscroll = function () {
      if (window.pageYOffset >= 90) {
        iconMenu.classList.add(styles.sticky);
      } else {
        iconMenu.classList.remove(styles.sticky);
      }
    };
  };

  const openMenu = () => {
    const iconMenu = iconMenuRef.current;
    const menuOverlay = mainNavRef.current;
    
    if (iconMenu.classList.contains(styles["icon-open"])) {
      menuOverlay.classList.add(styles["menu-close"]);
      iconMenu.classList.remove(styles["icon-open"]);
      document.querySelector("body").classList.remove("no-scroll");
      iconMenu.classList.remove(styles["sticky"]);

      setTimeout(function () {
        menuOverlay.classList.remove(styles["menu-open"]);
      }, 800);
      setTimeout(function () {
        menuOverlay.classList.remove(styles["menu-close"]);
      }, 900);
    } else {
      menuOverlay.classList.remove(styles["menu-close"]);
      menuOverlay.classList.add(styles["menu-open"]);
      iconMenu.classList.add(styles["icon-open"]);
      document.querySelector("body").classList.add("no-scroll");

      setTimeout(function () {
        iconMenu.classList.remove(styles["sticky"]);
      }, 500);
    }
  };

  return (
    <>
      <nav className={styles["nav"]}>
        <i className={styles["icon-menu"]} ref={iconMenuRef} onClick={openMenu}>
          {" "}
          <span></span>
        </i>
        <div className={styles["main-nav"]} ref={mainNavRef}>
          <div className={styles.menu}>
            <div className={styles["menu-items"]}>
              <a
                href="https://www.facebook.com/pg/angeleouenpoudre/about"
                className={styles.item}
                target="_blank"
              >
                about
              </a>
              <a
                href="https://www.facebook.com/pg/angeleouenpoudre/events"
                className={styles.item}
                target="_blank"
              >
                tour
              </a>
              <a
                href="https://www.facebook.com/pg/angeleouenpoudre/shop"
                className={styles.item}
                target="_blank"
              >
                shop
              </a>
              <a
                href="https://www.facebook.com/pg/angeleouenpoudre/about"
                className={styles.item}
                target="_blank"
              >
                contacts
              </a>
            </div>
          </div>
        </div>
      </nav>
      <SwiperSlider />
    </>
  );
};

export default Header;
