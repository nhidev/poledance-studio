import { css } from "styled-components";

import { colors } from "../../styles/theme";
import { respondTo } from "../../styles/mixins"

export default css`

  html {
    font-size: calc((10px + ((100vw - 375px) / 375) * 10));
  }

  @media (min-width: 768px) {
    html {
      font-size: 62.5%; //10px;
    }
  }
  body {
    font-size: 1.6rem;
    line-height: 1.5;
    color: #222222;
    overflow-x: hidden;
    min-height: 100vh;
    width: 100%;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    height: 100%;
    position: relative;
  }

  html, input, textarea {
    /* font-family: 'Nunito Sans', sans-serif; */
    -webkit-font-smoothing: antialiased;
    font-family: "Montserrat", "HelveticaNeue", "Helvetica Neue", Helvetica,
      Arial, sans-serif;
  }
  
  b {
    font-weight: 600;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-weight: bold;
    line-height: 1.2;
  }

   h1 {
    font-size: 42px;
  }

  h2 {
    font-size: 36px;
  }

  h3 {
    font-size: 32px;
  }

  h4 {
    font-size: 24px;
  }

  h5 {
    font-size: 18px;
  }

  h6 {
    font-size: 16px;
  }

  .btn {
    min-width: 160px;
    padding: 16px 30px;
    box-shadow: inset 0px 0px 0px 1px ${colors.m01};
    border: 0;
    background-color: white;
    color: ${colors.m01};
    text-transform: uppercase;
    font-weight: 800;
    font-size: 14px;
    position: relative;
    letter-spacing: 0.05em;
    cursor: pointer;
    margin: auto;
    display: block;

    &:focus {
      outline: 0;
    }

    &:before {
      width: 100%;
      height: 100%;
      background-color: ${colors.m01};
      position: absolute;
      content: "";
      z-index: -1;
      left: 0;
      top: 0;
      transition: all 0.3s ease;
      transform: translate(6px, 6px);
    }

    &:hover {
      &:before {
        transform: translate(0px, 0px);
      }
    }
  }

  .section-title {
    color: ${colors.m01};
    text-transform: uppercase;
    text-align: center;
    position: relative;
    display: flex;
    align-items: baseline;
    justify-content: center;
    font-weight: 900;
    font-size: 50px;
    line-height: normal;
    letter-spacing: 0.04em;
    min-height: 120px;
    grid-column: 1 / 15;
    margin-bottom: 40px;

    ${respondTo.sm`
      font-size: 32px;
      min-height: 76px;
      margin-bottom: 30px;
    `}

    b {
      font-weight: 900;
      margin: 0 10px;

      ${respondTo.sm`
        margin: 0 5px;
      `}
    }

    span {
      color: transparent;
      -webkit-text-stroke: 1px ${colors.m01};
      margin: 0 10px;

      ${respondTo.sm`
        margin: 0 5px;
     `}
    }

    &:before {
      content: "";
      width: 10px;
      height: 40px;
      background-color: ${colors.neu02};
      position: absolute;
      transform: rotate(20deg);
      bottom: 0;

      ${respondTo.sm`
        width: 7px;
        height: 26px;
      `}
    }
  }

  .module {
    display: grid;
    grid-template-columns: repeat(14, 1fr);
    grid-column-gap: 20px;
    width: 100%;
    max-width: 1920px;
    margin: auto;
    padding-top: 100px;
    padding-bottom: 100px;
    ${respondTo.sm`
      grid-column-gap: 10px;
      grid-template-columns: 10px repeat(12, 1fr) 10px;
      padding-top: 60px;
      padding-bottom: 60px;
    `}

    .content {
      grid-column: 3 / 13;
      width: 100%;
      display: grid;
      grid-template-columns: repeat(10, 1fr);
      grid-column-gap: 20px;

      ${respondTo.md`
        grid-column: 2 / 14;
      `}

      ${respondTo.sm`
        grid-template-columns: repeat(1, 1fr);
        grid-column: 2 / 14;
      `}
    }
  }
`;
