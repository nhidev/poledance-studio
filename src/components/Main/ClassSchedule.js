import styled from "styled-components";
import { colors } from "../../styles/theme";
import { respondTo } from "../../styles/mixins";

// import styles from "./Main.module.scss";

const ClassScheduleStyled = styled.section`
  padding-top: 150px !important;

  ${respondTo.sm`
    padding-top: 60px !important;
  `}

  &:before {
    content: "";
    position: absolute;
    width: 6%;
    max-width: 120px;
    height: 500px;
    border: 1px solid ${colors.m01};
    right: 0;
    transform: translatey(-200px);
    animation: beforeShape1 6s ease infinite alternate both;

    @keyframes beforeShape1 {
      0% {
        transform: translate(50px, -200px);
      }

      100% {
        transform: translate(0px, -280px);
      }
    }

    ${respondTo.md`
      display: none;
    `}
  }

  .content {
    width: 100%;
    margin: auto;

    .shows {
      margin-bottom: 60px;
      grid-column: 1 / 11;

      ${respondTo.sm`
        margin-bottom: 40px;
      `}

      li {
        display: grid;
        grid-template-columns: auto 3fr 2fr auto;
        grid-column-gap: 4%;
        text-transform: uppercase;
        // font-family: $font-01;
        font-size: 16px;
        letter-spacing: 0.3px;
        font-weight: 600;
        align-items: center;
        padding: 20px 10px;
        border-bottom: 1px solid ${colors.m02};
        grid-template-areas: "date place country buttons";
        transition: all 0.6s ease;
        cursor: default;

        ${respondTo.lg`
          grid-template-columns: 2fr 1fr;
          grid-template-areas:
            "date date date"
            "place country buttons";
          grid-row-gap: 20px;
        `}

        ${respondTo.md`
          grid-template-columns: auto 1fr auto;
          grid-template-areas:
            "date place place"
            ". country buttons";
          grid-row-gap: 20px;
        `}

        ${respondTo.sm`
          padding: 20px 0 20px 0;
          grid-template-columns: 1fr 1fr;
          grid-template-areas:
            "date ."
            "place country"
            "buttons buttons";

          &:first-child {
            padding: 0px 0 20px 0;
          }
        `}

        ${respondTo.xs`
          grid-template-columns: 1fr;
          grid-template-areas:
            "date ."
            "place place"
            "country country"
            "buttons buttons";
        `}

        &:hover {
          background-color: rgba(231, 239, 245, 0.5);

          ${respondTo.sm`
            background-color: transparent;
          `}
        }

        date {
          color: ${colors.m01};
          grid-area: date;
        }

        .place {
          color: ${colors.neu06};
          grid-area: place;
        }

        .country {
          color: ${colors.neu04};
          font-weight: normal;
          grid-area: country;
        }

        .button-container {
          display: flex;
          grid-area: buttons;

          .btn-rsvp,
          .btn-buy {
            font-style: normal;
            font-weight: 600;
            font-size: 14px;
            line-height: 16px;
            letter-spacing: 0.05em;
            text-transform: uppercase;
            box-shadow: inset 0px 0px 0px 1px ${colors.m01};
            color: ${colors.m01};
            background-color: transparent;
            padding: 8px 16px;
            transition: all 0.6s ease;
            border: 0;
            cursor: pointer;

            &:hover {
              box-shadow: inset 0px 0px 0px 1px $m-01, inset 0px -40px 0px $m-01;
              color: white;
            }
          }

          .btn-rsvp {
            color: ${colors.neu05};
            box-shadow: inset 0px 0px 0px 1px ${colors.neu05};
            margin-right: 10px;

            &:hover {
              box-shadow: inset 0px 0px 0px 1px ${colors.neu05},
                inset 0px -40px 0px ${colors.neu05};
              color: white;
            }
          }
        }
      }
    }

    a {
      grid-column: 1 / 11;
    }
  }
`;

const ClassSchedule = () => {
  return (
    <ClassScheduleStyled className="module tour-list">
      <h3 className="section-title">
        <b>Class</b>
        <span>Schedule</span>
      </h3>
      <div className="content">
        <ul className="shows">
          <li>
            <date>06 Nov 2019</date>
            <p className="place">Le Millesium</p>
            <p className="country">Epernay, France</p>
            <div className="button-container">
              <a className="btn-rsvp" href="#" target="_blank">
                RSVP
              </a>
              <a className="btn-buy" href="#" target="_blank">
                Buy tickets
              </a>
            </div>
          </li>

          <li>
            <date>06 Nov 2019</date>
            <p className="place">Le Millesium</p>
            <p className="country">Epernay, France</p>
            <div className="button-container">
              <a className="btn-rsvp" href="#" target="_blank">
                RSVP
              </a>
              <a className="btn-buy" href="#" target="_blank">
                Buy tickets
              </a>
            </div>
          </li>
          <li>
            <date>06 Nov 2019</date>
            <p className="place">Le Millesium</p>
            <p className="country">Epernay, France</p>
            <div className="button-container">
              <a className="btn-rsvp" href="#" target="_blank">
                RSVP
              </a>
              <a className="btn-buy" href="#" target="_blank">
                Buy tickets
              </a>
            </div>
          </li>
          <li>
            <date>06 Nov 2019</date>
            <p className="place">Le Millesium</p>
            <p className="country">Epernay, France</p>
            <div className="button-container">
              <a className="btn-rsvp" href="#" target="_blank">
                RSVP
              </a>
              <a className="btn-buy" href="#" target="_blank">
                Buy tickets
              </a>
            </div>
          </li>
        </ul>
        <a href="#" target="_blank">
          {" "}
          <button className="btn">view all</button>
        </a>
      </div>
    </ClassScheduleStyled>
  );
};

export default ClassSchedule;
