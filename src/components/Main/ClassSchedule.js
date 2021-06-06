import React, { useEffect } from "react";
import styled from "styled-components";
import { colors } from "../../styles/theme";
import { respondTo } from "../../styles/mixins";

// import styles from "./Main.module.scss";

const ClassScheduleStyled = styled.section`

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
    margin: auto;
    .tabs-wrapper {
      grid-column: 1 / 6;
      width: 100%;
      display: grid;
      grid-column-gap: 20px;
      position: relative;
      ${respondTo.sm`
        grid-column: 1;
      `};

      h4 {
        color: ${colors.m01};
        cursor: pointer;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 20px;
        text-transform: uppercase;
        min-width: 130px;
        ${respondTo.sm`
          font-size: 18px;
          width: fit-content;
        `}
      }
      .arrow-down {
        width: 32px;
        height: 32px;
        position: relative;
      }
      .arrow-down:before, .arrow-down:after {
        content: "";
        display: block;
        width: 20px;
        height: 4px;
        background:  ${colors.m01};;
        position: absolute;
        top: 15px;
        transition: transform .5s;
      }

      .arrow-down:before {
        right: 21px;
        border-top-left-radius: 10px;
        border-bottom-left-radius: 10px;
        transform: rotate(45deg);
      }

      .arrow-down:after {
        right: 10px;
        transform: rotate(-45deg);
      }

      .arrow-down.active:before {
        transform: rotate(-45deg);
      }

      .arrow-down.active:after {
        transform: rotate(45deg);
      }
    }
    .tab-buttons {
      grid-column: 1 / 11;
      display: flex;
      flex-direction: column;
      width: 200px;
      justify-content: flex-start;
      text-align: left;
      position: absolute;
      background: white;
      border: 1px solid ${colors.neu06};
      top: 35px;
      transition: all 0.5s ease;
      &.toggle {
        height: 0;
        opacity: 0;
      }
      button {
        color: ${colors.neu06};
        background-color: white;
        cursor: pointer;
        font-size: 16px;
        text-align: left;
        padding: 10px;
        border-bottom: 2px solid ${colors.neu06};
        &.active {
        color: ${colors.m01};
        }
        &:hover {
          background-color: rgb(231 239 245 / 50%);
        }
        ${respondTo.sm`
          font-size: 12px;
        `}
      }
     
    }
    .tab-content {
      margin-bottom: 60px;
      grid-column: 1 / 11;
      width: 100%;
      ${respondTo.sm`
        grid-column: 1;
        margin-bottom: 40px;
      `}
      li {
        display: grid;
        grid-template-columns: auto auto auto;
        grid-column-gap: 4%;
        text-transform: uppercase;
        // font-family: $font-01;
        font-size: 16px;
        letter-spacing: 0.3px;
        font-weight: 600;
        align-items: center;
        padding: 20px 10px;
        border-bottom: 1px solid ${colors.m02};
        grid-template-areas: "date place country";
        transition: all 0.6s ease;
        cursor: default;

        ${respondTo.md`
          grid-row-gap: 20px;
        `}

        ${respondTo.sm`
          font-size: 12px;
          padding: 20px 0 20px 0;
          &:first-child {
            padding: 0px 0 20px 0;
          }
        `}
 
        &:hover {
          background-color: rgba(231, 239, 245, 0.5);

          ${respondTo.sm`
            background-color: transparent;
          `}
        }

        .date {
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
      }
    }
    .fee {
      grid-column: 7 / 11;
      ${respondTo.sm`
        grid-column: 1;
      `}
      h4 {
        color: ${colors.m01};
        margin-bottom: 20px;
        text-transform: uppercase;
        ${respondTo.sm`
          font-size: 18px;
        `}
      }
      p {
        color: ${colors.neu06};
        text-transform: uppercase;
        ${respondTo.sm`
          font-size: 12px;
        `}
      }
      a .btn {
      margin: 20px 0;
    }
    }
   
  }
`;

class Tabs extends React.Component {
  state = {
    activeTab: this.props.children[0].props.label,
    isToggle: false,
  };

  componentDidMount() {
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    let d = new Date();
    let dayName = days[d.getDay()];
    this.setState({ activeTab: dayName });
  }

  changeTab = (tab) => {
    this.setState({ activeTab: tab, isToggle: !this.state.isToggle });
  };

  handleClick = () => {
    this.setState({ isToggle: !this.state.isToggle });
  };

  render() {
    let content;
    let buttons = [];
    const { isToggle } = this.state;
    return (
      <div className="tabs-wrapper">
        {React.Children.map(this.props.children, (child) => {
          buttons.push(child.props.label);
          if (child.props.label === this.state.activeTab)
            content = child.props.children;
        })}
        <h4 onClick={this.handleClick}><span>Today</span><i className={isToggle ? "arrow-down" : "arrow-down active"} /></h4>
        <TabButtons
          activeTab={this.state.activeTab}
          buttons={buttons}
          changeTab={this.changeTab}
          className={isToggle ? "tab-buttons" : "tab-buttons toggle"}
        />
        <div className="tab-content">{content}</div>
      </div>
    );
  }
}

