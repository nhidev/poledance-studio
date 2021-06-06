import styled from "styled-components";
import React, { useEffect, useRef } from "react";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import Link from "next/link";
import { colors } from "../../styles/theme";
import { respondTo } from "../../styles/mixins";
import SwiperSlider from "./SwiperSlider";
// import LanguageSwitcher from "./LanguageSwitcher";

const HeaderStyled = styled.nav`
  .icon-menu {
    width: 48px;
    height: 48px;
    z-index: 5;
    top: 40px;
    right: 40px;
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transition: all 0.6s ease;
    box-shadow: inset 0px 0px 0px 0px rgba(255, 255, 255, 0.1);
    background: transparent;

    ${respondTo.sm`
      top: 10px;
      right: 10px;
    `}

    span {
      display: flex;
      width: 32px;
      height: 2px;
      background-color: white;
      border-radius: 6px;
      display: flex;
      justify-content: center;
      align-items: center;
      transition: all 0.4s 0.2s ease;

      &:before,
      &:after {
        position: absolute;
        width: 32px;
        height: 2px;
        content: "";
        background-color: inherit;
        transform-origin: center;
      }

      &:before {
        transition: all 0.3s ease;
        top: 14px;
      }

      &:after {
        bottom: 14px;
        transition: all 0.3s ease;
      }
    }

    &:hover {
      transition: all 0.6s ease;
      box-shadow: inset 0px 0px 0px 25px rgba(255, 255, 255, 0.2);

      span {
        &:before {
          top: 11px;
        }

        &:after {
          bottom: 11px;
        }
      }

      ${respondTo.sm`
        box-shadow: none;
      `}
    }

    &.icon-open {
      span {
        width: 0;
        transition: all 0.4s 0.2s ease;

        &:before {
          transition: all 0.4s 0.2s ease;
          top: 22px;
          transform: rotate(45deg);
        }

        &:after {
          transition: all 0.4s 0.3s ease;
          bottom: 23px;
          transform: rotate(-45deg);
        }
      }
    }

    &.sticky {
      transition: all 0.6s ease;
      background: ${colors.g01};
      position: fixed;
    }
  }

  .main-nav {
    display: none;

    .menu {
      width: 100vw;
      height: 100vh;
      position: fixed;
      top: 0;
      z-index: 4;
      display: flex;
      justify-content: center;
      align-items: center;

      &:before,
      &:after {
        content: "";
        position: absolute;
        width: 100vw;
        height: 100%;
        top: 0;
        left: 0;
      }

      &:before {
        background-color: white;
        z-index: 2;
        opacity: 0.8;
        box-shadow: 0px 0px 40px rgba(0, 0, 0, 0.2);
      }

      &:after {
        background: ${colors.g01};
        z-index: 3;
      }

      .menu-items {
        z-index: 5;

        .item {
          color: ${colors.m01};
          text-transform: uppercase;
          text-align: center;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 900;
          font-size: 50px;
          line-height: normal;
          letter-spacing: 0.04em;
          color: transparent;
          -webkit-text-stroke: 1px white;
          z-index: 5;
          padding: 10px;
          transition: all 0.4s ease;
          cursor: pointer;
          position: relative;

          ${respondTo.sm`
            font-size: 40px;
          `}

          &:before {
            content: "";
            position: absolute;
            width: 0%;
            height: 60%;
            transition: width 0.6s ease, opacity 2s ease;
            z-index: -1;
            opacity: 0;
            background: ${colors.m01};

            ${respondTo.sm`
              display: none;
            `}
          }

          &:hover {
            color: white;

            ${respondTo.sm`
              color: transparent;
            `}
          }
        }
      }
    }

    &.menu-open {
      display: block;

      .menu {
        &:before {
          animation: menuOpen 1s ease both;
        }

        &:after {
          animation: menuOpen 0.6s 0.3s ease both;
        }

        @keyframes menuOpen {
          0% {
            transform: translateY(-100%);
          }

          100% {
            transform: translateY(0%);
          }
        }

        .menu-items {
          .item {
            animation: itemMenu 0.4s 0.6s ease both;

            @keyframes itemMenu {
              0% {
                transform: translateY(-50px);
                opacity: 0;
              }

              100% {
                transform: translateY(0);
                opacity: 1;
              }
            }

            &:nth-child(1) {
              animation-delay: 0.6s;

              &:before {
                transform: translate(15px, -20px);
              }
            }

            &:nth-child(2) {
              animation-delay: 0.8s;

              &:before {
                transform: translate(-50px, -12px);
              }
            }

            &:nth-child(3) {
              animation-delay: 1s;

              &:before {
                transform: translate(28px, -14px);
              }
            }

            &:nth-child(4) {
              animation-delay: 1.2s;

              &:before {
                transform: translate(-24px, -17px);
              }
            }

            &:nth-child(5) {
              animation-delay: 1.4s;

              &:before {
                transform: translate(-22px, -20px);
              }
            }

            &:hover {
              &:before {
                opacity: 1;
                width: 80%;
                height: 60%;
              }

              &:nth-child(2) {
                &:before {
                  width: 50%;
                }
              }

              &:nth-child(3) {
                &:before {
                  width: 60%;
                }
              }
            }
          }
        }
      }
    }

    &.menu-close {
      .menu {
        &:before {
          animation: menuClose 0.6s 0.3s ease both;
        }

        &:after {
          animation: menuClose 0.6s ease both;
        }

        @keyframes menuClose {
          0% {
            transform: translateY(0%);
          }

          100% {
            transform: translateY(-100%);
          }
        }

        .menu-items {
          .item {
            animation: itemClose 0.4s ease both;

            &:nth-child(1),
            &:nth-child(2),
            &:nth-child(3),
            &:nth-child(4),
            &:nth-child(5) {
              animation-delay: 0s;
            }

            @keyframes itemClose {
              0% {
                transform: translateY(0px);
                opacity: 1;
              }

              100% {
                transform: translateY(-100%);
                opacity: 0;
              }
            }
          }
        }
      }
    }
  }
`;

