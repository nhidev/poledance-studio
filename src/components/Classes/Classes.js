import styled from "styled-components";
import { colors } from "../../styles/theme";
import { respondTo } from "../../styles/mixins";

const ClassesSectionStyled = styled.section`
  padding-top: 200px;
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
    width: 100%;
    margin: auto;
    .block {
      grid-column: 1 / 11;
      h1 {
        margin-bottom: 20px;
      }
      .full-box {
        display: grid;
        grid-template-columns: 1fr;
        grid-column-gap: 4%;

        ${respondTo.lg`
          grid-row-gap: 20px;
        `}

        ${respondTo.sm`
          padding: 20px 0 20px 0;
        `}
        p {
          color: #000;
        }
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
  }
`;

const ClassesSection = () => {
  return (
    <ClassesSectionStyled className="module">
      <div className="content full-content">
        <div className="block">
          <article className="full-box">
            <h1>CLASS DESCRIPTIONS</h1>
            <p>
              Dan Studio offers a variety of classes to best fit your pole style{" "}
              {"<3"}
            </p>
            <p>
              There are different pole streams that you can pick and choose
              from:
            </p>

            <ul>
              <li>Introductory Class {"<="} REQUIRED IF NEVER POLED BEFORE</li>
              <li>Aerial Hoop</li>
              <li>Pole Fitness</li>
            </ul>
          </article>
        </div>
      </div>
      {/* first block */}
      <h3 className="section-title">
        <b>INTRODUCTORY</b>
        <span>POLE</span>
      </h3>
      <div className="content">
        <div className="cover">
          <div className="cover-img">
            <img src="/assets/intro.jpg" alt="" />
          </div>
        </div>
        <div className="item-wrap">
          <div className="item">
            <article>
              <p>
                Welcome to Pole! We are so excited to introduce you to your
                first pole classes! This is a great class to try out a few
                styles of pole and get you familiar with the apparatus. You will
                learn basic moves and transitions, floor work, spins on static
                and spin, and many more! This is mandatory to take for any
                student who has never touched a pole or who feels they need a
                reminder of the Pole World {"<3"} We recommend to take at least
                a months worth of this class before you move on to other
                classes! Ask your instructor if you have any questions on your
                progressions.{" "}
              </p>
            </article>
          </div>
        </div>
      </div>
      {/* second block */}
      <h3 className="section-title">
        <b>POLE</b>
        <span>FITNESS</span>
      </h3>

      <div className="content rtl-dir">
        <div className="cover">
          <div className="cover-img">
            <img src="/assets/pole-finess.jpg" alt="" />
          </div>
        </div>
        <div className="item-wrap">
          <div className="item">
            <article>
              <p>
                Pole fitness is a very popular class and has really grown in the
                fitness industry to be one of the best forms of exercise. It is
                a full body workout incorporating dance, gymnastics and strength
                based moves on a chrome pole. Our poles are 45mm thick and 4.2m
                high. They can be set to static or spin.
              </p>
              <p>
                There is so much to learn in pole from pretty spins, flow,
                strength based moves, drops, inversions and Combos.
              </p>
              <p>
                In all of our classes you will be taken from the very first
                steps to build up strength and agility before moving on to more
                advanced variations. There is always something new to learn in
                pole fitness, the creativity of the art form never ends.
              </p>
              <p>
                It is amazing how quickly your body adapts and strengthens up
                over time with this full body workout, improving muscle tone,
                flexibility, coordination, posture, upper body and core
                strength.
              </p>
            </article>
          </div>
        </div>
      </div>
      {/* third block */}
      <h3 className="section-title">
        <b>AERIAL</b>
        <span>HOOP</span>
      </h3>
      <div className="content">
        <div className="cover">
          <div className="cover-img">
            <img src="/assets/aerial-pole.jpg" alt="" />
          </div>
        </div>
        <div className="item-wrap">
          <div className="item">
            <article>
              <p>
                Aerial hoop is a hoop that is suspended in the air which
                performers can move there bodies around making shapes either
                inside, on top or underneath the hoop.
              </p>
              <p>
                As a beginner this class focuses on conditioning on the hoop and
                learning the core techniques you need to feel comfortable inside
                the hoop. You will learn the foundations to gain strength in the
                backs of the knees, elbows and hand grip.
              </p>
              <p>
                As an intermediate/ advanced student you will learn more dynamic
                combinations, linking movements together, rolls and drops.
              </p>
              <p>
                Aerial hoop is a full body workout that is fun and enjoyable.
                Incorporating dance and circus all in one. No matter what level
                you are at there will always be something new and challenging
                you can learn.
              </p>
              <p>
                Please make sure you wear tight fitting clothing. Leggings and a
                fitted top would be suitable. This class is lead in bare feet so
                no shoes are necessary and all jewellery should be removed.
              </p>
            </article>
          </div>
        </div>
      </div>
    </ClassesSectionStyled>
  );
};

export default ClassesSection;
