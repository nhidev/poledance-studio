import styled from "styled-components";
import { colors } from "../styles/theme";
import { respondTo } from "../styles/mixins";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import ScheduleSection from "../components/Schedule/Schedule";
import LineTime from "../components/Schedule/LineTime";

import FollowUs from "../components/Main/FollowUs";

const ScheduleStyled = styled.main`
  .timetable-wrap {
    width: 100%;
    margin: auto;
  }
  .timetable-container {
    margin-top: 1px;
    background-color: #fff;
    &:first-child {
      margin-top: 0;
    }
    h3 {
      width: 100%;
    }
  }

  .class-container {
    display: grid;
    background-color: #577f92;
    border-bottom: 1px solid rgba(0, 0, 0, 0.12);
    color: #fff;
  }

  .timetable-wrap {
    padding: 10px;
    max-width: 1260px;
  }

  .timetable-container {
    border-right: 1px solid darken(white, 10%);
    border-bottom: 1px solid darken(white, 10%);
    h3 {
      padding-left: 10px;
      background-color: darken(white, 10%);
      margin-bottom: 0;
      width: auto;
    }
  }

  .week-wrap {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
    border-top: 1px solid rgba(0, 0, 0, 0.12);
  }

  .day {
    border-right: 1px solid rgba(0, 0, 0, 0.12);
    &:last-child {
      border-right: none;
    }
    .weekday {
      font-weight: inherit;
      font-size: 16px;
      line-height: 2;
      text-align: center;
    }
  }

  .class-container {
    .time {
      padding: 0 10px;
      background-color: #577f92;
    }
    .name {
      padding: 0 10px;
      font-weight: bold;

      i {
        font-style: italic;
        font-weight: normal;
      }
    }
    .level {
      padding: 0 10px;
    }
    &:last-child {
      border-bottom: none;
    }
  }
  .color--scheme2 {
    color: #fff;
    background-color: #f6b067;
    .time {
      background-color: #f6b067;
    }
  }
  
 

  ${respondTo.sm`
    .timetable-container {
      grid-template-columns: 1fr 2fr 2fr;
    }

    .day {
      margin-top: 0.5em;
      &:first-child {
        margin-top: 0;
      }
    }
  `}

  ${respondTo.xs`
    .class-container {
      grid-template-columns: 1fr 2fr;
      .level {
        display: none;
      }
    }
  `}
`;

const Schedule = () => {
  const { t } = useTranslation("common");

  return (
    <ScheduleStyled>
      {/* <ScheduleSection /> */}
      <LineTime />
      <FollowUs />
    </ScheduleStyled>
  );
};

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common", "footer"])),
  },
});

export default Schedule;
