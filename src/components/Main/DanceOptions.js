import styles from "./Main.module.scss";

const DanceOptions = () => {
  return (
    <section className={styles["module"] + " " + styles["join-class"]}>
      <h3 className={styles["section-title"]}>
        <span>Join the</span>
        <b>Circus</b>
      </h3>
      <div className={styles["content"]}>
        <div className={styles["col"] + " " + styles["first"]}>
          <p className={styles["title"] + " " + styles["first-title"]}>
            AERIAL
          </p>

          <img
            src="/assets/aerial-dancing.jpg"
            alt=""
          />

          <div>
            Lorem ipsum dolor sit amet consec tetuer adipiscing elit nean sit
            eget commodo ligula.
          </div>
        </div>
        <div className={styles["col"] + " " + styles["mid"]}>
          <p className={styles["title"] + " " + styles["mid-title"]}>POLE</p>

          <img
            src="/assets/pole-dancing.jpg"
            alt=""
          />

          <div>
            Lorem ipsum dolor sit amet consec tetuer adipiscing elit nean sit
            eget commodo ligula.
          </div>
        </div>
        <div className={styles["col"] + " " + styles["last"]}>
          <p className={styles["title"] + " " + styles["last-title"]}>
            AERIAL RING
          </p>
          <div>
            Lorem ipsum dolor sit amet consec tetuer adipiscing elit nean sit
            eget commodo ligula.
          </div>
          <img
            src="/assets/aerial-pole-dancing.jpg"
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export default DanceOptions;
