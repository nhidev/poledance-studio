import styled from "styled-components";
import { colors } from "../../styles/theme";
import { respondTo } from "../../styles/mixins";

const IntructorSectionStyled = styled.section`
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

  .full-content {
    margin: auto;
    .block {
      grid-column: 1 / 11;
      h1 {
        margin-bottom: 20px;
      }
    }
    article {
      p {
        color: #000;
      }
    }
  }

  .content {
    grid-template-rows: auto auto auto;
    margin-bottom: 100px;
    ${respondTo.sm`
      justify-items: center;
      grid-template-columns: 1fr;
      width: 100%;
    `}

    &.rtl-dir {
      .cover {
        grid-column: 7 / 11;

        ${respondTo.sm`
            grid-column: 1;
        `}
      }
      .item-wrap {
        grid-column: 1 / 8;

        ${respondTo.sm`
          grid-column: 1;
        `}
        .item {
          grid-column: 1 / 8;
        }
      }
    }

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

    .item-wrap {
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

      .item {
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
      }
    }
  }

  article {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    font-size: 16px;
    line-height: 1.6;
    letter-spacing: 0.3px;
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
      
    p {
      color: #fff;
      transition: all 0.2s ease;
      margin-bottom: 10px;

      ${respondTo.sm`
        margin-bottom: 5px;
    `}
    }
    h3 {
      color: #fff;
      margin-bottom: 20px;
    }
  }
`;

const IntructorSection = () => {
  return (
    <IntructorSectionStyled className="module">
      <div className="content full-content">
        <div className="block">
          <article className="full-box">
            <h1 className="section-title">DAN POLEDANCE STUDIO</h1>
            <p>
              We strive to help find <b>YOUR INNER FIRE</b>
            </p>
            <p>
              Dan Poledance Studio offers high quality pole instruction in a
              safe space for dancers to explore their pole styles, build
              strength and stamina, and enforce your body confidence.
            </p>
            <p>
              If you are brand new to the pole dance world, have no background
              in dance or gymnastics, or have it all but want more than{" "}
              <b>WE ARE HERE FOR YOU!</b>
            </p>
            <p>
              We cater our classes to fit your needs so that you can feel
              comfortable in your own body but still feel challenged so that you
              continue to build your pole style and strength.
            </p>
            <p>
              Many believe that pole dancing is just for dancers at bars and
              clubs, but <b>THIS IS NOT TRUE.</b> Pole offers a style of fitness
              for everyone from sporty to sensual. In the past decade, pole
              advocates have grown the pole world to all new heights (pun
              intended) creating a variety of beautiful artistry from pole
              static dynamics, spinning pole, pole fitness, choreography and of
              course your sensual styles. These styles have been influenced from
              a variety of dance styles, gymnastics tricks, as well as circus
              arts.
            </p>
          </article>
        </div>
      </div>
      <h3 className="section-title">
        <b>Meet</b>
        <span>Intructors</span>
      </h3>
      <div className="content">
        <div className="cover">
          <div className="cover-img">
            <img src="/assets/intructor-male.jpg" alt="" />
          </div>
        </div>
        <div className="item-wrap">
          <div className="item">
            <article>
              <h3>Trương Hoài Đan</h3>
              <p>
                Đan is the very proud owner of Dan Poledance Studi and has been
                turning himself upside down and spinning round a pole since
                2015.
              </p>
              <p>
                Dan is a veritable fountain of pole-related knowledge. There’s
                nothing he doesn’t know about spins, tricks and getting
                flexible.
              </p>
              <p>
                Check him out on Instagram <a href="https://www.instagram.com/truonghoaidang" target="_blank">@truonghoaidan</a> , watch his endless
                amounts of incredible videos on YouTube
              </p>
            </article>
          </div>
        </div>
      </div>
      {/*  Right to left */}
      <div className="content rtl-dir">
        <div className="cover">
          <div className="cover-img">
            <img src="/assets/intructor-female.jpg" alt="" />
          </div>
        </div>
        <div className="item-wrap">
          <div className="item">
            <article>
              <h3>Nanami Kuwahara</h3>
              <p>
                Nanami Kuwahara – has been teaching pole and competing
                professionally since 2018. Renowned worldwide for her unique
                style of movement, her powerhouse strength and fearlessness.
              </p>
              <p>
                Check her out on Instagram <a href="https://www.instagram.com/nanami_rosie" target="_blank">@nanami_rosie</a> , watch her endless
                gorgeous videos on{" "}
                <a href="https://www.youtube.com/channel/UCCUpl4VzL4OEopdQKTEodyA">
                  YouTube
                </a>{" "}
              </p>
            </article>
          </div>
        </div>
      </div>
    </IntructorSectionStyled>
  );
};

export default IntructorSection;
