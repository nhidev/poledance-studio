import styled from "styled-components";
import React, { useEffect, useRef } from "react";
import { colors } from "../../styles/theme";
import { respondTo } from "../../styles/mixins";

const SwiperSliderStyled = styled.header`
  width: 100%;
  background-image: ${colors.g02};
  margin-bottom: 100px;

  .main-heading {
    width: 100%;
    max-width: 1920px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(14, 1fr);
    grid-column-gap: 20px;
    position: relative;
    transition: all 0.4s ease;

    ${respondTo.sm`
      grid-template-columns: 10px repeat(12, 1fr) 10px;
      grid-column-gap: 10px;
    `}

    &:before {
      content: "";
      position: absolute;
      width: 100vw;
      height: calc(100% + 50px);
      background-image: ${colors.g01};
      grid-column-start: 3;
      transition: all 0.4s ease;

      ${respondTo.md`
        grid-column-start: 2;
      `}

      ${respondTo.sm`
        width: 100%;
        grid-column-end: 15;
        height: calc(100% + 20px);
      `}
    }

    article {
      grid-column-start: 3;
      position: absolute;
      z-index: 2;
      color: white;
      margin-top: 70px;

      ${respondTo.md`
        grid-column-start: 2;
      `}

      ${respondTo.sm`
        grid-column-start: 2;
        margin-top: 40px;
      `}

        .site-title a {
        font-size: 144px;
        font-weight: 800;
        text-transform: uppercase;
        color: transparent;
        -webkit-text-stroke: 2px white;

        ${respondTo.sm`
          font-size: 68px;
          -webkit-text-stroke: 1px white;
        `}
      }
    }

    .slide-container {
      width: 100%;
      height: 680px;
      grid-column: 4 / 13;
      position: relative;
      box-sizing: border-box;
      display: grid;
      grid-template-columns: repeat(9, 1fr);
      grid-column-gap: 20px;

      ${respondTo.md`
        grid-column: 3 / 14;
      `}

      ${respondTo.sm`
        height: 400px;
      `}

        .slide-wrapper {
        display: grid;
        grid-template-columns: repeat(9, 1fr);
        grid-column-gap: 20px;
        grid-column: 1 / 10;

        .slide {
          display: flex;
          justify-content: center;
          align-items: center;
          background-color: ${colors.m01};
          grid-column: 1 / 9;
          visibility: hidden;
          overflow: hidden;
          height: 480px;
          position: absolute;
          transition: all 0.4s ease;
          z-index: 1;

          ${respondTo.sm`
            grid-column: 1 / 10;
          `}

          &.active {
            opacity: 1;
            visibility: visible;
            height: 480px;
            transition: all 0.4s ease;
            top: 160px;
            background-color: ${colors.m01};

            ${respondTo.sm`
              height: 300px;
              top: 80px;
            `}
          }

          &.next {
            transition: all 0.4s ease;
            width: 260px;
            height: 160px;
            opacity: 1;
            grid-column-end: 10;
            visibility: visible;
            position: absolute;
            right: 0;
            bottom: -50px;

            ${respondTo.sm`
              display: none;
            `}
          }

          img {
            object-fit: cover;
            width: 100%;
            height: 100%;
          }

          &.anime-in {
            &:before {
              content: "";
              width: 100%;
              height: 100%;
              position: absolute;
              background-image: ${colors.g02};
              animation: anime-in-before 0.6s ease both;

              @keyframes anime-in-before {
                0% {
                  transform: translateX(101%);
                }
              }
            }

            img {
              animation: anime-in 0.6s 0.4s ease both;
              z-index: 1;

              @keyframes anime-in {
                0% {
                  transform: translateX(101%);
                }
              }
            }
          }

          &.anime-next-in {
            img {
              animation: anime-next-in 0.4s 0.2s ease both;
              z-index: 1;

              @keyframes anime-next-in {
                0% {
                  transform: translateX(101%);
                }
              }
            }
          }

          &.anime-out {
            &:before {
              content: "";
              width: 100%;
              height: 100%;
              position: absolute;
              background-image: ${colors.g02};
              animation: anime-out-before 0.6s ease both;

              @keyframes anime-out-before {
                0% {
                  transform: translateX(-101%);
                }
              }
            }

            img {
              animation: anime-out 0.6s 0.4s ease both;
              z-index: 1;

              @keyframes anime-out {
                0% {
                  transform: translateX(-101%);
                }
              }
            }
          }

          &.anime-next-out {
            img {
              animation: anime-next-out 0.4s 0.2s ease both;
              z-index: 1;

              @keyframes anime-next-out {
                0% {
                  transform: translateX(-101%);
                }
              }
            }
          }
        }
      }

      .slide-arrows {
        position: absolute;
        right: 0;
        display: flex;
        flex-direction: column;
        bottom: 180px;
        width: 60px;
        height: 200px;
        justify-content: center;
        align-items: center;

        ${respondTo.sm`
          display: none;
        `}

        .button-prev,
          .button-next {
          bottom: 0;
          top: initial;
          width: 60px;
          height: 60px;
          position: initial;
          margin-top: 0;
          transition: all 0.4s ease;
          box-shadow: inset 0px 0px 0px 1px rgba(255, 255, 255, 1);
          background-size: 24px;
          background-repeat: no-repeat;
          background-position: center;
          cursor: pointer;

          &:focus {
            outline: 0;
          }

          &:hover {
            box-shadow: inset 0px 0px 0px 1px rgba(255, 255, 255, 1),
              inset 0px 0px 0px 6px rgba(255, 255, 255, 0.2);
            //background-color: rgba(255,255,255,0.2);
          }
        }

        .button-prev {
          background-image: url("/assets/icon-prev.svg");
        }

        .button-next {
          background-image: url("/assets/icon-next.svg");
          margin-top: 20px;
        }
      }

      .slide-bullets {
        bottom: -50px;
        height: 80px;
        width: calc(100% - 280px);
        position: initial;
        display: flex;
        justify-content: flex-end;
        align-items: flex-end;
        position: absolute;
        grid-column-start: 1;

        ${respondTo.sm`
          width: 100%;
          bottom: -20px;
        `}

        .bullet {
          background-color: transparent;
          opacity: 1;
          box-shadow: inset 0px 0px 0px 1px white;
          width: 8px;
          height: 30px;
          transition: all 0.4s ease;
          margin: 0 10px;

          ${respondTo.sm`
            width: 6px;
            height: 20px;
            margin: 0 6px;
          `}

          &.selected {
            box-shadow: inset 0px 0px 0px 1px white,
              inset 0px -60px 0px 0px white;
            height: 40px;

            ${respondTo.sm`
              height: 30px;
            `}
          }
        }
      }
    }
  }

  .swiper-container {
    width: 100%;
    height: 100%;
  }

  .swiper-slide {
    text-align: center;
    font-size: 18px;
    background: #fff;

    /* Center slide text vertically */
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .swiper-slide img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .swiper-container {
    width: 100%;
    height: 300px;
    margin-left: auto;
    margin-right: auto;
  }

  .swiper-slide {
    background-size: cover;
    background-position: center;
  }

  .mySwiper2 {
    height: 80%;
    width: 100%;
  }

  .mySwiper {
    height: 20%;
    box-sizing: border-box;
    padding: 10px 0;
  }

  .mySwiper .swiper-slide {
    width: 25%;
    height: 100%;
    opacity: 0.4;
  }

  .mySwiper .swiper-slide-thumb-active {
    opacity: 1;
  }

  .swiper-slide img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const images = [
  {
    id: 0,
    image: "/assets/slider1.jpg",
  },
  {
    id: 1,
    image: "/assets/slider2.jpg",
  },
  {
    id: 2,
    image: "/assets/slider3.jpg",
  },
  {
    id: 3,
    image: "/assets/slider4.jpg",
  },
];

const SwiperSlider = () => {
  const imageActiveRef = useRef(null);
  const imageNextRef = useRef(null);
  const slideActiveRef = useRef(null);
  const slideNextRef = useRef(null);
  const slidebBulletsRef = useRef(null);

  // To Populate the first images on page load
  useEffect(() => {
    if (imageActiveRef.current && imageNextRef.current) {
      imageActiveRef.current.src = images[0].image;
      imageActiveRef.current.dataset.id = images[0].id;

      imageNextRef.current.src = images[1].image;
      imageNextRef.current.dataset.id = images[1].id;
    }
  }, []);

  const nextPhoto = () => {
    const nextId = ~~imageNextRef.current.dataset.id + 1,
      nextPicture = images.find((element) => element.id == nextId),
      bullet = slidebBulletsRef.current.querySelectorAll("span"),
      activeBullet = [...bullet].find(
        (element) => element.dataset.id == ~~imageNextRef.current.dataset.id
      );

    // Add Classes to Anime Photos
    slideNextRef.current.classList.add("anime-next-in");
    slideActiveRef.current.classList.add("anime-in");

    // To Remove the Class that anime in
    setTimeout(function () {
      slideActiveRef.current.classList.remove("anime-in");
      slideNextRef.current.classList.remove("anime-next-in");
    }, 960);

    // To Populate the Active and Next Slide

    imageActiveRef.current.src = imageNextRef.current.src;
    imageActiveRef.current.dataset.id = imageNextRef.current.dataset.id;

    if (imageActiveRef.current.dataset.id == images.length - 1) {
      imageNextRef.current.src = images[0].image;
      imageNextRef.current.dataset.id = images[0].id;
    } else {
      imageNextRef.current.src = nextPicture.image;
      imageNextRef.current.dataset.id = nextPicture.id;
    }

    // To Add Active bullets
    bullet.forEach(function (el) {
      el.classList.remove("selected");
    });
    activeBullet.classList.add("selected");
  };

  const prevPhoto = () => {
    const prevId = ~~imageActiveRef.current.dataset.id - 1,
      prevPicture = images.find((element) => element.id == prevId),
      bullet = slidebBulletsRef.current.querySelectorAll("span");

    let activeBullet = [...bullet].find(
      (element) => element.dataset.id == prevId
    );

    // Add Classes to Anime Photos

    slideActiveRef.current.classList.add("anime-out");
    slideNextRef.current.classList.add("anime-next-out");

    // To Remove the Class that anime in
    setTimeout(function () {
      slideActiveRef.current.classList.remove("anime-out");
      slideNextRef.current.classList.remove("anime-next-out");
    }, 960);

    // To Populate the Active and Next Slide
    if (imageActiveRef.current.dataset.id == 0) {
      imageNextRef.current.src = imageActiveRef.current.src;
      imageNextRef.current.dataset.id = imageActiveRef.current.dataset.id;
      imageActiveRef.current.src = images[images.length - 1].image;
      imageActiveRef.current.dataset.id = images[images.length - 1].id;
      activeBullet = [...bullet].find(
        (element) => element.dataset.id == imageActiveRef.current.dataset.id
      );
    } else {
      imageNextRef.current.src = imageActiveRef.current.src;
      imageNextRef.current.dataset.id = imageActiveRef.current.dataset.id;
      imageActiveRef.current.src = prevPicture.image;
      imageActiveRef.current.dataset.id = prevPicture.id;
    }

    // To Add Active bullets
    bullet.forEach(function (el) {
      el.classList.remove("selected");
    });
    activeBullet.classList.add("selected");
  };

  return (
    <SwiperSliderStyled>
      <div className="main-heading">
        <article>
          <h1 className="site-title"><a href="/">Dan Studio</a></h1>
        </article>

        <div className="slide-container">
          <div className="slide-wrapper">
            <div className="slide active" ref={slideActiveRef}>
              <img
                src="/assets/slider1.jpg"
                alt=""
                data-id=""
                ref={imageActiveRef}
              />
            </div>
            <div className="slide next" ref={slideNextRef}>
              <img
                src="/assets/slider2.jpg"
                alt=""
                data-id=""
                ref={imageNextRef}
              />
            </div>
          </div>

          <div className="slide-arrows">
            <div className="button-prev" onClick={prevPhoto}></div>

            <div className="button-next" onClick={nextPhoto}></div>
          </div>

          <div className="slide-bullets" ref={slidebBulletsRef}>
            <span className="bullet selected" data-id="0"></span>
            <span className="bullet" data-id="1"></span>
            <span className="bullet" data-id="2"></span>
            <span className="bullet" data-id="3"></span>
          </div>
        </div>
      </div>
    </SwiperSliderStyled>
  );
};

export default SwiperSlider;
