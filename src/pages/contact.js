import styled from "styled-components";
import { colors } from "../styles/theme";
import { respondTo } from "../styles/mixins";

import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import Map from "../components/Map";

const ContactStyled = styled.section`
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

  .content {
    ${respondTo.sm`
      justify-items: center;
      grid-template-columns: 1fr;
      width: 100%;
    `}

    .block,
    > div {
      grid-column: 1 / 11;

      article {
        display: grid;
        grid-template-columns: 1fr;
        grid-column-gap: 4%;
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
          padding: 20px 0 20px 0;
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
        h4 {
          margin: 20px 0;
        }

        p {
          color: #000;
          text-align: left;
          transition: all 0.2s ease;
          padding: 10px 12px 0 50px;
          background-position: 0 0;
          background-size: contain;
          height: 40px;
          line-height: 1.6;
          margin-bottom: 10px;;
          background-repeat: no-repeat;
          background-position: center left;
          &.tel {
            background-image: url('/assets/icon-phone.jpg');
          }
          &.email {
            background-image: url('/assets/icon-email.jpg');      
          }
          &.address {
            background-image: url('/assets/icon-address.jpg');   
          }
          &.time {
            background-image: url('/assets/icon-hours.jpg');
          }

          ${respondTo.sm`
            height: 32px;
            background-size: 32px;
          `}
        }
        .button-container {
          display: flex;
          margin: 20px 0;
        }
      }
    }
  }
`;

const Contact = () => {
  const { t } = useTranslation("common");

  return (
    <ContactStyled className="module">
      <h3 className="section-title">
        <b>Contact</b>
        <span>Us</span>
      </h3>
      <div className="content">
        <div className="block">
          <article className="full-box">
            <div className="">We would love to hear from you!<br/>
              Don’t hesitate to reach out with the contact information below, or send a message using the form.</div>
            <h4>Get in Touch</h4>
            <p className="tel">0973825156</p>
            <p className="email">untilyou0612@gmail.com</p>
            <p className="address">Floor 2, 179B Nguyen Huu Canh Street, Ward 22</p>
            <p className="time">Open during class times.</p>
            
            <div className="button-container">
              <a href="https://api.whatsapp.com/send?phone=0973825156" target="_blank">
                <button className="btn" >Questions? WhatsApp us!</button>
              </a>
            </div>
          </article>
        </div>
      </div>

      <Map className="content" />
    </ContactStyled>
  );
};

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common", "home"])),
  },
});

export default Contact;
