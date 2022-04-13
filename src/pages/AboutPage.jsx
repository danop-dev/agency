import React, { Fragment } from 'react';

import NavBar from '../components/Navbar';
import Header from '../containers/Header';
import Partner from '../components/Partner';
// import Review from '../components/Review';
import HowWork from '../components/HowWork';
import VideoPreview from '../components/VideoPreview';
import Features from '../components/Features';
import CardContentSimple from '../components/CardContentSimple';
import WorkHead from '../components/WorkHead';
import WorkCard from '../components/WorkCard';
import Button from '../components/Button';
import EventsCard from '../components/EventsCard';
import CarouselTeam from '../components/CarouselTeam';
import TestimonialsCard from '../components/TestimonialsCard';
import PriceCard from '../components/PriceCard';
import Accordion from '../components/Accordion';
import Awards from '../components/Awards';
import BlogCard from '../components/BlogCard';
import ContactForm from '../components/ContactForm';
import BannerContact from '../components/BannerContact';
import Newsleter from '../components/Newsleter';
import Fooetr from '../containers/Footer';
import HeadMin from '../containers/HeadMin';



//gallery img
import gallery1 from '../assets/img/personalPage/gallery/1.jpg';
import gallery2 from '../assets/img/personalPage/gallery/2.jpg';
import gallery3 from '../assets/img/personalPage/gallery/3.jpg';
import gallery4 from '../assets/img/personalPage/gallery/4.jpg';
import gallery5 from '../assets/img/personalPage/gallery/5.jpg';
import gallery6 from '../assets/img/personalPage/gallery/6.jpg';

// icons
import ShapeIcon from '../assets/img/icon/Shape.svg';
import AccesibilityIcon from '../assets/img/icon/Accesibility.svg';
import DesignIcon from '../assets/img/icon/Design.svg';
import DevelopIcon from '../assets/img/icon/Develop.svg';
import SettingIcon from '../assets/img/icon/Settings.svg';

//team img
import designer from '../assets/img/team/Designer.png';
import reactDev from '../assets/img/team/ReactDev.png';
import ilustrator from '../assets/img/team/Ilustrator.png';
import productDes from '../assets/img/team/ProductDesigner.png';

//testimonial img
import testimonialPers1 from '../assets/img/testimonials/1.png';
import testimonialPers2 from '../assets/img/testimonials/2.png';
import testimonialPers3 from '../assets/img/testimonials/3.png';

//banner img
import bannerContactImg from '../assets/img/pic-banner.png';

