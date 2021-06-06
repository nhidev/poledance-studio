import styled from "styled-components";
import { colors } from "../../styles/theme";
import { respondTo } from "../../styles/mixins";

const LineTimeStyled = styled.section`
  padding-top: 200px;
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
    `}
    }
  }

  .timeline {
    overflow: hidden;
  }
  /*----- TIMELINE ITEM -----*/
  .timeline-item {
    padding-left: 40px;
    position: relative;
  }
  .timeline-item:last-child {
    padding-bottom: 0;
  }

  /*----- TIMELINE INFO -----*/
  .timeline-info {
    font-size: 12px;
    font-weight: 350;
    letter-spacing: 3px;
    margin: 0 0 0.5em 0;
    text-transform: uppercase;
    white-space: nowrap;
    color: #768390;
  }

  /*----- TIMELINE MARKER -----*/
  .timeline-marker {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    width: 15px;
  }
  .timeline-marker:before {
    background: ${colors.neu06};
    border: 3px solid transparent;
    border-radius: 100%;
    content: "";
    display: block;
    height: 15px;
    position: absolute;
    top: 4px;
    left: 0;
    width: 15px;
    transition: background 0.3s ease-in-out, border 0.3s ease-in-out;
  }
  .timeline-marker:after {
    content: "";
    width: 3px;
    background: ${colors.neu06};
    display: block;
    position: absolute;
    top: 24px;
    bottom: 0;
    left: 9px;
  }
  .timeline-item:last-child .timeline-marker:after {
    content: none;
  }

  .timeline-item:not(.period):hover .timeline-marker:before {
    background: transparent;
    border: 3px solid ${colors.m01};
  }

  /*----- TIMELINE CONTENT -----*/
  .timeline-content {
    padding-bottom: 40px;
    &:before {
      content: "";
      position: absolute;
      top: 10px;
      background-color: ${colors.neu06};
      width: 500%;
      height: 2px;;
    }
    .time {
      margin-right: 10px;
    }
    .class-name {
      width: 90px;
      display: inline-grid;
      text-align: left;
    }
  }

  /*----- TIMELINE PERIOD -----*/
  .period {
    padding: 0;
  }
  .period .timeline-info {
    display: none;
  }
  .period .timeline-marker:before {
    background: transparent;
    content: "";
    width: 20px;
    height: auto;
    border: none;
    border-radius: 0;
    top: 0;
    bottom: 30px;
    position: absolute;
    border-top: 3px solid ${colors.neu06};
  }
  .period .timeline-marker:after {
    content: "";
    height: 32px;
    top: auto;
  }
  .period .timeline-content {
    padding: 40px 0 70px;
  }

  /*----------------------------------------------
        MOD: TIMELINE CENTERED
    ----------------------------------------------*/
  @media (min-width: 992px) {
    .timeline-item {
      padding-bottom: 40px;
      overflow: hidden;
    }
    .timeline-marker {
      position: absolute;
      left: 50%;
      margin-left: 9px;
    }
    .timeline-info,
    .timeline-content {
      width: 50%;
    }
    .timeline-item:nth-child(odd) .timeline-info {
      float: left;
      text-align: right;
      padding: 0 20px;
    }
    .timeline-item:nth-child(odd) .timeline-content {
      float: right;
      text-align: left;
      padding: 20px;
    }
    .timeline-item:nth-child(even) .timeline-info {
      float: right;
      text-align: left;
      padding: 0 20px;
    }
    .timeline-item:nth-child(even) .timeline-content {
      float: left;
      text-align: right;
      padding: 20px;
      &:before {
        left: 0;
        width: 50%;
      }
    }
    .timeline-item.period .timeline-content {
      float: none;
      padding: 0;
      width: 100%;
      text-align: center;
    }
    .timeline-item.period {
      padding-top: 5px;
    }
    .period .timeline-marker:after {
      height: 30px;
      bottom: 0;
      top: auto;
    }
  }

  /*----------------------------------------------
        MOD: MARKER OUTLINE
    ----------------------------------------------*/
  .marker-outline .timeline-marker:before {
    background: transparent;
    border-color: #ff6b6b;
  }
  .marker-outline .timeline-item:hover .timeline-marker:before {
    background: #ff6b6b;
  }
