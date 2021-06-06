import styled from "styled-components";
import { colors } from "../../styles/theme";
import { respondTo } from "../../styles/mixins";

const ScheduleSectionStyled = styled.section`
  &:before {
    content: "";
    position: absolute;
    width: 20%;
    height: 520px;
    border: 1px solid ${colors.m01};
    right: 0;
    animation: beforeShape3 6s ease infinite alternate both;

    @keyframes beforeShape3 {
      0% {
        transform: translate(50px, 50px);
      }

      100% {
        transform: translate(0px, -50px);
      }
    }

    ${respondTo.md`
      display: none;
    `}
  }

  .full-content {
    width: 100%;
    margin: auto;
    .block {
      grid-column: 1 / 13;
       h1 {
         margin-bottom: 20px;
       } 
      .full-box {
        display: grid;
        grid-template-columns: 1fr;
        grid-column-gap: 4%;

        ${respondTo.lg`
          grid-row-gap: 20px;
        `}

        ${respondTo.sm`
          padding: 20px 0 20px 0;
        `}
      }
    }
    article {
      p {
        color: #000;
      }
    }
  }

  .content {
    grid-template-rows: auto auto auto;
    margin-bottom: 100px;
    ${respondTo.sm`
      justify-items: center;
      grid-template-columns: 1fr;
      width: 100%;
    `}

    &.rtl-dir {
      .cover {
        grid-column: 7 / 11;
      
        ${respondTo.sm`
            grid-column: 1;
        `}
      }
      .item-wrap {
        grid-column: 1 / 8;
        
        ${respondTo.sm`
            grid-column: 1;
        `}
        .item {
          grid-column: 1 / 8;
        }
      }
    } 

    .cover {
      grid-column: 1 / 5;
      grid-row: 1 / 2;
      z-index: 1;
      height: fit-content;

      ${respondTo.sm`
        grid-column: 1;
        width: 100%;
        height: 200px;
      `}

      .cover-img {
        width: 100%;
        padding-bottom: 100%;
        overflow: hidden;
        position: relative;
        display: flex;
        justify-content: center;

        ${respondTo.sm`
          width: 100%;
          height: 200px;
          padding: 0;
        `}

        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          position: absolute;

          ${respondTo.sm`
            width: 200px;
            height: 200px;
          `}
        }
      }
    }

    .item-wrap {
      grid-column: 3 / 11;
      grid-row: 1 / 3;
      transform: translateY(50px);
      position: relative;
      display: grid;
      grid-template-columns: repeat(8, 1fr);
      grid-column-gap: 20px;

      ${respondTo.sm`
        width: 100%;
        grid-column: 1;
        grid-template-columns: 1fr;
      `}

      &:before {
        width: 100%;
        height: 100%;
        content: "";
        position: absolute;
        background-image: ${colors.g01};
        opacity: 0.5;
        z-index: -1;
      }

      .item {
        grid-column: 3 / 9;
        padding: 80px 0;
        z-index: 1;
        padding-right: 20px;

        ${respondTo.md`
          grid-column: 3 / 9;
        `}

        ${respondTo.sm`
          padding: 190px 0 40px 0;
          grid-column: 1;
        `}
      }
    }
   
  }

  article {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 16px;
    line-height: 1.6;
    letter-spacing: 0.3px;
    padding: 0px 20px;
    transition: all 0.6s ease;
    position: relative;
    margin: 0 10% 20px;
    cursor: default;

    ${respondTo.lg`
      margin: 0 6%;
    `}

    ${respondTo.md`
      margin: 0;
    `}

    ${respondTo.sm`
      margin: 0 10%;
      padding: 0px;
    `}

    ${respondTo.xs`
      margin: 0 20px;
      font-size: 12px;
    `}
      
    p {
      color: #fff;
      transition: all 0.2s ease;
      margin-bottom: 10px;
      
      ${respondTo.sm`
        margin-bottom: 5px;
    ` }
    }
  }
`;

