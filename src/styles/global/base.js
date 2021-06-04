import { css } from "styled-components";

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
    font-size: 4.2rem;
  }

  h2 {
    font-size: 3.6rem;
  }

  h3 {
    font-size: 3.2rem;
  }

  h4 {
    font-size: 2.4rem;
  }

  h5 {
    font-size: 1.8rem;
  }

  h6 {
    font-size: 1.6rem;
  }
  p {
    margin-bottom: 0.8rem;  
  }

  main {
    padding: 6rem 0 40rem;
  }
  @media (min-width: 768px) {
    main {
      padding-top: 8rem;
    }
  }
  .btn {
    border: 0;
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    outline: none;
    overflow: hidden;
    padding: 2rem 3rem;
    position: relative;
    text-decoration: none;
    text-transform: uppercase;
    letter-spacing: 1px;
    white-space: nowrap;
    transition: all .2s cubic-bezier(.25,.46,.45,.94);
    span {
      color:rgb(255 255 255);
      display: block;
      line-height: 1;
      transition: all .4s cubic-bezier(.25,.46,.45,.94);
      white-space: normal;
    }
    i {
      display: block;
      width: 1.875rem;
      height: 1px;
      background: rgb(255 255 255);
      margin-left: 6rem;
      position: relative;
      transition: all .2s cubic-bezier(.25,.46,.45,.94);
      &:before {
        content: "";
        width: 15px;
        height: 1px;
        background: rgb(36 187 158);
        margin-left: -20px;
        display: block;
        transition: all .2s cubic-bezier(.25,.46,.45,.94);
      }
      &:after {
        content: "";
        display: block;
        position: absolute;
        top: -5px;
        left: 100%;
        width: 0;
        height: 0;
        border-top: 6px solid rgb(0 0 0 / 0%);
        border-bottom: 6px solid rgb(0 0 0 / 0%);
        border-left: 8px solid rgb(255 255 255);
        transition: all 0.2s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        border-left-color: rgb(255 255 255);
      }
    }
    &:hover {
      color: rgb(30 36 40);
      box-shadow: inset 0 0 0 1px #24bb9e;
      background: rgb(36 187 158);
      span {
        color: rgb(255 255 255);
        transform: translateX(10px);
      }
      i {
        background: rgb(255 255 255);
        &:before {
            background: rgb(255 255 255);
        }
        &:after {
          border-left-color: rgb(30 36 40)
        }
      }
    }
  }
  .btn--black-keyline {
    box-shadow: inset 0 0 0 1px #1e2428;
    background-color: rgb(0 0 0 / 0%);
    span {
      color: rgb(30 36 40);
    }
    i {
      background: rgb(30 36 40);
      &:after {
        border-left-color: rgb(30 36 40);
      }
    }
    &:hover {
      box-shadow: inset 0 0 0 1px #1e2428;
      background: rgb(30 36 40);
      span {
        color: rgb(255 255 255);
      }
      i {
        background: rgb(255 255 255);
        &:after {
          border-left-color: rgb(255 255 255);
        }
      }
    }
  }  
  .btn--white-keyline {
    box-shadow: inset 0 0 0 1px #fff;
    background-color: rgb(0 0 0 / 0%);
    span {
      color: #fff;
    }
    &:hover {
      box-shadow: inset 0 0 0 1px #24bb9e;
      background: rgb(36 187 158);
      span {
        color: rgb(255 255 255);
      }
      i {
        background: #fff;
        &:after {
          border-left-color:#fff;
        }
      }
    }
  }  

  .btn-orange {
    clip-path: polygon(0 10%, 95% 0, 100% 100%, 5% 95%);
    padding: 3rem 5rem;
    background-color: rgb(237 72 21);
    color: rgb(255 255 255);
    font-size: 3.2rem;
    display: table;
    font-weight: bold;
    text-align: center;
    margin: 5rem auto;
  }

  .mr10 {
    margin: 10rem;
  }
  .mb5 {
    margin-bottom: 5rem;
  }

`;
