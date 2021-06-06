import styled from "styled-components";
import React from "react";
import { useRouter } from "next/router";

const LanguageSwitcherStyled = styled.span`
  &:before {
    display: none;
  }
  .language-switcher {
    position: relative;
    display: inline-block;
    width: 128px;
    height: 64px;
    transform: translateY(40%);
    transition: transform 0.17s cubic-bezier(0.26, 0.48, 0.08, 0.9);

    input {
      opacity: 0;
      width: 0;
      height: 0;
    }

    .select-vn,
    .select-en {
      background-color: transparent;
      position: absolute;
      font-size: 25.6px;
      top: 16px;
      color: white;
      mix-blend-mode: difference;
    }
    .select-vn {
      left: 18.2857142857px;
    }
    .select-en {
      right: 16px;
    }
  }

  /* The slider */
  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #1e3470;
    box-shadow: 0 3px 64px rgba(#1e3470, 0.1);
    -webkit-transition: 0.4s;
    transition: 0.4s;
  }

  .slider:before {
    position: absolute;
    content: "";
    height: 64px;
    width: 64px;
    left: 0;
    bottom: 0;
    background-color: white;
    box-shadow: 0 3px 64px rgba(#1e3470, 0.16);
    transition: 0.4s;
  }

  input:checked + .slider {
    background-color: #1e3470;
  }

  input:focus + .slider {
    box-shadow: none;
  }

  input:checked + .slider:before {
    transform: translateX(64px);
  }

  /* Rounded sliders */
  .slider.round {
    border-radius: 64px;
  }

  .slider.round:before {
    border-radius: 50%;
  }
`;

const LanguageSwitcher = () => {
  const router = useRouter();
  const { locale } = router;

  const changeLanguage = (e) => {
    e.preventDefault();
    const locale = e.target.value;
    router.push(router.pathname, router.asPath, { locale });
    document.querySelector("body").classList.remove("no-scroll");
  };

  return (
    <LanguageSwitcherStyled className="item">
      <label className="language-switcher">
        <input type="checkbox" />
        <span className="slider round"></span>
        <button
          className="select-vn"
          onClick={changeLanguage}
          defaultValue={locale}
          value="vn"
        >
          VN
        </button>
        <button
          className="select-en"
          onClick={changeLanguage}
          defaultValue={locale}
          value="en"
        >
          EN
        </button>
      </label>
    </LanguageSwitcherStyled>
  );
};

export default LanguageSwitcher;
