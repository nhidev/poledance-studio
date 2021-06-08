import styled from "styled-components";
import { colors } from "../../styles/theme";
import { respondTo } from "../../styles/mixins";

import React, { useRef } from "react";

const LatestVideosStyled = styled.section`
  position: relative;

  &:before {
    content: "";
    position: absolute;
    width: 16%;
    max-width: 390px;
    height: 630px;
    background-color: ${colors.m01};
    left: 0;
    animation: beforeShape2 6s ease infinite alternate both;

    @keyframes beforeShape2 {
      0% {
        transform: translate(-50px, 0px);
      }

      100% {
        transform: translate(0px, 50px);
      }
    }

    ${respondTo.md`
      display: none;
    `}
  }

  .content {
    display: grid;
    grid-template-columns: repeat(3, 1fr);

    ${respondTo.sm`
      grid-template-columns: 1fr;
      grid-row-gap: 10px;
    `}

    .video-item {
      background-color: ${colors.m01};
      height: 430px;
      overflow: hidden;
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
      cursor: pointer;
      width: calc(100% - 1px);

      &:last-child {
        width: 100%;
      }

      ${respondTo.xl`
        height: 320px;
      `}

      ${respondTo.md`
        height: 240px;
      `}

      ${respondTo.sm`
        width: 100%;
        height: 200px;
        margin-bottom: 1px;
      `}

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        filter: grayscale(100%);
        -webkit-filter: grayscale(100%);
        transition: all 0.8s ease-out;
      }

      .video-title {
        position: absolute;
        z-index: 3;
        color: transparent;
        -webkit-text-stroke: 1px white;
        font-weight: 900;
        font-size: 40px;
        letter-spacing: 1.5px;
        text-transform: uppercase;
        transition: all 0.6s ease;
        width: 80%;
        text-align: center;
        height: 100px;
        display: flex;
        justify-content: center;
        align-items: center;

        ${respondTo.lg`
          font-size: 28px;
        `}
      }

      .video-icon {
        position: absolute;
        opacity: 0;
        color: white;
        transition: all 0.4s ease;
        z-index: 3;
        transform: translateY(100px);
        width: 32px;
        height: 32px;
        display: block;
        background-image: url("/assets/icon-video-play.svg");

        ${respondTo.sm`
          transform: translateY(80px);
        `}
      }

      &:before,
      &:after {
        content: "";
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        transition: all 0.6s ease;
      }

      &:before {
        background-color: ${colors.neu06};
        opacity: 0.8;
        z-index: 1;
      }

      &:after {
        background-color: ${colors.m01};
        opacity: 0.2;
        z-index: 2;
      }

      &:hover {
        .video-title {
          color: white;
          transform: translateY(-10px);
        }

        .video-icon {
          opacity: 1;
          transform: translateY(60px);

          ${respondTo.sm`
            transform: translateY(40px);
          `}
        }

        img {
          transform: scale(1.2);
        }

        &:before {
          opacity: 0.4;
        }

        &:after {
          opacity: 0.8;
        }
      }
    }
  }

  .modal-video {
    z-index: 5;
    position: fixed;
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    visibility: hidden;

    &:before,
    &:after {
      content: "";
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      transition: all 0.4s ease;
      opacity: 0;
    }

    &:before {
      background-color: ${colors.neu06};
    }

    &:after {
      background-color: ${colors.m01};
      z-index: -1;
    }

    .wrapper-video {
      width: calc(80vw - 80px);
      max-width: 1280px;
      height: calc(80vh - 80px);
      background-color: white;
      position: absolute;
      top: calc(50% + 100px);
      left: 50%;
      transform: translate(-50%, -50%) perspective(100em) rotateX(20deg);
      transition: all 0.4s ease;
      opacity: 0;
      display: flex;
      justify-content: center;
      align-items: center;

      ${respondTo.sm`
        width: initial;
        height: initial;
      `}

      .close-video {
        width: 32px;
        height: 32px;
        position: fixed;
        background-image: url("/assets/close-icon.svg");
        right: 40px;
        top: 40px;
        cursor: pointer;
        transition: all 0.4s ease;

        &:hover {
          transform: rotate(90deg);
        }

        ${respondTo.sm`
          right: 20px;
          top: 20px;
        `}
      }

      .video-container {
        width: calc(100% - 80px);
        max-width: 820px;
        margin: auto;

        ${respondTo.sm`
          width: calc(100% - 40px);
        `}

        .video-code {
          position: relative;
          padding-bottom: 56.25%;
          padding-top: 30px;
          height: 0;
          overflow: hidden;

          iframe {
            transform: translateY(50px);
            opacity: 0;
            transition: all 0.6s ease;
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
          }
        }
      }
    }

    &.video-open {
      transition: all 0.6s ease;
      visibility: visible;

      &:before {
        opacity: 0.8;
      }

      &:after {
        opacity: 0.2;
      }

      .wrapper-video {
        width: 90vw;
        height: 80vh;
        opacity: 1;
        top: 50%;
        transform: translate(-50%, -50%) perspective(0em) rotateX(0deg);

        ${respondTo.sm`
          width: calc(100% - 40px);
          height: auto;
          padding: 80px 0;
        `}

        .video-container {
          .video-code {
            iframe {
              transform: translateY(0px);
              background-color: ${colors.m01};
              transition: all 0.4s 0.4s ease;
              opacity: 1;
            }
          }
        }
      }
    }
  }
`;

