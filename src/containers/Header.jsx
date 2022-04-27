import React, { Fragment } from 'react';
import Button from '../components/Button';
import Review from '../components/Review';

import star from '../assets/img/Star.png';
import people from '../assets/img/people2.png';


function decorationDisplay(decoration) {
    return decoration ? <img className="starBG" src={star} alt="Star" /> : null;
}

const Header = ({
    subtitle,
    title,
    supParagraph,
    paragraph,
    imgPath,
    colorBgClass,
    colorText,
    rowReverse,
    starDecor,
    positionClass,
    review,
    reviewColor,
    review_in,
    buttonData

}) => {
    const sectionClass = `section header__section ` + colorBgClass;

    return (
        <Fragment>
            <div className={positionClass}>
                <div className="container">
                    <div className="header__wrapper" style={{ flexDirection: rowReverse}}>
                        <div className="header__wrapper-item">
                            <div className="header__content">

                                {decorationDisplay(starDecor)}
                                <h4 className="h4-subtitle">{subtitle}</h4>
                                <h1 className="h1-title" style={{ color: colorText }} >{title}</h1>
                                <span className="sup-paragraph" style={{ color: colorText }} >{supParagraph}</span>
                                <p className="header__paragraph" style={{ color: colorText }} >{paragraph}</p>

                                {review_in ? <Review img={people} /> : null}  {/* COLOR  DO FIX */}

                                <div className="header__btn-box">
                                    {buttonData.map(item => (
                                        <Button key={item.id} 
                                            type={item.type}
                                            name={item.name}
                                        />
                                    ))}
                                </div>

                            </div>
                        </div>
                        <div className="header__wrapper-item">
                            <img className="header__photo" src={imgPath} alt="Header Img" />
                        </div>
                    </div> {/* header__wrapper close */}

                    {review ? <Review fontColor={reviewColor} img={people} /> : null}

                </div> {/* container */}
            </div>
        </Fragment>
    )
}

export default Header