const TabButtons = ({ buttons, changeTab, activeTab, className }) => {
  return (
    <div className={className}>
      {buttons.map((button) => {
        return (
          <button
            key={button}
            className={button === activeTab ? "active" : ""}
            onClick={() => changeTab(button)}
          >
            {button}
          </button>
        );
      })}
    </div>
  );
};

const Tab = (props) => {
  return <React.Fragment>{props.children}</React.Fragment>;
};

const ClassSchedule = () => {
  return (
    <ClassScheduleStyled className="module tour-list">
      <h3 className="section-title">
        <b>Class</b>
        <span>Schedule</span>
      </h3>

      <div className="content">
        <Tabs>
          <Tab label="Monday">
            <ul>
              <li>
              <p className="date">19:15 – 20:20</p>
                <p className="place">Pole Dance</p>
                <p className="country">Nana Class</p>
              </li>
            </ul>
          </Tab>
          <Tab label="Tuesday">
            <ul>
              <li>
              <p className="date">2:00 - 13:15</p>
                <p className="place">Yoga Class</p>
                <p className="country">Dan Class</p>
              </li>
              <li>
              <p className="date">17:00 – 18:30</p>
                <p className="place">Aerial Hoop</p>
                <p className="country">Dan Class</p>
              </li>
              <li>
                <p className="date">18:30 – 20:00</p>
                <p className="place">Pole Dance</p>
                <p className="country">Dan Class</p>
              </li>
              <li>
              <p className="date">20:00 – 21:15</p>
                <p className="place">Aeral Hood</p>
                <p className="country">Nana Class</p>
              </li>
              <li>
              <p className="date">21:00 – 22.30</p>
                <p className="place">Pole Dance</p>
                <p className="country">Nana Class</p>
              </li>
            </ul>
          </Tab>
          <Tab label="Wednesday">
            <ul>
              <li>
              <p className="date">12:00 – 13:15</p>
                <p className="place">Pole Dance</p>
                <p className="country">Dan Class</p>
              </li>
              <li>
              <p className="date">19:15 – 20:20</p>
                <p className="place">Pole Dance</p>
                <p className="country">Nana Class</p>
              </li>
            </ul>
          </Tab>
          <Tab label="Thursday">
            <ul>
              <li>
              <p className="date">12:00 - 13:15</p>
                <p className="place">Yoga Class</p>
                <p className="country">Dan Class</p>
              </li>

              <li>
              <p className="date">17:00 – 18:30</p>
                <p className="place">Aerial Hoop</p>
                <p className="country">Dan Class</p>
              </li>
              <li>
              <p className="date">18:30 – 20:00</p>
                <p className="place">Pole Dance</p>
                <p className="country">Dan Class</p>
              </li>
              <li>
              <p className="date">20:00 – 21:15</p>
                <p className="place">Aeral Hood</p>
                <p className="country">Nana Class</p>
              </li>
              <li>
              <p className="date">21:00 – 22.30</p>
                <p className="place">Pole Dance</p>
                <p className="country">Nana Class</p>
              </li>
            </ul>
          </Tab>
          <Tab label="Friday">
            <ul>
              <li>
              <p className="date">12:00 - 13:15</p>
                <p className="place">Yoga Class</p>
                <p className="country">Dan Class</p>
              </li>
              <li>
              <p className="date">19:15 – 20:20</p>
                <p className="place">Aeral Hood</p>
                <p className="country">Nana Class</p>
              </li>
            </ul>
          </Tab>
          <Tab label="Saturday">
            <ul>
              <li>
              <p className="date">12:00 - 13:15</p>
                <p className="place">Yoga Class</p>
                <p className="country">Dan Class</p>
              </li>
              <li>
              <p className="date">17:10 – 18:30</p>
                <p className="place">Aerial Hoop</p>
                <p className="country">Nana Class</p>
              </li>
              <li>
              <p className="date">18:30 – 20:00</p>
                <p className="place">Pole Dance</p>
                <p className="country">Nana Class</p>
              </li>
              <li>
              <p className="date">20:00 – 21:15</p>
                <p className="place">Aeral Hood</p>
                <p className="country">Nana Class</p>
              </li>
            </ul>
          </Tab>
          <Tab label="Sunday">
            <ul>
              <li>
              <p className="date">12:00 - 13:15</p>
                <p className="place">Yoga Class</p>
                <p className="country">Dan Class</p>
              </li>
              <li>
              <p className="date">17:10 – 18:30</p>
                <p className="place">Aerial Hoop</p>
                <p className="country">Nana Class</p>
              </li>
            </ul>
          </Tab>
        </Tabs>
        <div className="fee">
          <h4>Class prices</h4>
          <p>Drop in 220k</p>
          <p>8 Classes 1.200.000</p>
          <p>Combo 28 classes 3.500.000 / 4 months </p>
          <p>Combo 60 classes 7.000.000 / 8 months </p>
          <a href="/schedule">
          <button className="btn">view all</button>
        </a>
        </div>
      </div>
    </ClassScheduleStyled>
  );
};

export default ClassSchedule;
