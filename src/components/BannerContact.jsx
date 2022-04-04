import React, { Fragment } from 'react';
import Button from './Button';

const BannerContact = ({colorText, bannerContactImg, bgColor}) => {
    return (
        <Fragment>
            <div className="banner-contact__wrapper" style={{ backgroundColor: bgColor }}>
                <div className="banner-contact__content">   
                   
                    <h2 className="h1-title" style={{ color: colorText }} >We’re Help To Build Your Dream Project</h2>
                    <p className="header__paragraph" style={{ color: colorText }} >A digital agency is a business you hire to outsource your digital marketing efforts, instead of handling in-house.</p>
                    <div className="header__btn-box">
                        <Button
                            type="secundaryTransparent"
                            name="Contact Us"
                        />
                    </div>
                </div>
                <div className="banner-contact__content">
                    <div className="banner-contact__img">
                        <img src={bannerContactImg} alt="Img Banner" />
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default BannerContact