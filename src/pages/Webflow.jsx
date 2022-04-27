import React, { Fragment } from 'react';

import NavBar from '../components/Navbar';
import Header from '../containers/Header';
import Partner from '../components/Partner';
import HowWork from '../components/HowWork';
import VideoPreview from '../components/VideoPreview';
import CardContentSimple from '../components/CardContentSimple';
import WorkHead from '../components/WorkHead';
import WorkCard from '../components/WorkCard';
import Button from '../components/Button';
import TestimonialsCard from '../components/TestimonialsCard';
import PriceCard from '../components/PriceCard';
import Accordion from '../components/Accordion';
import Awards from '../components/Awards';
import BlogCard from '../components/BlogCard';
import ContactForm from '../components/ContactForm';
import BannerContact from '../components/BannerContact';
import Newsletter from '../components/Newsletter';
import Footer from '../containers/Footer';

//img 
import headImg from '../assets/img/personalPage/head-img.png';
import blockImg from '../assets/img/block.png';

// icons
import ShapeIcon from '../assets/img/icon/Shape.svg';
import AccessibilityIcon from '../assets/img/icon/Accessibility.svg';
import DesignIcon from '../assets/img/icon/Design.svg';
import DevelopIcon from '../assets/img/icon/Develop.svg';
import SettingIcon from '../assets/img/icon/Settings.svg';

//pic
import aboutPic from '../assets/img/webflowPage/pic.png';
import about from '../assets/img/personalPage/pic1.png';

// woks
import workImg1 from '../assets/img/work/1.jpg';
import workImg2 from '../assets/img/work/2.jpg';
import workImg3 from '../assets/img/work/3.jpg';
import workImg4 from '../assets/img/work/4.jpg';

// decor
import starGift from '../assets/img/gift-star.svg';

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


