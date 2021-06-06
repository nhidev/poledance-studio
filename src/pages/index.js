import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Head from 'next/head'
import Main from '../components/Main';

const Home = () => {
  const { t } = useTranslation("common");

  return (
    <div>
      <Head>
        <title>Dan Studio</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Use Sass to start your Next.js app with CSS superpowers!"
        ></meta>
      </Head>
      <Main />
    </div>
  )
}

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common", "footer"])),
  },
});

export default Home;
