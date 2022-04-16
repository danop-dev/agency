import React, { Fragment } from 'react';

import NavBar from '../components/Navbar';
import Footer from '../containers/Footer';
import HeadMin from '../containers/HeadMin';
import ContactForm from '../components/ContactForm';
import Accordion from '../components/Accordion';

const ContactPage = () => {
  return (
    <Fragment>
      <NavBar name={"Agency"} />
      <HeadMin
        name={"Contact"}
        paragraph={"Agency provides a full service range including technical skills, design, business understanding."}
      />

      <section className="section contact__section--contact bg-map">
        <div className="container">
          <ContactForm />
        </div>
      </section>

      <section className="section contcat-our-info__section">
        <div className="container">
          <div className="contcat-our-info__wrapper">
            <div className="contcat-our-info__item">
              <div className="contcat-our-info__header">Phone</div>
              <div className="contcat-our-info__text">+1 (234) 567-89-00</div>
            </div>
            <div className="contcat-our-info__item">
              <div className="contcat-our-info__header">EMail</div>
              <div className="contcat-our-info__text">info@agency.com</div>
            </div>
            <div className="contcat-our-info__item">
              <div className="contcat-our-info__header">Address</div>
              <div className="contcat-our-info__text">2247 Lunetta Street, TX 76301</div>
            </div>
          </div>
        </div>
      </section>

      <section className="section questions__section--webflow questions__section--contact">
        <div className="container">
          <div className="questions__box">
            <div className="questions__half-box">
              <div className="howWork__item">
                <h4 className="h4-suptitle">Faq</h4>
                <h3 className="h3-title">Frequently Asked Questions</h3>
                <p className="header__paragraph" >A digital agency is a business you hire to outsource your digital marketing efforts, instead of handling in-house.</p>
                <a href="#" className="link">Contact Us</a>
              </div>
            </div>
            <div className="questions__half-box">
              <Accordion
                type="standart"
                accordionData={[
                  {
                    trigger: "A digital agency is a business",
                    content: "Digital marketing efforts, instead of handling in-house. They can provide your business with a variety of digital solutions to promote your product or service online and help you hit your marketing goals and grow your business."
                  },
                  {
                    trigger: "Hire to outsource your digital",
                    content: "Digital marketing efforts, instead of handling in-house. They can provide your business with a variety of digital solutions to promote your product or service online and help you hit your marketing goals and grow your business."
                  },
                  {
                    trigger: "Marketing efforts",
                    content: "Digital marketing efforts, instead of handling in-house. They can provide your business with a variety of digital solutions to promote your product or service online and help you hit your marketing goals and grow your business."
                  },
                  {
                    trigger: "Can provide your business",
                    content: "Digital marketing efforts, instead of handling in-house. They can provide your business with a variety of digital solutions to promote your product or service online and help you hit your marketing goals and grow your business."
                  },
                ]}
              />
            </div>
          </div>
          <div className="line"></div>
        </div>
      </section>

      <Footer name={"Agency"}/>
    </Fragment>
  );
};

export default ContactPage;