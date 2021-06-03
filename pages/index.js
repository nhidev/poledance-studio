import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

import { Grid, Row, Col } from "react-styled-flexboxgrid";

const Homepage = () => {
  const { t } = useTranslation("common");

  return (
    <>
      <main>
        <Header heading={t("h1")} title={t("title")} />
        <br/>
        <Grid className="grid">
          <Row className="row">
            <Col className="col"  xs={12} sm={6} md={4} lg={3}>Col 01</Col>
            <Col className="col"  xs={12} sm={6} md={4} lg={3}>Col 02</Col>
            <Col className="col"  xs={12} sm={6} md={4} lg={3}>Col 03</Col>
            <Col className="col"  xs={12} sm={6} md={4} lg={3}>Col 04</Col>
            </Row>
        </Grid>
      </main>
      <Footer />
    </>
  );
};

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common", "footer"])),
  },
});

export default Homepage;