const Webflow = () => {

    const dataWork = [
        { id: 1, img: workImg1, subtitle: "Design", title: "SOFA" },
        { id: 2, img: workImg2, subtitle: "Branding", title: "KeyBoard" },
        { id: 3, img: workImg3, subtitle: "Branding", title: "Branding" },
        { id: 4, img: workImg4, subtitle: "Design", title: "SOFA" },

        { id: 5, img: workImg1, subtitle: "Branding", title: "KeyBoard" },
        { id: 6, img: workImg4, subtitle: "Branding", title: "KeyBoard" }
    ]

    return (
        <Fragment>
            <NavBar name={"Webflow"} />

            <section className="section header__section header__section--webflow" >
                <div className="container">
                    <Header
                        subtitle="Webflow Expert"
                        title="Making Digital Products"
                        paragraph="Agency provides a full service range including technical skills, design, business understanding."
                        imgPath={headImg}
                        colorText={"#fff"}
                        starDecor={false}
                        positionClass="centerWrapper"
                        review={false}

                        buttonData={[
                            { id: 1, type: "primaryOrange", name: "Explore Work" },
                            { id: 2, type: "secondaryEmpty", name: "Contact Me" }
                        ]}
                    />
                </div>
            </section>

            <section className="section features-second-section section--dark">
                <div className="container">
                    <div className="line"></div>
                    <div className="features-second-flex">
                        <div className="features-second__item">
                            <div className="features-second__content">
                                <h4 className="h4-subtitle">Features</h4>
                                <h3 className='h3-title'>Making Digital Products</h3>
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
                                <div className="card-sv__item card-sv__item--min">
                                    <CardContentSimple
                                        imgPath={AccessibilityIcon}
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

            <section className="section about-section about-webflow section--dark">
                <Header
                    subtitle="About Webflow"
                    title="Website Without The Dev Time"
                    supParagraph="Provides a full service range"
                    paragraph="Ability to put themselves in the merchant's shoes. It is meant to partner on the long run, and work as an extension of the merchant's team."
                    imgPath={aboutPic}
                    colorBgClass="header__section--PapayaWhip"
                    rowReverse="row-reverse"
                    starDecor={false}
                    positionClass='staticWrapper'

                    buttonData={[
                        { id: 1, type: "darkPurpure", name: "About Webflow" }
                    ]}
                />
            </section>

            <section className="section service-second-section section--dark section--minHeight60">
                <div className="container">
                    <div className="header__content">
                        <h4 className="h4-subtitle">Service</h4>
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

            <section className="section video-section">
                <div className="container">
                    <div className="line"></div>
                    <VideoPreview />
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

            <section className="section howWork-section">
                <div className="container">
                    <HowWork />
                </div>
            </section>

            <section className="section empty-section">
                <div className="line"></div>
            </section>

            <section className="section works-section works-section--webflow section--dark">
                <div className="container">
                    <WorkHead
                        color="#391400"
                    />
                    <div className="work__items-box d-flex --work-3-item">

                        {dataWork.map(item => (
                            <WorkCard key={item.id}
                                imgPath={item.img}
                                subtitle={item.subtitle}
                                title={item.title}
                            />
                        ))}
                        
                    </div>
                    <div className="center-content">
                        <Button
                            type="standard"
                            name="Explore More"
                        />
                    </div>
                </div>
            </section>

            <section className="section contact-card__section contact-card--webflow section--dark">
                <div className="container">
                    <div className="contact-card__wrapper">
                        <img src={starGift} alt="Decor" className="contact-card__decor" />
                        <div className="contact-card__info">
                            <h5 className="contact-card__subtitle">Get Started</h5>
                            <h4 className="contact-card__title">We Help Companies Move Faster</h4>
                            <div className="contact-card__btn">
                                <Button
                                    type="primaryOrange"
                                    name="Explore More"
                                />
                            </div>
                        </div>
                        <div className="contact-card__info center-content">
                            <p className="standard--paragraph">Put themselves in the merchant's shoes. It is meant to partner on the long run.</p>
                        </div>
                        <div className="contact-card__info">
                            <img src={blockImg} alt="Card" className="contact-card__center-img" />
                        </div>
                    </div>
                </div>
            </section>

            <section className="section about-section about-webflow section--dark">
                <Header
                    subtitle="About"
                    title="An Experience Webflow Expert"
                    supParagraph="Provides a full service range"
                    paragraph="Ability to put themselves in the merchant's shoes. It is meant to partner on the long run, and work as an extension of the merchant's team."
                    imgPath={about}
                    colorBgClass="header__section--PapayaWhip"
                    rowReverse="row-reverse"
                    starDecor={false}
                    positionClass='staticWrapper'

                    buttonData={[
                        { id: 1, type: "darkPurpure", name: "About" }
                    ]}
                />
            </section>

            <section className="section testimonials-section section--dark">
                <div className="container">
                    <div className="head-work">
                        <h4 className="h4-subtitle">Testimonials</h4>
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
                            type={"secondaryTransparent"}
                            name="See All"
                        />
                    </div>
                </div>
            </section>
            
            <section className="section-empty-light"></section>

            <section className="section pricing-section--webflow">
                <div className="container">
                    <div className="head-info">
                        <h4 className="h4-subtitle">Pricing</h4>
                        <h2 className="h2-title ">Explore <br /> Pricing Plans</h2>
                    </div>
                    <div className="pricing__wrapper">
                        <PriceCard
                            pricesData={[
                                {
                                    id: 1,
                                    subtitle: "Consultation",
                                    price: "Free",
                                    describe: "Your digital marketing efforts, instead of handling in-house.",
                                    active: [true, false, false], type: "normal"
                                },
                                {
                                    id: 2,
                                    subtitle: "Design",
                                    price: "$1500",
                                    describe: "Provide your business with a variety of digital solutions to promote.",
                                    active: [true, true, false],
                                    type: "popular"
                                },
                                {
                                    id: 3,
                                    subtitle: "Design+Code",
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

            <section className="section questions__section--webflow">
                <div className="container">
                    <div className="questions__box">
                        <div className="questions__half-box">
                            <div className="howWork__item">
                                <h4 className="h4-subtitle">Faq</h4>
                                <h3 className="h3-title">Frequently Asked Questions</h3>
                                <p className="header__paragraph" >A digital agency is a business you hire to outsource your digital marketing efforts, instead of handling in-house.</p>
                                <a href="#" className="link">Contact Us</a>
                            </div>
                        </div>
                        <div className="questions__half-box">
                            <Accordion
                                type="standard"
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

            <section className="section partner-section">
                <div className="container">
                    <Partner />
                </div>
            </section>

            <section className="section awards-section--webflow ">
                <div className="container">
                    <div className="line"></div>
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

            <section className="section blog__section--webflow section--dark">
                <div className="container">
                    <div className="questions__box blog__box">
                        <div className="questions__half-box">
                            <div className="howWork__item">
                                <h4 className="h4-subtitle">Our Blog</h4>
                                <h3 className="h3-title">Latest Blog <br /> Articles</h3>
                            </div>
                        </div>
                        <div className="questions__half-box">
                            <Button
                                type={"primaryWhite"}
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

            <section className="section newsletter__section--webfolow section--dark">
                <div className="container">
                    <div className="line"></div>
                    <Newsletter btnType={"primaryWhite"}/>
                    <div className="line"></div>
                </div>
            </section>

            <section className="section contact__section--personal section--dark">
                <div className="container">
                    <div className="contact__section-wrapper">
                        <div className="contact__section-col">
                            <ContactForm />
                        </div>
                        <div className="contact__section-col">
                            <h4 className="h4-subtitle">Contact</h4>
                            <h2 className="h2-title">Contact Me</h2>
                            <p className="feature__paragraph">A digital agency is a business you hire to outsource your digital marketing efforts, instead of handling in-house.</p>
                            <div className="features__todo">
                                <div className="features__todo-item">
                                    <p className="features__todo-text">2247 Lunetta Street, TX 76301</p>
                                    <p className="features__todo-text">+1 (234) 567-89-00</p>
                                    <p className="features__todo-text">info@agency.com</p>
                                </div>
                            </div>

                        </div>
                    </div>
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

            <Footer name={"Webflow"} />

        </Fragment>
    )
}

export default Webflow