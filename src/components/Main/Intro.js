import styles from "./Main.module.scss";

const Intro = () => {
  return (
    <section className={styles["module"] + " " + styles["album"]}>
      <h3 className={styles["section-title"]}>
        <b>Body &</b>
        <span>Pole</span>
      </h3>
      <div className={styles["content"]}>
        <div className={styles["cover"]}>
          <div className={styles["cover-img"]}>
            <img
              src="/assets/body-pole.jpg"
              alt=""
            />
          </div>
        </div>
        <div className={styles["tracks"]}>
          <ul className={styles["tracklist"]}>
            <li>
              <article>
                <p>
                  Whether you’ve never tried aerial, or you spend half your day
                  upside down, when you spend time with us you will evolve. You
                  will unleash parts of yourself yet unknown. Strengths will
                  surface. Muscles will transform. And you will own every inch
                  of it.
                </p>
              </article>
            </li>

            <li>
              <article>
                <p>
                  Want to nail that inversion? Looking to get deeper in your
                  bend? Get unlimited access to our online classes, designed to
                  give you the best of our in-studio expertise, for everyday use
                  at home.
                </p>
              </article>
            </li>
          </ul>
        </div>

        <div className={styles["button-container"]}>
          <a
            href="#"
            target="_blank"
          >
            <button className={styles["btn"]}>Claim your space</button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Intro;
