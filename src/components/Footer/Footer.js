import styles from './Footer.module.scss';
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";

const Footer = () => {
  const { t } = useTranslation("footer");
  const router = useRouter();
  const { locale } = router;

  const changeLanguage = (e) => {
    const locale = e.target.value;
    router.push(router.pathname, router.asPath, { locale });
  };

  return (
    <footer className={styles.footer}>
    <div className={styles.content}>
      <article>
        <p className={styles.text}>
          Dan Poledance Studio @ 2021 — all rights reserved
        </p>
        <p className={styles.credits}>
          design by{" "}
          <a href="https://rafaelalucas.com" target="_blank">
            <span>3m4</span>
          </a>
        </p>
        <select onChange={changeLanguage} defaultValue={locale}>
        <option value="en">
          EN
        </option>
        <option value="vn">
          VN
        </option>
      </select>
      </article>
    </div>
  </footer>
  )
}

export default Footer;