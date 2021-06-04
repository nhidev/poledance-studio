import styled from "styled-components";
import { colors } from "../../styles/theme";
import { respondTo } from "../../styles/mixins";

const FollowUsStyled = styled.section`
  position: relative;

  &:before,
  &:after {
    content: "";
    position: absolute;
    width: 40%;
    height: 300px;
    background-color: ${colors.m02};
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

  &:after {
    z-index: -1;
    left: initial;
    width: 100%;
    grid-column: 12 / 14;
    right: 0;
    top: 0;
    height: 400px;
    animation: beforeShape6 6s 1s ease infinite alternate both;

    @keyframes beforeShape6 {
      0% {
        transform: translate(0px, 150px);
      }

      100% {
        transform: translate(50px, 180px);
      }
    }
  }

  .content {
    ${respondTo.sm`
      grid-template-columns: repeat(1, 1fr);
      grid-row-gap: 10px;
    `}

    .newsletter,
    .social {
      overflow: hidden;
      position: relative;
      height: 360px;
      display: flex;
      justify-content: center;
      align-items: center;

      ${respondTo.md`
        height: 280px;
      `}

      ${respondTo.sm`
        height: 200px;
      `}

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        filter: grayscale(100%);
        -webkit-filter: grayscale(100%);
      }

      .social-title {
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
        background-color: ${colors.m01};
        z-index: 1;
        left: 0;
        top: 0;
        transition: all 0.4s ease;
      }

      &:before {
        mix-blend-mode: multiply;
      }

      &:after {
        opacity: 0.6;
        z-index: 2;
      }

      &:hover {
        &:after {
          opacity: 0.8;

          ${respondTo.sm`
            opacity: 0.6;
          `}
        }

        .social-title {
          color: white;

          ${respondTo.sm`
            color: transparent;
          `}
        }
      }
    }

    .newsletter {
      grid-column: 1 / 6;
      background-color: ${colors.m01};

      ${respondTo.sm`
        grid-column: 1;
      `}

      .social-title {
        left: 40px;
        top: 20px;

        ${respondTo.sm`
          left: 20px;
        `}
      }

      .form {
        z-index: 3;
        position: absolute;
        width: 100%;
        padding: 0 10%;
        box-sizing: border-box;

        ${respondTo.sm`
          padding: 0 20px;
        `}

        input {
          width: 100%;
          background-color: transparent;
          color: white;
          border: 0;
          box-shadow: inset 0px -2px 0px white;
          padding: 10px 40px 10px 10px;
          text-transform: uppercase;
          font-weight: 900;
          font-size: 18px;
          letter-spacing: 0.05em;
          box-sizing: border-box;

          &:focus {
            outline: 0;
          }

          &::placeholder {
            color: white;
            text-transform: uppercase;
            font-weight: 900;
            font-size: 18px;
            opacity: 0.5;
            letter-spacing: 0.05em;

            ${respondTo.sm`
              font-size: 14px;
            `}
          }

          ${respondTo.sm`
            font-size: 14px;
          `}
        }

        .send {
          width: 24px;
          height: 24px;
          position: absolute;
          z-index: 3;
          right: 10%;
          top: 0;
          transition: all 0.4s ease;
          background-image: url("/assets/icon-send.svg");
          transform: translate(-10px, 5px);
          cursor: pointer;

          ${respondTo.sm`
            right: 20px;
            transform: translate(-10px, 5px);
          `}

          &:hover {
            transform: translate(0px, 5px);
          }
        }
      }
    }

    .social {
      grid-column: 6 / 11;
      background-color: ${colors.m02};
      transform: translateY(50px);
      position: relative;

      ${respondTo.sm`
        grid-column: 1;
        transform: translateY(0px);
      `}

      .social-title {
        right: 40px;
        top: 20px;
        cursor: default;

        ${respondTo.sm`
          right: 20px;
        `}
      }

      .social-icons {
        z-index: 3;
        position: absolute;
        width: 100%;
        display: flex;
        justify-content: center;

        .network {
          margin: 0 5%;
          cursor: pointer;
          position: relative;
          display: flex;
          justify-content: center;

          ${respondTo.md`
            margin: 0 4%;
          `}

          ${respondTo.sm`
            margin: 0 5%;
          `}

          img {
            width: 48px;
            height: 48px;
            transition: all 0.4s ease;

            ${respondTo.md`
              width: 40px;
              height: 40px;
            `}

            ${respondTo.sm`
              width: 32px;
              height: 32px;
            `}
          }

          .social-name {
            opacity: 0;
            font-size: 14px;
            color: ${colors.m02};
            text-transform: uppercase;
            font-weight: 500;
            letter-spacing: 1px;
            position: absolute;
            bottom: 0;
            transition: all 0.4s ease;
            transform: translateY(60px);

            ${respondTo.sm`
              display: none;
            `}
          }

          &:hover {
            img {
              transform: translateY(-10px);

              ${respondTo.sm`
                transform: translateY(0px);
              `}
            }

            .social-name {
              transform: translateY(30px);
              opacity: 0.8;
            }
          }
        }
      }
    }
  }
`;

const FollowUs = () => {
  return (
    <FollowUsStyled className="module follow">
      <h3 className="section-title">
        <b>Follow</b>
        <span>Us</span>
      </h3>
      <div className="content">
        <div className="newsletter">
          <p className="social-title">Newsletter</p>

          <img src="/assets/new-letter-box-bg.jpg" alt="" />

          <div className="form">
            <input type="text" placeholder="email" />
            <i className="send"></i>
          </div>
        </div>
        <div className="social">
          <p className="social-title">Social</p>
          <div className="social-icons">
            <a
              className="network"
              href="#"
              target="_blank"
            >
              <img src="/assets/facebook.svg" alt="" />
              <p className="social-name">facebook</p>
            </a>
            <a
              className="network"
              href="#"
              target="_blank"
            >
              <img src="/assets/youtube.svg" alt="" />
              <p className="social-name">youtube</p>
            </a>
            <a
              className="network"
              href="#"
              target="_blank"
            >
              <img src="/assets/instagram.svg" alt="" />
              <p className="social-name">instagram</p>
            </a>
            <a className="network" href="#" target="_blank">
              <img src="/assets/twitter.svg" alt="" />
              <p className="social-name">twitter</p>
            </a>
          </div>
          <img src="/assets/social-box-bg.jpg" alt="" />
        </div>
      </div>
    </FollowUsStyled>
  );
};

export default FollowUs;
