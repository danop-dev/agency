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
import Footer from '../containers/Footer';

// +++ Img imports +++
import pic from '../assets/img/pic.png';
import pic1 from '../assets/img/pic1.png';
import aboutPic from '../assets/img/about-pic.png';
import picSer from '../assets/img/pic-ser.png';
import blockImg from '../assets/img/block.png';
import womanImg from '../assets/img/woman.png';
import founderIng from '../assets/img/founder.png';

// icons
import ShapeIcon from '../assets/img/icon/Shape.svg';
import AccesibilityIcon from '../assets/img/icon/Accesibility.svg';
import DesignIcon from '../assets/img/icon/Design.svg';
import DevelopIcon from '../assets/img/icon/Develop.svg';
import SettingIcon from '../assets/img/icon/Settings.svg';

// woks
import workImg1 from '../assets/img/work/1.jpg';
import workImg2 from '../assets/img/work/2.jpg';
import workImg3 from '../assets/img/work/3.jpg';
import workImg4 from '../assets/img/work/4.jpg';

// decor
import starGift from '../assets/img/gift-star.svg';

//team img
import designer from '../assets/img/team/Designer.png';
import reactDev from '../assets/img/team/ReactDev.png';
import ilustrator from '../assets/img/team/Ilustrator.png';
import productDes from '../assets/img/team/ProductDesigner.png';

//testimonial img
import testimonialPers1 from '../assets/img/testimonials/1.png';
import testimonialPers2 from '../assets/img/testimonials/2.png';
import testimonialPers3 from '../assets/img/testimonials/3.png';
import testimonialPers4 from '../assets/img/testimonials/4.png';

//awards img
import awardImg1 from '../assets/img/awards/1.jpg';
import awardImg2 from '../assets/img/awards/2.jpg';
import awardImg3 from '../assets/img/awards/3.jpg';

import awardLogo1 from '../assets/img/awards/logo/1.png';
import awardLogo2 from '../assets/img/awards/logo/2.png';
import awardLogo3 from '../assets/img/awards/logo/3.png';

//blog img
import blogImg1 from '../assets/img/blog/1.jpg';
import blogImg2 from '../assets/img/blog/2.jpg';
import blogImg3 from '../assets/img/blog/3.jpg';

//banner img
import bannerContactImg from '../assets/img/pic-banner.png';

