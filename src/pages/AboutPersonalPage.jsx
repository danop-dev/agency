import React, { Fragment } from 'react';

import NavBar from '../components/Navbar';
import Partner from '../components/Partner';
import Footer from '../containers/Footer';
import HeadMin from '../containers/HeadMin';
import Button from '../components/Button';

//img
import Me from '../assets/img/personalPage/me/me.jpg';
import blockImg from '../assets/img/block.png';

// decor
import starGift from '../assets/img/gift-star.svg';

const AboutPersonalPage = () => {
    return (
        <Fragment>
            <NavBar name={"Agency"} />
            <HeadMin
                name={"About Me"}
                paragraph={"Agency provides a full service range including technical skills, design, business understanding."}
            />

            <section className="section personal-info__section">
                <div className="container">
                    <div className="personal-img">
                        <img src={Me} alt="Me" />
                    </div>
                </div>
                <div className="container--min">
                    <div className="header__content">
                        <h4 className="h4-subtitle">Gabriel Pires</h4>
                        <h3 className="h3-title">Professional Web Designer</h3>
                        <p className="header__paragraph" >Ability to put themselves in the merchant's shoes. It is meant to partner on the long run, and work as an extension of the merchant's team. </p>
                        <p className="header__paragraph" >A digital agency is a business you hire to outsource your digital marketing efforts, instead of handling in-house. They can provide your business with a variety of digital solutions to promote your product or service online and help you.</p>

                    </div>
                </div>
            </section>

            <section className="section statistics-info__section statistics-info__section--personal">
                <div className="container">
                    <div className="contact-our-info__wrapper">
                        <div className="contact-our-info__item">
                            <div className="contact-our-info__header">
                                <div className="contact-our-info__header-info">
                                    <div className="contact-our-info__header-statistics">42%</div>
                                    <div className="contact-our-info__text">Years of experience</div>
                                </div>
                            </div>
                        </div>

                        <div className="contact-our-info__item">
                            <div className="contact-our-info__header">
                                <div className="contact-our-info__header-info">
                                    <div className="contact-our-info__header-statistics">73+</div>
                                    <div className="contact-our-info__text">Projects Done</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section personal-video__section">
                <div className="container--min">
                    <div className="header__content">
                        <h4 className="h4-subtitle">How we work</h4>
                        <h3 className="h3-title">Making Your Projects Look Awesome</h3>
                        <p className="header__paragraph" >Design, business understanding, ability to put themselves in the merchant's shoes meant to partner.</p>

                        <div className="video-player">
                            <button className="play-btn"></button>
                            <div className="video-timeline">1.45</div>
                        </div>

                        <p className="header__paragraph" >Ability to put themselves in the merchant's shoes. It is meant to partner on the long run, and work as an extension of the merchant's team.</p>
                        <p className="header__paragraph" >A digital agency is a business you hire to outsource your digital marketing efforts, instead of handling in-house. They can provide your business with a variety of digital solutions to promote your product or service online and help you.</p>

                    </div>
                </div>
            </section>

            <section className="section founder-personal__section">
                <div className="container">
                    <div className="line"></div>
                </div>
                <div className="container--min">
                    <div className="founder-personal__info">
                        <h5 className="h4-subtitle">Founder Words</h5>
                        <div className="founder-words__title">Digital agency is a business you hire to outsource your digital marketing efforts</div>
                        <div className="founder__data">
                            <div className="founder-name">Ren Delan</div>
                            <div className="founder-position">Founder</div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section partner-section">
                <div className="container">
                    <div className="line"></div>
                    <Partner />
                </div>
            </section>

            <section className="section contact-card__section contact-card--personal --ligth-dark-bg">
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
            </section>
            <Footer type="dark" name="Personal"/>

        </Fragment>
    )
}

export default AboutPersonalPage