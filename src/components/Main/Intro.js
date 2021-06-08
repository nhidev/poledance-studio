import styled from "styled-components";
import { useTranslation } from "next-i18next";
import { colors } from "../../styles/theme";
import { respondTo } from "../../styles/mixins";

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
            flex-direction: column;
          }

          p {
            color: white;
            transition: all 0.2s ease;
            margin-bottom: 10px;
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

      ${respondTo.sm`
        grid-row: 3;
        grid-column: 1;
      `}
    }
  }
`;

const Intro = () => {
  const { t } = useTranslation("home");
  return (
    <IntroStyled className="module album">
      <h3
        className="section-title"
        dangerouslySetInnerHTML={{ __html: t("homeIntroductTitle") }}
      />
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
                <p>{t("homeIntroductPar1")}</p>
                <p dangerouslySetInnerHTML={{ __html: t("homeIntroductPar2") }} />
                <p>{t("homeIntroductPar3")} <a href="https://www.facebook.com/Dan-Poledance-Studio-2215009938546431">DanPoleDanceStudio</a></p>
              </article>
            </li>  
          </ul>
        </div>

        <div className="button-container">
          <a href="/classes">
            <button className="btn">{t("homeIntroductButtonText")}</button>
          </a>
        </div>
      </div>
    </IntroStyled>
  );
};

export default Intro;