const ScheduleSection = () => {
  return (
    <ScheduleSectionStyled className="module">
       <h3 className="section-title">
        <b>Class</b>
        <span>Timetable</span>
      </h3>
      <div className="content full-content">
        <div className="block">
          <article className="full-box timetable-container">
          <div className="week-wrap">
            <div className="day">
              <div className="weekday">Monday</div>
              <div className="class-container color--scheme2">
                <span className="time">19:15 – 20:20</span>
                <span className="name">Aerial Hoop</span>
                <span className="level">Nana Class</span>
              </div>
            </div>
            <div className="day">
              <div className="weekday">Tuesday</div>
              <div className="class-container">
                <span className="time">12:00 – 13:15</span>
                <span className="name">Pole Dance</span>
                <span className="level">Dan Class</span>
              </div>
              <div className="class-container">
                <span className="time">17:10 – 18:30</span>
                <span className="name">Pole Dance</span>
                <span className="level">Dan Class</span>
              </div>
              <div className="class-container">
                <span className="time">18:30 – 20:00</span>
                <span className="name">Pole Dance</span>
                <span className="level">Dan Class</span>
              </div>
              
              <div className="class-container color--scheme2">
                <span className="time">20:00 – 21:15</span>
                <span className="name">Pole Dance</span>
                <span className="level">Nana Class</span>
              </div>
              <div className="class-container color--scheme2">
                <span className="time">21:00 – 22.30</span>
                <span className="name">Pole Dance</span>
                <span className="level">Nana Class</span>
              </div>
            </div>
            <div className="day">
              <div className="weekday">Wednesday</div>
              <div className="class-container">
                <span className="time">12:00 - 13:15</span>
                <span className="name">Pole Dance</span>
                <span className="level">Dan Class</span>
              </div>
              <div className="class-container color--scheme2">
                <span className="time">19:15 - 20:20</span>
                <span className="name">Pole Dance</span>
                <span className="level">Nana Class</span>
              </div>
            </div>
            <div className="day">
              <div className="weekday">Thursday</div>
              <div className="class-container">
                <span className="time">12:00 – 13:15</span>
                <span className="name">Pole Dance</span>
                <span className="level">Dan Class</span>
              </div>
              <div className="class-container">
                <span className="time">17:10 – 18:30</span>
                <span className="name">Pole Dance</span>
                <span className="level">Dan</span>
              </div>
              <div className="class-container">
                <span className="time">18:30 – 20:00</span>
                <span className="name">Pole Dance</span>
                <span className="level">Dan Class</span>
              </div>
              <div className="class-container color--scheme2">
                <span className="time">20:00 – 21:15</span>
                <span className="name">Pole Dance</span>
                <span className="level">Nana Class</span>
              </div>
              <div className="class-container color--scheme2">
                <span className="time">21:15 – 22.30</span>
                <span className="name">Pole Fitness</span>
                <span className="level">Nana Class</span>
              </div>
            </div>
            <div className="day">
              <div className="weekday">Friday</div>
              <div className="class-container">
                <span className="time">12:00 – 13:15</span>
                <span className="name">Pole Dance</span>
                <span className="level">Dan Class</span>
              </div>
              <div className="class-container color--scheme2">
                <span className="time">19:15 – 20:20</span>
                <span className="name">Aerial Hoop</span>
                <span className="level">Nana Class</span>
              </div>
            </div>
            <div className="day">
              <div className="weekday">Saturday</div>
              <div className="class-container">
                <span className="time">12:00 – 13:15</span>
                <span className="name">Pole Dance</span>
                <span className="level">Dan Class</span>
              </div>
              <div className="class-container color--scheme2">
                <span className="time">17:10 – 18:30</span>
                <span className="name">Pole Dance</span>
                <span className="level">Nana Class</span>
              </div>
              <div className="class-container color--scheme2">
                <span className="time">18:30 – 20:00</span>
                <span className="name">Pole Dance</span>
                <span className="level">Nana Class</span>
              </div>
              <div className="class-container">
                <span className="time">20:00 – 21:15</span>
                <span className="name">Aerial Hoop</span>
                <span className="level">Dan Class</span>
              </div>
            </div>
            <div className="day">
              <div className="weekday">Sunday</div>
              <div className="class-container">
                <span className="time">12:00 – 13:15</span>
                <span className="name">Pole Fitness</span>
                <span className="level">Dan Class</span>
              </div>
              <div className="class-container color--scheme2">
                <span className="time">7:10 – 18:20</span>
                <span className="name">Aerial Hoop</span>
                <span className="level">Nana Class</span>
              </div>
            </div>
          </div>
     
          </article>
        </div>
      </div>
    </ScheduleSectionStyled>
  );
};

export default ScheduleSection;
