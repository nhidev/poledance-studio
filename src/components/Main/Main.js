import styled from "styled-components";
import { colors } from "../../styles/theme";
import { respondTo } from "../../styles/mixins";
import ClassSchedule from "./ClassSchedule";
import LatestVideos from "./LatestVideos";
import Intro from "./Intro";
import DanceOptions from "./DanceOptions";
import FollowUs from "./FollowUs";

const MainStyled = styled.main``;

const Main = () => {
  return (
    <MainStyled>
      <ClassSchedule />
      <LatestVideos />
      <Intro />
      <DanceOptions />
      <FollowUs />
    </MainStyled>
  );
};

export default Main;
