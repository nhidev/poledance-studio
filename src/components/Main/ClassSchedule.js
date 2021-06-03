import styles from "./Main.module.scss";

const ClassSchedule = () => {
  return (
    <section className={styles["module"] + " " + styles["tour-list"]}>
      <h3 className={styles["section-title"]}>
        <b>Class</b>
        <span>Schedule</span>
      </h3>
      <div className={styles["content"]}>
        <ul className={styles["shows"]}>
          <li>
            <date>06 Nov 2019</date>
            <p className={styles["place"]}>Le Millesium</p>
            <p className={styles["country"]}>Epernay, France</p>
            <div className={styles["button-container"]}>
              <a
                className={styles["btn-rsvp"]}
                href="#"
                target="_blank"
              >
                RSVP
              </a>
              <a
                className={styles["btn-buy"]}
                href="#"
                target="_blank"
              >
                Buy tickets
              </a>
            </div>
          </li>
          <li>
            <date>06 Nov 2019</date>
            <p className={styles["place"]}>Le Millesium</p>
            <p className={styles["country"]}>Epernay, France</p>
            <div className={styles["button-container"]}>
              <a
                className={styles["btn-rsvp"]}
                href="#"
                target="_blank"
              >
                RSVP
              </a>
              <a
                className={styles["btn-buy"]}
                href="#"
                target="_blank"
              >
                Buy tickets
              </a>
            </div>
          </li>

          <li>
            <date>06 Nov 2019</date>
            <p className={styles["place"]}>Le Millesium</p>
            <p className={styles["country"]}>Epernay, France</p>
            <div className={styles["button-container"]}>
              <a
                className={styles["btn-rsvp"]}
                href="#"
                target="_blank"
              >
                RSVP
              </a>
              <a
                className={styles["btn-buy"]}
                href="#"
                target="_blank"
              >
                Buy tickets
              </a>
            </div>
          </li>

          <li>
            <date>06 Nov 2019</date>
            <p className={styles["place"]}>Le Millesium</p>
            <p className={styles["country"]}>Epernay, France</p>
            <div className={styles["button-container"]}>
              <a
                className={styles["btn-rsvp"]}
                href="#"
                target="_blank"
              >
                RSVP
              </a>
              <a
                className={styles["btn-buy"]}
                href="#"
                target="_blank"
              >
                Buy tickets
              </a>
            </div>
          </li>

          <li>
            <date>06 Nov 2019</date>
            <p className={styles["place"]}>Le Millesium</p>
            <p className={styles["country"]}>Epernay, France</p>
            <div className={styles["button-container"]}>
              <a
                className={styles["btn-rsvp"]}
                href="#"
                target="_blank"
              >
                RSVP
              </a>
              <a
                className={styles["btn-buy"]}
                href="#"
                target="_blank"
              >
                Buy tickets
              </a>
            </div>
          </li>

          <li>
            <date>06 Nov 2019</date>
            <p className={styles["place"]}>Le Millesium</p>
            <p className={styles["country"]}>Epernay, France</p>
            <div className={styles["button-container"]}>
              <a
                className={styles["btn-rsvp"]}
                href="#"
                target="_blank"
              >
                RSVP
              </a>
              <a
                className={styles["btn-buy"]}
                href="#"
                target="_blank"
              >
                Buy tickets
              </a>
            </div>
          </li>
        </ul>
        <a
          href="#"
          target="_blank"
        >
          {" "}
          <button className={styles["btn"]}>view all</button>
        </a>
      </div>
    </section>
  );
};

export default ClassSchedule;
