import styled from "styled-components";
import { colors } from "../styles/theme";
import { respondTo } from "../styles/mixins";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import IntructorSection from "../components/About/IntructorSection";
import FollowUs from "../components/Main/FollowUs";

const AboutStyled = styled.main`
`;

const About = () => {  const { t } = useTranslation("common");

  return (
    <AboutStyled>
      {/* <StudioSection /> */}
       <IntructorSection />
      <FollowUs />
    </AboutStyled>
  )
}

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common", "footer"])),
  },
});

export default About;