`;

const LineTime = () => {
  return (
    <LineTimeStyled className="module">
      <h3 className="section-title">
        <b>Class</b>
        <span>Timetable</span>
      </h3>
      <div className="content full-content">
        <div className="block">
          <article className="full-box timetable-container">
             <ul className="timeline">
                <li className="timeline-item">
                  <div className="timeline-info">
                    <span>Monday</span>
                  </div>
                  <div className="timeline-marker"></div>
                  <div className="timeline-content">
                    <ul>
                      <li>
                        <span className="time">19:15 – 20:20</span>
                        <span className="class-name">Nana Class</span>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="timeline-item">
                  <div className="timeline-info">
                    <span>Tuesday</span>
                  </div>
                  <div className="timeline-marker"></div>
                  <div className="timeline-content">
                    <ul>
                      <li>
                        <span className="time">12:00 – 13:15</span>
                        <span className="class-name">Dan Class</span>
                      </li>
                      <li>
                        <span className="time">17:10 – 18:30</span>
                        <span className="class-name">Dan Class</span>
                      </li>
                      <li>
                        <span className="time">18:30 – 20:00</span>
                        <span className="class-name">Dan Class</span>
                      </li>
                      <li>
                        <span className="time">20:00 – 21:15</span>
                        <span className="class-name">Nana Class</span>
                      </li>
                      <li>
                        <span className="time">21:15 – 22:30</span>
                        <span className="class-name">Nana Class</span>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="timeline-item">
                  <div className="timeline-info">
                    <span>Wednesday</span>
                  </div>
                  <div className="timeline-marker"></div>
                  <div className="timeline-content">
                    <ul>
                      <li>
                        <span>12:00 – 13:15</span>
                        <span className="class-name">Dan Class</span>
                      </li>
                      <li>
                        <span>19:15 – 20:20</span>
                        <span className="class-name">Nana Class</span>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="timeline-item">
                  <div className="timeline-info">
                    <span>Thursday</span>
                  </div>
                  <div className="timeline-marker"></div>
                  <div className="timeline-content">
                    <ul>
                      <li>
                        <span className="time">12:00 – 13:15</span>
                        <span className="class-name">Dan Class</span>
                      </li>
                      <li>
                        <span className="time">17:10 – 18:30</span>
                        <span className="class-name">Dan Class</span>
                      </li>
                      <li>
                        <span className="time">18:30 – 20:00</span>
                        <span className="class-name">Dan Class</span>
                      </li>
                      <li>
                        <span className="time">20:00 – 21:15</span>
                        <span className="class-name">Nana Class</span>
                      </li>
                      <li>
                        <span className="time">21:15 – 22:30</span>
                        <span className="class-name">Nana Class</span>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="timeline-item">
                  <div className="timeline-info">
                    <span>Friday</span>
                  </div>
                  <div className="timeline-marker"></div>
                  <div className="timeline-content">
                    <ul>
                      <li>
                        <span>12:00 – 13:15</span>
                        <span className="class-name">Dan Class</span>
                      </li>
                      <li>
                        <span>19:15 – 20:20</span>
                        <span className="class-name">Nana Class</span>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="timeline-item">
                  <div className="timeline-info">
                    <span>Saturday</span>
                  </div>
                  <div className="timeline-marker"></div>
                  <div className="timeline-content">
                    <ul>
                      <li>
                        <span className="time">12:00 – 13:15</span>
                        <span className="class-name">Dan Class</span>
                      </li>
                      <li>
                        <span className="time">17:10 – 18:30</span>
                        <span className="class-name">Nana Class</span>
                      </li>
                      <li>
                        <span className="time">18:30 – 20:00</span>
                        <span className="class-name">Nana Class</span>
                      </li>
                      <li>
                        <span className="time">20:00 – 21:15</span>
                        <span className="class-name">Nana Class</span>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="timeline-item">
                  <div className="timeline-info">
                    <span>Sunday</span>
                  </div>
                  <div className="timeline-marker"></div>
                  <div className="timeline-content">
                    <ul>
                      <li>
                        <span className="time">12:00 – 13:15</span>
                        <span className="class-name">Dan Class</span>
                      </li>
                      <li>
                        <span className="time">17:10 – 18:30</span>
                        <span className="class-name">Nana Class</span>
                      </li>
                      <li>
                        <span className="time">18:30 – 20:00</span>
                        <span className="class-name">Nana Class</span>
                      </li>
                      <li>
                        <span className="time">20:00 – 21:15</span>
                        <span className="class-name">Dan Class</span>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="timeline-item period">
                  <div className="timeline-marker"></div>
                </li>
              </ul>
          </article>
        </div>
      </div>
    </LineTimeStyled>
  );
};

export default LineTime;
