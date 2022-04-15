import React, { Fragment } from 'react';

import NavBar from '../components/Navbar';
import Partner from '../components/Partner';
import Fooetr from '../containers/Footer';
import HeadMin from '../containers/HeadMin';
import Button from '../components/Button';
import Accordion from '../components/Accordion';
import HowWork from '../components/HowWork';
import BannerContact from '../components/BannerContact';

//banner img
import bannerContactImg from '../assets/img/pic-banner.png';

const ServicesPage = () => {
  return (
    <Fragment>
      <NavBar name={"Agency"} />
      <HeadMin
        name={"Services"}
        paragraph={"Agency provides a full service range including technical skills, design, business understanding."}
      />

      <section className="section services-info__section">
        <div className="container">
          <div className="header__content">
            <div className="header__content-item">
              <h4 className="h4-suptitle">Services</h4>
              <h3 className="h3-title">Digital agency is a business you hire to outsource your digital marketing efforts</h3>
            </div>
            <div className="header__content-item">
              <p className="header__paragraph" >Ability to put themselves in the merchant's shoes. It is meant to partner on the long run, and work as an extension of the merchant's team. </p>
              <p className="header__paragraph" >A digital agency is a business you hire to outsource your digital marketing efforts, instead of handling in-house. They can provide your business with a variety of digital solutions to promote your product or service online and help you.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Accordion
            accordionData={[
              {
                trigger: "A digital agency is a business",
                content: "Digital marketing efforts, instead of handling in-house. They can provide your business with a variety of digital solutions to promote your product or service online and help you hit your marketing goals and grow your business."
              },
              {
                trigger: "A digital agency is a business",
                content: "Digital marketing efforts, instead of handling in-house. They can provide your business with a variety of digital solutions to promote your product or service online and help you hit your marketing goals and grow your business."
              }
            ]}
          />
        </div>
      </section>

      <section className="section howWork-section">
        <div className="container">
          <HowWork />
        </div>
      </section>

      <section className="section ">
        <div className="container">
          <BannerContact 
            colorText={"#fff"}
            bannerContactImg={bannerContactImg}
            bgColor={"#EF6D58"}
          />
        </div>
      </section>

      <Fooetr name={"Agency"}/>

    </Fragment>
  );
};

export default ServicesPage;