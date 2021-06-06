import styled from "styled-components";
import { colors } from "../styles/theme";
import { respondTo } from "../styles/mixins";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import ClassesSection from "../components/Classes/Classes";
import FollowUs from "../components/Main/FollowUs";

const ClassesStyled = styled.main`
`;

const Classes = () => {  const { t } = useTranslation("common");

  return (
    <ClassesStyled>
      <ClassesSection/>
      <FollowUs />
    </ClassesStyled>
  )
}

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common", "footer"])),
  },
});

export default Classes;