const Header = () => {
  const { t } = useTranslation("common");
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
    if (iconMenu) {
      window.onscroll = function () {
        if (window.pageYOffset >= 90) {
          iconMenu.classList.add("sticky");
        } else {
          iconMenu.classList.remove("sticky");
        }
      };
    }
   
  };

  const openMenu = () => {
    const iconMenu = iconMenuRef.current;
    const menuOverlay = mainNavRef.current;

    if (iconMenu.classList.contains("icon-open")) {
      menuOverlay.classList.add("menu-close");
      iconMenu.classList.remove("icon-open");
      document.querySelector("body").classList.remove("no-scroll");
      iconMenu.classList.remove("sticky");

      setTimeout(function () {
        menuOverlay.classList.remove("menu-open");
      }, 800);
      setTimeout(function () {
        menuOverlay.classList.remove("menu-close");
      }, 900);

    } else {
      menuOverlay.classList.remove("menu-close");
      menuOverlay.classList.add("menu-open");
      iconMenu.classList.add("icon-open");
      document.querySelector("body").classList.add("no-scroll");

      setTimeout(function () {
        iconMenu.classList.remove("sticky");
      }, 500);
    }
  };

  const buttons = [
    { path: "/", text: "home" },
    { path: "/about", text: "about" },
    { path: "/classes", text: "classes" },
    { path: "/schedule", text: "schedule" },
    { path: "/contact", text: "contact" },
  ];

  return (
    <>
      <HeaderStyled>
        <i className="icon-menu" ref={iconMenuRef} onClick={openMenu}>
          {" "}
          <span></span>
        </i>
        <div className="main-nav" ref={mainNavRef}>
          <div className="menu">
            <div className="menu-items">
            {buttons.map((button) => (
              <Link key={button.text} href={button.path}>
                <li>
                  <a className={router === button.path ? "item active" : "item"}>
                    {t(button.text)}
                  </a>
                </li>
              </Link>
            ))}
              {/* <LanguageSwitcher className="item" /> */}
            </div>

          </div>
        </div>

      </HeaderStyled>
      <SwiperSlider />
    </>
  );
};

export default Header;
