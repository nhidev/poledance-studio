import styles from "./Main.module.scss";

const LatestVideos = () => {
  return (
    <section className={styles["videos"]}>
      <h3 className={styles["section-title"]}>
        <span>Latest</span>
        <b>videos</b>
      </h3>
      <div className={styles["content"]}>
        <a
          className={styles["video-item"]}
          data-video="https://www.youtube.com/embed/D6Wi3SmmnAE"
          data-url="https://www.youtube.com/watch?v=D6Wi3SmmnAE"
        >
          <p className={styles["video-title"]}>Flou</p>
          <span className={styles["video-icon"]}></span>
          <img src="/assets/video-bg-01.jpg.jpg" alt="" />
        </a>

        <a
          className={styles["video-item"]}
          data-video="https://www.youtube.com/embed/Hi7Rx3En7-k"
          data-url="https://www.youtube.com/watch?v=Hi7Rx3En7-k"
        >
          <p className={styles["video-title"]}>balance ton quoi</p>
          <span className={styles["video-icon"]}></span>
          <img src="/assets/video-bg-02.jpg" alt="" />
        </a>

        <a
          className={styles["video-item"]}
          data-video="https://www.youtube.com/embed/Fy1xQSiLx8U"
          data-url="https://www.youtube.com/watch?v=Fy1xQSiLx8U"
        >
          <p className={styles["video-title"]}>tout oublier</p>
          <span className={styles["video-icon"]}></span>
          <img src="/assets/video-bg-03.jpg" alt="" />
        </a>
      </div>

      <div className={styles["modal-video"]}>
        <div className={styles["wrapper-video"]}>
          <i className={styles["close-video"]}></i>

          <div className={styles["video-container"]}>
            <div className={styles["video-code"]}>
              <iframe
                width="1920"
                height="1080"
                src=""
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LatestVideos;
