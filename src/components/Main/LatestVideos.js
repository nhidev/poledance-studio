import styles from "./Main.module.scss";
import React, { useEffect, useRef } from "react";

const LatestVideos = () => {
  const videoContentRef = useRef(null);
  const closeVideoRef = useRef(null);
  const modalVideoRef = useRef(null);
  const videoFrameRef = useRef(null);
  // open modal video

  const openVideo = (e) => {
    const videoSrc = e.currentTarget.dataset.video;
    document.querySelector("body").classList.add(styles['no-scroll']);
    modalVideoRef.current.classList.add(styles['video-open']);
    videoFrameRef.current.src = videoSrc;
  };

  const closeVideo = () => {
    document.querySelector("body").classList.remove(styles['no-scroll']);
    modalVideoRef.current.classList.remove(styles['video-open']);
    videoFrameRef.current.src = "";
  };

  return (
    <section className={styles.videos}>
      <h3 className={styles["section-title"]}>
        <span>Latest</span>
        <b>videos</b>
      </h3>
      <div className={styles.content} ref={videoContentRef}>
        <a
          className={styles["video-item"]}
          data-video="https://www.youtube.com/embed/D6Wi3SmmnAE"
          data-url="https://www.youtube.com/watch?v=D6Wi3SmmnAE"
          onClick={openVideo}
        >
          <p className={styles["video-title"]}>Flou</p>
          <span className={styles["video-icon"]}></span>
          <img src="/assets/video-bg-01.jpg.jpg" alt="" />
        </a>

        <a
          className={styles["video-item"]}
          data-video="https://www.youtube.com/embed/Hi7Rx3En7-k"
          data-url="https://www.youtube.com/watch?v=Hi7Rx3En7-k"
          onClick={openVideo}
        >
          <p className={styles["video-title"]}>balance ton quoi</p>
          <span className={styles["video-icon"]}></span>
          <img src="/assets/video-bg-02.jpg" alt="" />
        </a>

        <a
          className={styles["video-item"]}
          data-video="https://www.youtube.com/embed/Fy1xQSiLx8U"
          data-url="https://www.youtube.com/watch?v=Fy1xQSiLx8U"
          onClick={openVideo}
        >
          <p className={styles["video-title"]}>tout oublier</p>
          <span className={styles["video-icon"]}></span>
          <img src="/assets/video-bg-03.jpg" alt="" />
        </a>
      </div>

      <div className={styles["modal-video"]} ref={modalVideoRef}>
        <div className={styles["wrapper-video"]}>
          <i className={styles["close-video"]} ref={closeVideoRef} onClick={closeVideo} ></i>

          <div className={styles["video-container"]}>
            <div className={styles["video-code"]}>
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
    </section>
  );
};

export default LatestVideos;
