import styled from "styled-components";
import { colors } from "../../styles/theme";
import { respondTo } from "../../styles/mixins";

// import styles from "./Main.module.scss";

const DanceOptionsStyled = styled.section`
  position: relative;

  &:before {
    content: "";
    position: absolute;
    width: 40%;
    height: 300px;
    border: 1px solid ${colors.m02};
    left: 0;
    bottom: 0;
    animation: beforeShape5 6s 1s ease infinite alternate both;

    @keyframes beforeShape5 {
      0% {
        transform: translate(-60%, 50px);
      }

      100% {
        transform: translate(-50%, -50px);
      }
    }

    ${respondTo.md`
      display: none;
    `}
  }

  .content {
    @include sm {
      grid-template-columns: repeat(1, 1fr);
      grid-row-gap: 10px;
    }

    .col {
      overflow: hidden;
      position: relative;
      height: 360px;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: ${colors.m01};

      ${respondTo.md`
        height: 280px;
      `}

      ${respondTo.md`
        height: 200px;
      `}
      > div {
        color: #fff;
        z-index: 3;
        position: absolute;
        width: 100%;
        padding: 0 10%;
        box-sizing: border-box;
        display: flex;
        justify-content: center;
        align-items: center;
        top: 0;
        bottom: 0;
        margin: auto;
      }

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        filter: grayscale(100%);
        -webkit-filter: grayscale(100%);
      }

      .title {
        position: absolute;
        z-index: 3;
        color: transparent;
        -webkit-text-stroke: 1px white;
        font-weight: 900;
        font-size: 40px;
        letter-spacing: 1.5px;
        text-transform: uppercase;
        transition: all 0.6s ease;

        ${respondTo.lg`
          font-size: 28px;
        `}
      }

      &:before,
      &:after {
        width: 100%;
        height: 100%;
        position: absolute;
        content: "";
        background-color: ${colors.neu06};
        z-index: 1;
        left: 0;
        top: 0;
        transition: all 0.4s ease;
      }

      &:before {
        background-color: #ef8fb2;
        opacity: 0.8;
        z-index: 1;
      }

      &:after {
        background-color: ${colors.m01};
        opacity: 0.2;
        z-index: 2;
      }
      &:hover {
        &:after {
          opacity: 0.8;
          ${respondTo.sm`
            opacity: 0.6;
          `}
        }

        .title {
          color: white;
          transform: translateY(-10px);
          ${respondTo.sm`
            color: transparent;
          `}
        }
      }
    }

    .first {
      grid-column: 1 / 4;
      transform: translateY(50px);

      ${respondTo.sm`
        grid-column: 1;
        transform: translateY(0px);
      `}

      .first-title {
        left: 40px;
        top: 20px;

        ${respondTo.sm`
          left: 30px;
        `}
      }
    }

    .mid {
      grid-column: 4 / 8;
      position: relative;
      ${respondTo.sm`
        grid-column: 1;
      `}
      .mid-title {
        text-align: center;
        top: 20px;
        cursor: default;
        width: 100%;
        ${respondTo.sm`
          left: 30px;
          text-align: left;
        `}
      }
    }

    .last {
      grid-column: 8 / 11;
      transform: translateY(50px);
      position: relative;

      ${respondTo.sm`
        grid-column: 1;
        transform: translateY(0px);
      `}

      .last-title {
        right: 40px;
        top: 20px;
        cursor: default;
        text-align: right;

        ${respondTo.sm`
          left: 30px;
          text-align: left;
        `}
      }
    }
  }
`;

const DanceOptions = () => {
  return (
    <DanceOptionsStyled className="module join-class">
      <h3 className="section-title">
        <span>Pole</span>
        <b>Practice</b>
      </h3>
      <div className="content">
        <div className="col first">
          <p className="title first-title">AERIAL</p>

          <img src="/assets/aerial-dancing.jpg" alt="" />

          <div>
            Lorem ipsum dolor sit amet consec tetuer adipiscing elit nean sit
            eget commodo ligula.
          </div>
        </div>
        <div className="col mid">
          <p className="title mid-title">EXOTOC POLE</p>

          <img src="/assets/pole-dancing.jpg" alt="" />

          <div>
            Lorem ipsum dolor sit amet consec tetuer adipiscing elit nean sit
            eget commodo ligula.
          </div>
        </div>
        <div className="col last">
          <p className="title last-title">FLOOR DANCE</p>
          <div>
            Lorem ipsum dolor sit amet consec tetuer adipiscing elit nean sit
            eget commodo ligula.
          </div>
          <img src="/assets/aerial-pole-dancing.jpg" alt="" />
        </div>
      </div>
    </DanceOptionsStyled>
  );
};

export default DanceOptions;
