import React, { useEffect, useRef } from "react";

import styles from "./Header.module.scss";
import { useRouter } from "next/router";

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
      bullet = slidebBulletsRef.current.querySelectorAll('span'),
      activeBullet = [...bullet].find(
        (element) => element.dataset.id == ~~imageNextRef.current.dataset.id
      );

    // Add Classes to Anime Photos
    slideNextRef.current.classList.add(styles["anime-next-in"]);
    slideActiveRef.current.classList.add(styles["anime-in"]);

    // To Remove the Class that anime in
    setTimeout(function () {
      slideActiveRef.current.classList.remove(styles["anime-in"]);
      slideNextRef.current.classList.remove(styles["anime-next-in"]);
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
      el.classList.remove(styles.selected);
    });
    activeBullet.classList.add(styles.selected);
  };

  const prevPhoto = () => {
    const prevId = ~~imageActiveRef.current.dataset.id - 1,
      prevPicture = images.find((element) => element.id == prevId),
      bullet = slidebBulletsRef.current.querySelectorAll('span');
     
    let activeBullet = [...bullet].find(
      (element) => element.dataset.id == prevId
    );

    // Add Classes to Anime Photos

    slideActiveRef.current.classList.add(styles["anime-out"]);
    slideNextRef.current.classList.add(styles["anime-next-out"]);

    // To Remove the Class that anime in
    setTimeout(function () {
      slideActiveRef.current.classList.remove(styles["anime-out"]);
      slideNextRef.current.classList.remove(styles["anime-next-out"]);
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
      el.classList.remove(styles.selected);
    });
    activeBullet.classList.add(styles.selected);
  };

  return (
    <>
      <header className={styles.header}>
        <div className={styles["main-heading"]}>
          <article>
            <h1 className={styles["site-title"]}>Dan Studio</h1>
          </article>

          <div className={styles["slide-container"]}>
            <div className={styles["slide-wrapper"]}>
              <div
                className={styles["slide"] + " " + styles["active"]}
                ref={slideActiveRef}
              >
                <img
                  src="/assets/slider1.jpg"
                  alt=""
                  data-id=""
                  ref={imageActiveRef}
                />
              </div>
              <div className={styles["slide"] + " " + styles["next"]} ref={slideNextRef}>
                <img
                  src="/assets/slider2.jpg"
                  alt=""
                  data-id=""
                  ref={imageNextRef}
                />
              </div>
            </div>

            <div className={styles["slide-arrows"]}>
              <div className={styles["button-prev"]} onClick={prevPhoto}></div>

              <div className={styles["button-next"]} onClick={nextPhoto}></div>
            </div>

            <div className={styles["slide-bullets"]}  ref={slidebBulletsRef}>
              <span
                className={styles["bullet"] + " " + styles["selected"]}
                data-id="0"
              ></span>
              <span className={styles.bullet} data-id="1"></span>
              <span className={styles.bullet} data-id="2"></span>
              <span className={styles.bullet} data-id="3"></span>
            </div>

          </div>
        </div>
      </header>
    </>
  );
};

export default SwiperSlider;
