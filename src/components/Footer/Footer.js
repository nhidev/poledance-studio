import styled from "styled-components";
import { colors } from '../../styles/theme';
import { respondTo } from '../../styles/mixins';

const FooterStyled = styled.footer`
  padding-top: 200px;
  ${respondTo.sm`
    padding-top: 30px;
  `}
  .content {
    background-color: ${colors.neu07};
    width: 100%;
    height: 290px;
    position: relative;
    display: grid;
    grid-template-columns: repeat(14, 1fr);
    grid-column-gap: 20px;
    justify-content: center;
    align-items: center;

    ${respondTo.sm`
      grid-template-columns: 10px repeat(12, 1fr) 10px;
      grid-column-gap: 10px;
      height: 180px;
    `}

    &:after {
      content: "";
      position: absolute;
      width: 100%;
      height: 100%;
      border: solid 1px ${colors.m01};
      grid-column: 2 / 14;
      transform: translateY(-50px);
      ${respondTo.sm`
        transform: translateY(-20px);
      `}
    }

    article {
      grid-column: 3/13;
      text-transform: uppercase;
      letter-spacing: 1px;
      z-index: 3;

      .text {
        color: ${colors.m01};
        text-align: center;
        font-weight: 500;
        font-size: 14px;
        line-height: 22px;
      }

      .credits {
        display: block;
        color: ${colors.neu05};
        text-align: center;
        margin-top: 20px;

        font-size: 12px;

        a {
          color: white;
          text-decoration: none;
          cursor: pointer;
          position: relative;
          transition: all 0.4s ease;
          padding: 0 2px;

          &:before {
            content: "";
            position: absolute;
            width: 100%;
            height: 0%;
            background: ${colors.g01};
            grid-column: 2 / 14;
            transform: translateY(5px);
            left: 0;
            bottom: 0;
            transition: all 0.4s ease;
            z-index: -1;
          }

          span {
            display: inline-block;
          }

          &:hover {
            color: ${colors.neu06};

            &:before {
              height: 100%;
              transform: translateY(0px);
              opacity: 1;
            }
          }
        }
      }
    }
  }
`;

const Footer = () => {
  return (
    <FooterStyled>
      <div className="content">
        <article>
          <p className="text">
            <a href="/">Dan Poledance Studio</a> @ 2021 — all rights reserved
          </p>
          <p className="credits">
            design by{" "}
            <a href="#" target="_blank">
              <span>3m4</span>
            </a>
          </p>
        </article>
      </div>
    </FooterStyled>
  );
};

export default Footer;
