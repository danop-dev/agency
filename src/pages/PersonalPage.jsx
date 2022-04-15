import React, { Fragment } from 'react';
import NavBar from '../components/Navbar';
import Header from '../containers/Header';
import Partner from '../components/Partner';
import Features from '../components/Features';
import CardContentSimple from '../components/CardContentSimple';
import WorkCard from '../components/WorkCard';
import Button from '../components/Button';
import TestimonialsCard from '../components/TestimonialsCard';
import Accordion from '../components/Accordion';
import BlogCard from '../components/BlogCard';
import ContactForm from '../components/ContactForm';
import Newsleter from '../components/Newsleter';
import Footer from '../containers/Footer';

//img 
import headImg from '../assets/img/personalPage/head-img.png';
import aboutPic from '../assets/img/personalPage/pic-about.png';
import pic1 from '../assets/img/personalPage/pic1.png';
import blockImg from '../assets/img/block.png';

//icon
import DesignIcon from '../assets/img/icon/Design.svg';
import DevelopIcon from '../assets/img/icon/Develop.svg';


// woks
import workImg1 from '../assets/img/work/1.jpg';
import workImg2 from '../assets/img/work/2.jpg';
import workImg3 from '../assets/img/work/3.jpg';

// decor
import starGift from '../assets/img/gift-star.svg';

//testimonial img
import testimonialPers1 from '../assets/img/testimonials/1.png';
import testimonialPers2 from '../assets/img/testimonials/2.png';
import testimonialPers3 from '../assets/img/testimonials/3.png';

//blog img
import blogImg1 from '../assets/img/blog/1.jpg';
import blogImg2 from '../assets/img/blog/2.jpg';
import blogImg3 from '../assets/img/blog/3.jpg';

//banner img
import bannerContactImg from '../assets/img/pic-banner.png';

//gallery img
import gallery1 from '../assets/img/personalPage/gallery/1.jpg';
import gallery2 from '../assets/img/personalPage/gallery/2.jpg';
import gallery3 from '../assets/img/personalPage/gallery/3.jpg';
import gallery4 from '../assets/img/personalPage/gallery/4.jpg';
import gallery5 from '../assets/img/personalPage/gallery/5.jpg';
import gallery6 from '../assets/img/personalPage/gallery/6.jpg';