const HomePage = () => {
  return (
    <Fragment>
      <NavBar name={"Agency"} />
      <section className="section header__section" >
        <div className="container">
          <Header

            subtitle="Modern Studio"
            title="We're Help To Build Your  Dream Project"
            paragraph="Agency provides a full service range including technical skills, design, business understanding."
            imgPath={pic}
            colorText="#fff"
            starDecor={true}
            positionClass="centerWrapper"

            review={true}
            reviewColor="#fff"

            buttonData={[
              { id: 1, type: "primaryOrange", name: "About Us" }
            ]}
          />
        </div>
      </section>

      <section className="section partner-section">
        <div className="container">
          <Partner />
        </div>
      </section>

      <section className="section about-section">
        <div className="container">
          <div className="line"></div>
        </div>
        <Header
          subtitle="About"
          title="An Experience Design Agency"
          supParagraph="Provides a full service range"
          paragraph="Ability to put themselves in the merchant's shoes. It is meant to partner on the long run, and work as an extension of the merchant's team."
          imgPath={aboutPic}
          colorBgClass="headre__section--PapayaWhip"
          rowReverse="row-reverse"
          starDecor={false}
          positionClass='staticWrapper'

          buttonData={[
            { id: 1, type: "primaryOrange", name: "About Us" }
          ]}
        />
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

      <section className="section howWork-section">
        <div className="container">
          <HowWork />
        </div>
      </section>

      <section className="section video-section">
        <div className="container">
          <div className="line"></div>
          <VideoPreview />
        </div>
      </section>

      <section className="section features-section">
        <div className="container">
          <Features type="light" img={pic1} />

        </div>
      </section>

      <section className="section features-second-section">
        <div className="container">
          <div className="features-second-flex">
            <div className="features-second__item">
              <div className="features-second__content">
                <h4 className="h4-suptitle">Features</h4>
                <p className="feature__paragraph">Long run, and work as an extension of the merchant's team.</p>
                <a href="#" className="link">Read More</a>
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
                <div className="card-sv__item card-sv__item--active">
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

      <section className="section service-section">
        <Header
          subtitle="Service"
          title="Making Complex Digital Products"
          supParagraph="Agency provides a full service range including technical skills, design, business."
          imgPath={picSer}
          colorBgClass="headre__section--PapayaWhip"
          rowReverse="row-reverse"
          starDecor={false}
          positionClass='staticWrapper'
          review_in={true}

          buttonData={[
            { id: 1, type: "primaryOrange", name: "About Us" }
          ]}
        />
      </section>

      <section className="section service-second-section">
        <div className="container">
          <div className="header__content">
            <h4 className="h4-suptitle">Service</h4>
            <h3 className="h3-title">How Our Agency <br /> Can Help</h3>
          </div>
          <div className="wrapper-card item--size33">
            <div className="card-sv__item">
              <CardContentSimple
                imgPath={DesignIcon}
                title="Design"
                paragraph="Agency provides a full service range including technical skills, design."
                btn={true}
                btnVal="Learn More"
              />
            </div>
            <div className="card-sv__item">
              <CardContentSimple
                imgPath={DevelopIcon}
                title="Development"
                paragraph="Full service range including technical skills, design, business."
                btn={true}
                btnVal="Discover More"
              />
            </div>
            <div className="card-sv__item">
              <CardContentSimple
                imgPath={SettingIcon}
                title="Marketing"
                paragraph="Technical skills, design, business understanding, ability."
                btn={true}
                btnVal="Explore Now"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section works-section section--dark">
        <div className="container">
          <WorkHead
            color="#fff"
          />
          <div className="work__wrapper">
            <div className="work__items-box d-flex --big-and-small-item">
              <WorkCard
                imgPath={workImg1}
                subtitle="Design"
                title="SOFA"
              />
              <WorkCard
                imgPath={workImg2}
                subtitle="Branding"
                title="KeyBoard"
              />
            </div>
            <div className="work__items-box d-flex --big-and-small-item --flex-reverse">
              <WorkCard
                imgPath={workImg3}
                subtitle="Illustration"
                title="Work Media"
              />
              <WorkCard
                imgPath={workImg4}
                subtitle="Motion"
                title="DDDone"
              />
            </div>
            <div className="center-content">
              <Button
                type="standart"
                name="Explore More"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section contact-card__section section--dark">
        <div className="container">
          <div className="contact-card__wrapper">
            <img src={starGift} alt="Decor" className="contact-card__decor" />
            <div className="contact-card__info">
              <h5 className="contact-card__suptitle">Get Started</h5>
              <h4 className="contact-card__title">We Help Companies Move Faster</h4>
              <div className="contact-card__btn">
                <Button
                  type="primaryOrange"
                  name="Explore More"
                />
              </div>
            </div>
            <div className="contact-card__info">
              <img src={blockImg} alt="Card" className="contact-card__center-img" />
            </div>
            <div className="contact-card__info "></div>
            <img src={womanImg} alt="Card" className="contact-card__center-img contact-card--img-absolute" />
          </div>
        </div>
      </section>

      <section className="section events-card__section section--dark">
        <div className="container">
          <div className="head-work">
            <h4 className="h4-suptitle">Events</h4>
            <h2 className="h2-title --mb35 --white">Explore Future <br /> Conferences</h2>
          </div>
          <div className="events__items-box d-flex --j-cont-space-around">
            <EventsCard
              day="3"
              month="November"
              year="2021"
              time="9:00 am – 3:00 pm"
              title="Design Weeks"
              paragraph="Digital agency is a business you hire to outsource your digital."
              btn={true}
              btnVal="Explore Now"
              btnLink="#"
            />
            <EventsCard
              day="15"
              month="November"
              year="2021"
              time="1:00 pm – 8:00 pm"
              title="Interior Design"
              paragraph="Marketing efforts, instead of handling in-house."
              btn={true}
              btnVal="Explore Now"
              btnLink="#"
            />
            <EventsCard
              day="2"
              month="December"
              year="2021"
              time="10:00 am – 2:00 pm"
              title="The F design events"
              paragraph="Provide your business with a variety of digital solutions to promote."
              btn={true}
              btnVal="Explore Now"
              btnLink="#"
            />
          </div>
          <div className="center-content">
            <Button
              type="standart"
              name="Explore More"
            />
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
                { id: 1, img: designer, name: "Azah Anyeni", pos: "Designer" },
                { id: 2, img: reactDev, name: "Roelof Bekkenenks", pos: "React Developer" },
                { id: 3, img: ilustrator, name: "Leonardo Oliveira", pos: "Illustrator" },
                { id: 4, img: productDes, name: "Izabella Tabakova", pos: "Product Designer" },

                { id: 5, img: designer, name: "Azah Anyeni", pos: "Designer" },
                { id: 6, img: reactDev, name: "Roelof Bekkenenks", pos: "React Developer" },
                { id: 7, img: ilustrator, name: "Leonardo Oliveira", pos: "Illustrator" },
                { id: 8, img: productDes, name: "Izabella Tabakova", pos: "Product Designer" }
              ]}
          />
        </div>
      </section>

      <section className="section section__founder-words section--dark">
        <div className="container">
          <div className="founder-words__wrapper">
            <div className="founder-words__item">
              <img className="founder-words-img" src={founderIng} alt="" />
            </div>
            <div className="founder-words__item founder-words__item--pading70">
              <h5 className="h4-suptitle">Founder Words</h5>
              <div className="founder-words__title">Digital agency is a business you hire to outsource your digital marketing efforts</div>
              <div className="founde__data">
                <div className="founde-name">Ren Delan</div>
                <div className="founde-position">Founder</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section testimonials-section">
        <div className="container">
          <div className="head-work">
            <h4 className="h4-suptitle">Testimonials</h4>
            <h2 className="h2-title --mb35">What Our <br /> Clients Saying </h2>
          </div>
          <div className="testimonials__wrapper">
            <TestimonialsCard
              testimonialsData={[
                {
                  id: 1,
                  rating: 3.5,
                  text: "A digital agency is a business you hire to outsource your digital marketing efforts, instead of      handling in-house. They can provide your business with a variety of digital solutions to promote your   product or service online and help you.Azah Anyeni",
                  imgPers: testimonialPers1,
                  name: "Alan Marti",
                  pos: "Meta Inc."
                },
                {
                  id: 2,
                  rating: 4,
                  text: "Provide your business with a variety of digital solutions to promote your product or service online.",
                  imgPers: testimonialPers2,
                  name: "Richardo Kann",
                  pos: "Photogram"
                },
                {
                  id: 3,
                  rating: 5,
                  text: "Promote your product or service online and help you hit your marketing goals and grow your business.",
                  imgPers: testimonialPers3,
                  name: "Graham Griffiths",
                  pos: "Twitor"
                },
                {
                  id: 4,
                  rating: 5,
                  text: "Promote your product or service online and help you hit your marketing goals and grow your business.",
                  imgPers: testimonialPers4,
                  name: "Maria Trofimova",
                  pos: "Whochat"
                }
              ]}
            />
          </div>
          <div className="center-content">
            <Button
              type={"secundaryTransparent"}
              name="See All"
            />
          </div>
        </div>
      </section>

      <section className="section pricing-section">
        <div className="container">
          <div className="head-info">
            <h4 className="h4-suptitle">Pricing</h4>
            <h2 className="h2-title ">Check Our <br /> Pricing Plans</h2>
          </div>
          <div className="pricing__wrapper">
            <PriceCard
              pricesData={[
                {
                  id: 1,
                  supTitle: "Consultation",
                  price: "Free",
                  describe: "Your digital marketing efforts, instead of handling in-house.",
                  active: [true, false, false], type: "normal"
                },
                {
                  id: 2,
                  supTitle: "Design",
                  price: "$1500",
                  describe: "Provide your business with a variety of digital solutions to promote.",
                  active: [true, true, false],
                  type: "popular"
                },
                {
                  id: 3,
                  supTitle: "Design+Code",
                  price: "$2900",
                  describe: "Help you hit your marketing goals and grow your business.",
                  active: [true, true, true],
                  type: "normal"
                }
              ]}
            />
          </div>
        </div>
      </section>

      <section className="section questions__section">
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
                    id: 1,
                    trigger: "A digital agency is a business",
                    content: "Digital marketing efforts, instead of handling in-house. They can provide your business with a variety of digital solutions to promote your product or service online and help you hit your marketing goals and grow your business."
                  },
                  {
                    id: 2,
                    trigger: "Hire to outsource your digital",
                    content: "Digital marketing efforts, instead of handling in-house. They can provide your business with a variety of digital solutions to promote your product or service online and help you hit your marketing goals and grow your business."
                  },
                  {
                    id: 3,
                    trigger: "Marketing efforts",
                    content: "Digital marketing efforts, instead of handling in-house. They can provide your business with a variety of digital solutions to promote your product or service online and help you hit your marketing goals and grow your business."
                  },
                  {
                    id: 4,
                    trigger: "Can provide your business",
                    content: "Digital marketing efforts, instead of handling in-house. They can provide your business with a variety of digital solutions to promote your product or service online and help you hit your marketing goals and grow your business."
                  },
                ]}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section awards__section">
        <div className="container">
          <div className="head-work">
            <h3 className="h3-title --mb60">Our Awards</h3>
          </div>
          <Awards
            awardsData={[
              {
                id: 1,
                img: awardImg1,
                title: "SOFA",
                date: "25 Oct, 2021",
                text: "Awwwards",
                logo: awardLogo1
              },
              {
                id: 2,
                img: awardImg2,
                title: "KeyBoard",
                date: "19 Oct, 2021",
                text: "CSS Design Awards",
                logo: awardLogo2
              },
              {
                id: 3,
                img: awardImg3,
                title: "Work Media",
                date: "7 Oct, 2021",
                text: "The FWA",
                logo: awardLogo3
              }
            ]}
          />
        </div>
      </section>

      <section className="section blog__section">
        <div className="container">
          <div className="questions__box blog__box">
            <div className="questions__half-box">
              <div className="howWork__item">
                <h4 className="h4-suptitle">Our Blog</h4>
                <h3 className="h3-title">Latest Blog <br /> Articles</h3>
              </div>
            </div>
            <div className="questions__half-box">
              <Button
                type={"secundaryTransparent"}
                name={"Discover All"}
              />
            </div>
          </div>
          <BlogCard
            blogData={[
              {
                id: 1,
                img: blogImg1,
                link: "#",
                category: "Stories",
                title: "Agency is a business you hire to outsource",
                date: "5 Nov, 2021"
              },
              {
                id: 2,
                img: blogImg2,
                link: "#",
                category: "Design",
                title: "Outsource your digital marketing efforts",
                date: "29 Oct, 2021"
              },
              {
                id: 3,
                img: blogImg3,
                link: "#",
                category: "Marketing",
                title: "Your business with a variety of digital",
                date: "21 Oct, 2021"
              }
            ]}
          />
        </div>
      </section>

      <section className="section newsletter__section">
        <div className="container">
          <div className="line"></div>
          <Newsleter />
        </div>
      </section>

      <section className="section contact__section bg-map">
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

      <section className="section ">
        <div className="container">
          <BannerContact 
            colorText={"#fff"}
            bannerContactImg={bannerContactImg}
            bgColor={"#EF6D58"}
          />
        </div>
      </section>
      <Footer name={"Agency"}/>
    </Fragment>
  );
};

export default HomePage;