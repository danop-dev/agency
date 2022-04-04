import React, { Fragment } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons'



const Footer = () => {
    return (
        <Fragment>
            <footer className="footer">
                <div className="container">
                    <div className="footer__wrapper">
                        <div className="footer__col">
                            <div className="company-name">Agency</div>
                        </div>
                        <div className="footer__col">
                            <div className="name-li">Menu</div>
                            <ul className="footer__list">
                                <li className="footer__li-item"><a href="#" className="footer__link">About</a></li>
                                <li className="footer__li-item"><a href="#" className="footer__link">Services</a></li>
                                <li className="footer__li-item"><a href="#" className="footer__link">Blog</a></li>
                                <li className="footer__li-item"><a href="#" className="footer__link">Contact</a></li>
                            </ul>
                        </div>
                        <div className="footer__col">
                            <div className="name-li">Services</div>
                            <ul className="footer__list">
                                <li className="footer__li-item"><a href="#" className="footer__link">Design</a></li>
                                <li className="footer__li-item"><a href="#" className="footer__link">Development</a></li>
                                <li className="footer__li-item"><a href="#" className="footer__link">Marketing</a></li>
                                <li className="footer__li-item"><a href="#" className="footer__link">See More</a></li>
                            </ul>
                        </div>
                        <div className="footer__col">
                            <ul className="footer__social-list">
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
                    <div className="line"></div>
                    <div className="footer__info-row">
                        <div className="footer__copyright">Copyright © 2022 Laaqiq. All Rights Reserved.</div>
                        <div className="footer__agreement">
                            <a href="#" className="footer__agreement-teams">Terms of Use</a>
                            <a href="#" className="footer__agreement-teams">Privacy Policy</a>
                        </div>
                    </div>
                </div>     
            </footer>
        </Fragment>
    )
}

export default Footer