const PersonalPage = () => {
    return (
        <Fragment>
            <NavBar name={"Personal"}/>
            <section className="section header__section" >
                <div className="container">
                    <Header
                        subtitle="Gabriel Pires"
                        title="The Simple, Clean Design"
                        paragraph="Agency provides a full service range including technical skills, design, business understanding."
                        imgPath={headImg}
                        colorText="#fff"
                        starDecor={false}
                        positionClass="centerWrapper"
                        review={false}

                        buttonData={[
                            { type: "primaryOrange", name: "About Us" }
                        ]}
                    />
                </div>
            </section>

            <section className="section services-pers__section">
                <div className="container">
                    <div className="head-work">
                        <h4 className="h4-suptitle">Service</h4>
                        <h2 className="h2-title">How I Can Help <br /> You With</h2>
                    </div>
                    <div className="services-pers__wrapper">
                        <div className="wrapper-card item--size50">
                            <div className="card-sv__item">
                                <CardContentSimple
                                    imgPath={DesignIcon}
                                    title="Design"
                                    paragraph="Agency is a business you hire to outsource your digital marketing efforts, instead of handling in-house."
                                    btn={true}
                                    btnVal="Learn More"
                                    style="line"
                                />
                            </div>
                            <div className="card-sv__item">
                                <CardContentSimple
                                    imgPath={DevelopIcon}
                                    title="Development"
                                    paragraph="Hire to outsource your digital marketing efforts, instead of handling in-house can provide your business."
                                    btn={true}
                                    btnVal="Learn More"
                                    style="line"
                                />
                            </div>
                        </div>
                        <div className="center-content">
                            <div className="services-more-info">
                                <span>Want more service?</span>
                                <a href="#">Explore Now</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section works-section section--dark">
                <div className="container">
                    <div className="work-head--btn">

                        <div className="head-info">
                            <h4 className="h4-suptitle">Our Team</h4>
                            <h2 className="h2-title --white">Team of Designers <br /> and Developers</h2>
                        </div>
                        <Button
                            name="Explore More"
                        />
                    </div>
                </div>
                <div className="work__wrapper work__wrapper--large">
                    <div className="work__items-box d-flex --work-3-item">
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
                        <WorkCard
                            imgPath={workImg3}
                            subtitle="Branding"
                            title="KeyBoard"
                        />
                    </div>
                </div>
            </section>

            <section className="section about-section">
                <Header
                    subtitle="Gabriel Pires"
                    title="Professional Web Designer"
                    supParagraph="Provides a full service range"
                    paragraph="Ability to put themselves in the merchant's shoes. It is meant to partner on the long run, and work as an extension of the merchant's team."
                    imgPath={aboutPic}
                    colorBgClass="headre__section--PapayaWhip"
                    rowReverse="row-reverse"
                    starDecor={false}
                    positionClass='staticWrapper'

                    buttonData={[
                        { type: "primaryOrange", name: "About Us" }
                    ]}
                />
            </section>

            <section className="section statistics-info__section statistics-info__section--personal">
                <div className="container">
                    <div className="contcat-our-info__wrapper">
                        <div className="contcat-our-info__item">
                            <div className="contcat-our-info__header">
                                <div className="contcat-our-info__header-info">
                                    <div className="contcat-our-info__header-statistics">42%</div>
                                    <div className="contcat-our-info__text">Years of experience</div>
                                </div>
                            </div>
                        </div>

                        <div className="contcat-our-info__item">
                            <div className="contcat-our-info__header">
                                <div className="contcat-our-info__header-info">
                                    <div className="contcat-our-info__header-statistics">73+</div>
                                    <div className="contcat-our-info__text">Projects Done</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section features-section section--dark">
                <div className="container">
                    <Features type="dark" img={pic1} />
                </div>
            </section>

            <section className="section contact-card__section contact-card--personal --ligth-dark-bg">
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
                        <div className="contact-card__info center-content">
                            <p className="standart--paragraph">Put themselves in the merchant's shoes. It is meant to partner on the long run.</p>
                        </div>
                        <div className="contact-card__info">
                            <img src={blockImg} alt="Card" className="contact-card__center-img" />
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
                    <div className="testimonials__wrapper testimonials__wrapper--personal">
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

            <section className="section questions__section section--dark">
                <div className="container">
                    <div className="questions__box">
                        <div className="questions__half-box">
                            <div className="howWork__item">
                                <h4 className="h4-suptitle">Faq</h4>
                                <h3 className="h3-title">Frequently Asked Questions</h3>
                                <p className="header__paragraph" >A digital agency is a business you hire to outsource your digital marketing efforts, instead of handling in-house.</p>
                                <a href="#" className="link --white">Contact Us</a>
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
                </div>
            </section>
            
            <section className="section partner-section section--dark">
                <div className="container">
                    <Partner />
                </div>
            </section>

            <section className="section blog__section blog__box--personal">
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
                                img: blogImg1,
                                link: "#",
                                category: "Stories",
                                title: "Agency is a business you hire to outsource",
                                date: "5 Nov, 2021"
                            },
                            {
                                img: blogImg2,
                                link: "#",
                                category: "Design",
                                title: "Outsource your digital marketing efforts",
                                date: "29 Oct, 2021"
                            },
                            {
                                img: blogImg3,
                                link: "#",
                                category: "Marketing",
                                title: "Your business with a variety of digital",
                                date: "21 Oct, 2021"
                            }
                        ]}
                        type={"firstBig"}
                    />
                </div>
            </section>

            <section className="section newsletter__section newsletter__section--personal padingTopNull">
                <div className="container">
                    <div className="line"></div>
                    <Newsleter />
                </div>
            </section>

            <section className="section contact__section--personal section--dark">
                <div className="container">
                    <div className="contact__section-wrapper">
                        <div className="contact__section-col">
                            <ContactForm />
                        </div>
                        <div className="contact__section-col">
                            <h4 className="h4-suptitle">Contact</h4>
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

            <section className="section about-section">
                <Header
                    subtitle="Gabriel Pires"
                    title="Help To Build Your Dream Project"
                    paragraph="A digital agency is a business you hire to outsource your digital marketing efforts, instead of handling in-house."
                    imgPath={bannerContactImg}
                    colorBgClass="headre__section--PapayaWhip"
                    starDecor={false}
                    positionClass='staticWrapper'
                    buttonData={[
                        { type: "primaryOrange", name: "Contact Me" }
                    ]}
                />
            </section>
            <section className="section-gallery">
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
                    <div className="gallery__item">
                        <img src={gallery5} alt="Gallery" />
                    </div>
                    <div className="gallery__item">
                        <img src={gallery6} alt="Gallery" />
                    </div>
                </div>
            </section>
            
            <Footer type="dark" name="Personal"/>
        </Fragment>
    )
}

export default PersonalPage