const LatestVideos = () => {
  const videoContentRef = useRef(null);
  const closeVideoRef = useRef(null);
  const modalVideoRef = useRef(null);
  const videoFrameRef = useRef(null);
  // open modal video

  const openVideo = (e) => {
    const videoSrc = e.currentTarget.dataset.video;
    document.querySelector("body").classList.add("no-scroll");
    modalVideoRef.current.classList.add("video-open");
    videoFrameRef.current.src = videoSrc;
  };

  const closeVideo = () => {
    document.querySelector("body").classList.remove("no-scroll");
    modalVideoRef.current.classList.remove("video-open");
    videoFrameRef.current.src = "";
  };

  return (
    <LatestVideosStyled className="videos">
      <h3 className="section-title">
        <span>Latest</span>
        <b>videos</b>
      </h3>
      <div className="content" ref={videoContentRef}>
        <a
          className="video-item"
          data-video="/assets/pole-dance-video1.mp4"
          data-url="/assets/pole-dance-video1.mp4"
          onClick={openVideo}
        >
          {/* <p className="video-title">Flou</p> */}
          <span className="video-icon"></span>
          <img src="/assets/pole-dance-bg-video1.jpg" alt="" />
        </a>

        <a
          className="video-item"
          data-video="/assets/pole-dance-video2.mp4"
          data-url="/assets/pole-dance-video2.mp4"
          onClick={openVideo}
        >
          {/* <p className="video-title">balance ton quoi</p> */}
          <span className="video-icon"></span>
          <img src="/assets/pole-dance-bg-video2.jpg" alt="" />
        </a>

        <a
          className="video-item"
          data-video="/assets/pole-dance-video3.mp4"
          data-url="/assets/pole-dance-video3.mp4"
          onClick={openVideo}
        >
          {/* <p className="video-title">tout oublier</p> */}
          <span className="video-icon"></span>
          <img src="/assets/pole-dance-bg-video3.jpg" alt="" />
        </a>
      </div>

      <div className="modal-video" ref={modalVideoRef}>
        <div className="wrapper-video">
          <i
            className="close-video"
            ref={closeVideoRef}
            onClick={closeVideo}
          ></i>
          <div className="video-container">
            <div className="video-code">
              <iframe
                width="1920"
                height="1080"
                src=""
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                ref={videoFrameRef}
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </LatestVideosStyled>
  );
};

export default LatestVideos;