const AboutPage = () => {
  return (
    <Fragment>
      <NavBar name={"Agency"} />
      <HeadMin
        name={"About Us"}
        paragraph={"Agency provides a full service range including technical skills, design, business understanding."}

      />

      <section className="section about--about">
        <div className="container">
          <div className="about__wrapper d-flex">
            <div className="howWork__item">
              <h4 className="h4-suptitle">About</h4>
              <h3 className="h3-title">An Experience <br /> Design Agency</h3>
            </div>
            <div className="howWork__item">
              <p className="header__paragraph">Ability to put themselves in the merchant's shoes. It is meant to partner on the long run, and work as an extension of the merchant's team.</p>
              <p className="header__paragraph">A digital agency is a business you hire to outsource your digital marketing efforts, instead of handling in-house. They can provide your business with a variety of digital solutions to promote your product or service online and help you.</p>
            </div>

          </div>

          <div className="about__wrapper d-flex">
            <div className="howWork__item">
              <div className="video__item">
                <div className="video-player">
                  <button className="play-btn"></button>
                  <div className="video-timeline">1.45</div>
                </div>
              </div>
            </div>
            <div className="howWork__item">
              <div className="gallery__wrapper">
                <div className="gallery__item">
                  <img src={gallery1} alt="Gallery" />
                </div>
                <div className="gallery__item">
                  <img src={gallery2} alt="Gallery" />
                </div>
                <div className="gallery__item">
                  <img src={gallery3} alt="Gallery" />
                </div>
                <div className="gallery__item">
                  <img src={gallery4} alt="Gallery" />
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <section className="section section--aboutPage">
        <div className="container">
          <div className="features-second-flex">
            <div className="features-second__item">
              <div className="features-second__content">
                <h4 className="h4-suptitle">Features</h4>
                <p className="feature__paragraph">Long run, and work as an extension of the merchant's team.</p>
                <p className="header__paragraph">Ability to put themselves in the merchant's shoes. It is meant to partner on the long run, and work as an extension.</p>
              </div>
            </div>
            <div className="features-second__item--large">
              <div className="features-second__wrapper-item">
                <div className="card-sv__item card-sv__item--active">
                  <CardContentSimple
                    imgPath={ShapeIcon}
                    title="Professional"
                    paragraph="Full service range including technical skills, design."
                    btn={false}
                  />
                </div>
                <div className="card-sv__item card-sv__item--min">
                  <CardContentSimple
                    imgPath={AccesibilityIcon}
                    title="Accessibility"
                    paragraph="Business understanding, ability to put themselves."
                    btn={false}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section statistics-section">
        <div className="container">
          <div className="statistics__wrapper">
            <div className="statistics__item">
              <div className="statistics__number">42%</div>
              <p className="statistics__paragraph">Years of experience</p>
            </div>
            <div className="statistics__item">
              <div className="statistics__number">73+</div>
              <p className="statistics__paragraph">Agency members</p>
            </div>
            <div className="statistics__item">
              <div className="statistics__number">5.000</div>
              <p className="statistics__paragraph">Projects complete</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section team-section section--dark">
        <div className="container">

          <div className="head-info">
            <h4 className="h4-suptitle">Our Team</h4>
            <h2 className="h2-title --white">Team of Designers <br /> and Developers</h2>
          </div>
          <CarouselTeam
            imgPeople={
              [
                { img: designer, name: "Azah Anyeni", pos: "Designer" },
                { img: reactDev, name: "Roelof Bekkenenks", pos: "React Developer" },
                { img: ilustrator, name: "Leonardo Oliveira", pos: "Illustrator" },
                { img: productDes, name: "Izabella Tabakova", pos: "Product Designer" },

                { img: designer, name: "Azah Anyeni", pos: "Designer" },
                { img: reactDev, name: "Roelof Bekkenenks", pos: "React Developer" },
                { img: ilustrator, name: "Leonardo Oliveira", pos: "Illustrator" },
                { img: productDes, name: "Izabella Tabakova", pos: "Product Designer" }
              ]}
          />
        </div>
      </section>

      <section className="section testimonials-section section--dark">
        <div className="head-work">
          <h4 className="h4-suptitle">Testimonials</h4>
          <h2 className="h2-title --mb35">What Our <br /> Clients Saying </h2>
        </div>
        <div className="testimonials__wrapper testimonials__wrapper--personal testimonials--carousel">
          <TestimonialsCard
            testimonialsData={[
              {
                rating: 3.5,
                text: "A digital agency is a business you hire to outsource your digital marketing efforts, instead of      handling in-house. They can provide your business with a variety of digital solutions to promote your   product or service online and help you.Azah Anyeni",
                imgPers: testimonialPers1,
                name: "Alan Marti",
                pos: "Meta Inc."
              },
              {
                rating: 4,
                text: "Provide your business with a variety of digital solutions to promote your product or service online.",
                imgPers: testimonialPers2,
                name: "Richardo Kann",
                pos: "Photogram"
              },
              {
                rating: 5,
                text: "Promote your product or service online and help you hit your marketing goals and grow your business.",
                imgPers: testimonialPers3,
                name: "Graham Griffiths",
                pos: "Twitor"
              },
              {
                rating: 3.5,
                text: "A digital agency is a business you hire to outsource your digital marketing efforts, instead of      handling in-house. They can provide your business with a variety of digital solutions to promote your   product or service online and help you.Azah Anyeni",
                imgPers: testimonialPers1,
                name: "Alan Marti",
                pos: "Meta Inc."
              },
              {
                rating: 4,
                text: "Provide your business with a variety of digital solutions to promote your product or service online.",
                imgPers: testimonialPers2,
                name: "Richardo Kann",
                pos: "Photogram"
              },
              {
                rating: 5,
                text: "Promote your product or service online and help you hit your marketing goals and grow your business.",
                imgPers: testimonialPers3,
                name: "Graham Griffiths",
                pos: "Twitor"
              },
              {
                rating: 3.5,
                text: "A digital agency is a business you hire to outsource your digital marketing efforts, instead of      handling in-house. They can provide your business with a variety of digital solutions to promote your   product or service online and help you.Azah Anyeni",
                imgPers: testimonialPers1,
                name: "Alan Marti",
                pos: "Meta Inc."
              },
              {
                rating: 4,
                text: "Provide your business with a variety of digital solutions to promote your product or service online.",
                imgPers: testimonialPers2,
                name: "Richardo Kann",
                pos: "Photogram"
              },
              {
                rating: 5,
                text: "Promote your product or service online and help you hit your marketing goals and grow your business.",
                imgPers: testimonialPers3,
                name: "Graham Griffiths",
                pos: "Twitor"
              }
            ]}
          />
        </div>
      </section>


      <section className="section questions__section section--dark">
        <div className="container">
          <div className="questions__box">
            <div className="questions__full-box">
              <div className="howWork__item">
                <h4 className="h4-suptitle">Faq</h4>
                <h3 className="h3-title">Frequently Asked Questions</h3>
                <p className="header__paragraph" >A digital agency is a business you hire to outsource your digital marketing efforts, instead of handling in-house.</p>

              </div>
            </div>
            <div className="questions__full-box">
              <Accordion
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
        </div>
      </section>

      <section className="section partner-section section--dark">
        <div className="container">
          <Partner />
        </div>
      </section>

      <section className="section banner--webflow section--dark">
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
  )
}

export default AboutPage