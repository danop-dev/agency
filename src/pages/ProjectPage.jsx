import React, { Fragment } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

import NavBar from '../components/Navbar';
import BannerContact from '../components/BannerContact';
import WorkCard from '../components/WorkCard';
import Footer from '../containers/Footer';

//img
import client from '../assets/img/partners/Bitmap-1.png';
import projectImg from '../assets/img/work/1.jpg';

//gallery img
import gallery1 from '../assets/img/personalPage/gallery/1.jpg';
import gallery2 from '../assets/img/personalPage/gallery/2.jpg';
import gallery3 from '../assets/img/personalPage/gallery/3.jpg';
import gallery4 from '../assets/img/personalPage/gallery/4.jpg';

// woks
import workImg1 from '../assets/img/work/1.jpg';
import workImg2 from '../assets/img/work/2.jpg';

//banner img
import bannerContactImg from '../assets/img/pic-banner.png';

const ProjectPage = () => {
    return (
        <Fragment>
            <NavBar name={"Agency"} />
            <section className="section info-section--project">
                <div className="container--min">
                    <div className="info-project__wrapper">
                        <a href="/portfolio" className="back-btn">Back to portfolio</a>
                        <h2 className="h2-title">Work Media <br /> Project</h2>
                        <p className="paragraph"> Agency provides a full service range including technical skills, design, business understanding. </p>
                        <p className="paragraph paragraph--opacity"> Outsource your digital marketing efforts, instead of handling in-house. They can provide your business with a variety of digital solutions to promote your product or service online and help you. </p>
                        <div className="info-client-project">
                            <div className="info-client__col">
                                <div className="info-client__head name-li">Category</div>
                                <ul className="info-client__list">
                                    <li className="info-client__list-item paragraph">Art Direction</li>
                                    <li className="info-client__list-item paragraph">User Interface</li>
                                    <li className="info-client__list-item paragraph">Branding Strategy</li>
                                    <li className="info-client__list-item paragraph">Print Design</li>
                                    <li className="info-client__list-item paragraph">3D Render</li>
                                </ul>
                            </div>
                            <div className="info-client__col">
                                <div className="info-client__head name-li">Client</div>
                                <img className="logo-client" src={client} alt="Client" />

                                <div className="info-client__head name-li">Date</div>
                                <div className="info-client__date paragraph">Dec 2021</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="personal-img">
                        <img src={projectImg} alt="Me" />
                    </div>
                </div>
                <div className="container--min">
                    <div className="text-info-box">
                        <h3 className="h3-title">Problem</h3>
                        <p className="paragraph paragraph--opacity">Ability to put themselves in the merchant's shoes. It is meant to partner on the long run, and work as an extension of the merchant's team.</p>
                        <p className="paragraph paragraph--opacity">A digital agency is a business you hire to outsource your digital marketing efforts, instead of handling in-house. They can provide your business with a variety of digital solutions to promote your product or service online and help you.</p>
                    </div>
                </div>

                <div className="container">
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

                <div className="container--min">
                    <div className="text-info-box">
                        <h3 className="h3-title">Solution</h3>
                        <p className="paragraph paragraph--opacity">Put themselves in the merchant's shoes. It is meant to partner on the long run, and work as an extension of the merchant's team.</p>
                        <p className="paragraph paragraph--opacity">Agency is a business you hire to outsource your digital marketing efforts, instead of handling in-house. They can provide your business with a variety of digital solutions to promote your product or service online and help you.</p>
                    </div>
                    <div className="social-share">
                        <div className="center-content">
                            <div className="share-head">SHARE ON</div>
                            <ul className="share-list">
                                <li className="social-li-item">
                                    <a href="#" className="social__link">
                                        <FontAwesomeIcon icon={faFacebookF} className="social__link-icon" />
                                    </a>
                                </li>
                                <li className="social-li-item">
                                    <a href="#" className="social__link">
                                        <FontAwesomeIcon icon={faTwitter} className="social__link-icon" />
                                    </a>
                                </li>
                                <li className="social-li-item">
                                    <a href="#" className="social__link">
                                        <FontAwesomeIcon icon={faInstagram} className="social__link-icon" />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section recent-project-section">
                <div className="container">
                    <div className="line"></div>
                    <h4 className="h4-title">Related Projects</h4>
                    <div className="recent-project__wrapper">
                        <div className="work__items-box d-flex ">
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
            <Footer name={"Agency"} />
        </Fragment>
    )
}

export default ProjectPage