import styles from "./Main.module.scss";

const FollowUs = () => {
  return (
    <section className={styles["module"] + " " + styles["follow"]}>
      <h3 className={styles["section-title"]}>
        <b>Follow</b>
        <span>Us</span>
      </h3>
      <div className={styles["content"]}>
        <div className={styles["newsletter"]}>
          <p className={styles["social-title"]}>Newsletter</p>

          <img
            src="/assets/new-letter-box-bg.jpg"
            alt=""
          />

          <div className={styles["form"]}>
            <input type="text" placeholder="email" />
            <i className={styles["send"]}></i>
          </div>
        </div>
        <div className={styles["social"]}>
          <p className={styles["social-title"]}>Social</p>
          <div className={styles["social-icons"]}>
            <a
              className={styles["network"]}
              href="https://www.facebook.com"
              target="_blank"
            >
              <img src="/assets/facebook.svg" alt="" />
              <p className={styles["social-name"]}>facebook</p>
            </a>
            <a
              className={styles["network"]}
              href="https://www.youtube.com/user/AngeleAmbre"
              target="_blank"
            >
              <img src="/assets/youtube.svg" alt="" />
              <p className={styles["social-name"]}>youtube</p>
            </a>
            <a
              className={styles["network"]}
              href="https://www.instagram.com"
              target="_blank"
            >
              <img src="/assets/instagram.svg" alt="" />
              <p className={styles["social-name"]}>instagram</p>
            </a>
            <a
              className={styles["network"]}
              href="https://twitter.com"
              target="_blank"
            >
              <img src="/assets/twitter.svg" alt="" />
              <p className={styles["social-name"]}>twitter</p>
            </a>
          </div>
          <img src="/assets/social-box-bg.jpg" alt="" />
        </div>
      </div>
    </section>
  );
};

export default FollowUs;
