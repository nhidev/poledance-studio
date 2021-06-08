import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Head from 'next/head'
import Main from '../components/Main';

const Home = () => {
  const { t } = useTranslation("common");

  return (
    <div>
      <Head>
        <title>Dan Poledance Studio</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content={t('homeIntroductPar1')}
        ></meta>
      </Head>
      <Main />
    </div>
  )
}

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common", "home"])),
  },
});

export default Home;
