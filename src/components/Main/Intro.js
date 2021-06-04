import styled from "styled-components";
import { colors } from "../../styles/theme";
import { respondTo } from "../../styles/mixins";

// import styles from "./Main.module.scss";

const IntroStyled = styled.section`
  &:before {
    content: "";
    position: absolute;
    width: 20%;
    height: 520px;
    border: 1px solid ${colors.m01};
    right: 0;
    animation: beforeShape3 6s ease infinite alternate both;

    @keyframes beforeShape3 {
      0% {
        transform: translate(50px, 50px);
      }

      100% {
        transform: translate(0px, -50px);
      }
    }

    ${respondTo.md`
      display: none;
    `}
  }

  .content {
    grid-template-rows: auto auto auto;
    //grid-template-areas: "cover cover cover cover""button tracks";

    ${respondTo.sm`
      justify-items: center;
      grid-template-columns: 1fr;
      width: 100%;
    `}

    .cover {
      grid-column: 1 / 5;
      grid-row: 1 / 2;
      z-index: 1;
      height: fit-content;

      ${respondTo.sm`
        grid-column: 1;
        width: 100%;
        height: 200px;
      `}

      .cover-img {
        width: 100%;
        padding-bottom: 100%;
        overflow: hidden;
        position: relative;
        display: flex;
        justify-content: center;

        ${respondTo.sm`
          width: 100%;
          height: 200px;
          padding: 0;
        `}

        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          position: absolute;

          ${respondTo.sm`
            width: 200px;
            height: 200px;
          `}
        }
      }
    }

    .tracks {
      grid-column: 3 / 11;
      grid-row: 1 / 3;
      transform: translateY(50px);
      position: relative;
      display: grid;
      grid-template-columns: repeat(8, 1fr);
      grid-column-gap: 20px;
      //grid-area: tracks;

      ${respondTo.sm`
        width: 100%;
        grid-column: 1;
        grid-template-columns: 1fr;
      `}

      &:before {
        width: 100%;
        height: 100%;
        content: "";
        position: absolute;
        background-image: ${colors.g01};
        opacity: 0.5;
        z-index: -1;
      }

      .tracklist {
        grid-column: 3 / 9;
        padding: 80px 0;
        z-index: 1;
        padding-right: 20px;

        ${respondTo.md`
          grid-column: 3 / 9;
        `}

        ${respondTo.sm`
          padding: 190px 0 40px 0;
          grid-column: 1;
        `}

        li {
          display: flex;
          justify-content: space-between;
          align-items: center;
          text-transform: uppercase;
          /* font-family: $font-01; */
          font-size: 14px;
          line-height: 20px;
          letter-spacing: 0.3px;
          font-weight: 600;
          padding: 0px 20px;
          transition: all 0.6s ease;
          position: relative;
          margin: 0 10% 20px;
          cursor: default;

          ${respondTo.lg`
            margin: 0 6%;
          `}

          ${respondTo.md`
            margin: 0;
          `}

          ${respondTo.sm`
            margin: 0 10%;
            padding: 0px;
          `}

          ${respondTo.xs`
            margin: 0 20px;
            font-size: 12px;
          `}

          article {
            display: flex;
          }

          p {
            color: #fff;
            transition: all 0.2s ease;
          }

          span {
            margin-right: 20px;
            color: ${colors.m01};
            transition: all 0.2s ease;

            ${respondTo.sm`
              margin-right: 10px;
            `}
          }

          small {
            font-size: 12px;
            color: ${colors.neu04};
            font-weight: normal;
            margin-left: 10px;
            line-height: 20px;
            letter-spacing: 0.05em;
            transition: all 0.4s ease;

            ${respondTo.sm`
              font-size: 12px;
              margin-left: 10px;
            `}

            @media screen and (max-width: 380px) {
              display: none;
            }
          }
        }
      }
    }

    .button-container {
      grid-row: 2 / 4;
      grid-column: 1 / 5;
      margin-top: 30px;
      z-index: 2;
      //grid-area: button;

      ${respondTo.sm`
        grid-row: 3;
        grid-column: 1;
      `}
    }
  }
`;

const Intro = () => {
  return (
    <IntroStyled className="module album">
      <h3 className="section-title">
        <b>Body &</b>
        <span>Pole</span>
      </h3>
      <div className="content">
        <div className="cover">
          <div className="cover-img">
            <img src="/assets/body-pole.jpg" alt="" />
          </div>
        </div>
        <div className="tracks">
          <ul className="tracklist">
            <li>
              <article>
                <p>
                  Whether you’ve never tried aerial, or you spend half your day
                  upside down, when you spend time with us you will evolve. You
                  will unleash parts of yourself yet unknown. Strengths will
                  surface. Muscles will transform. And you will own every inch
                  of it.
                </p>
              </article>
            </li>

            <li>
              <article>
                <p>
                  Want to nail that inversion? Looking to get deeper in your
                  bend? Get unlimited access to our online classes, designed to
                  give you the best of our in-studio expertise, for everyday use
                  at home.
                </p>
              </article>
            </li>
          </ul>
        </div>

        <div className="button-container">
          <a href="#" target="_blank">
            <button className="btn">Claim your space</button>
          </a>
        </div>
      </div>
    </IntroStyled>
  );
};

export default Intro;
