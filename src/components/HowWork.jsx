import React, { Fragment } from 'react';

const HowWork = () => {
    return (
        <Fragment>
            <div className="howWork__wrapper">
                <div className="howWork__item">
                    <div className="header__content">             
                        <h4 className="h4-subtitle">How we work</h4>
                        <h3 className="h3-title">Making Your Projects Look Awesome</h3>
                        <p className="header__paragraph" >Technical skills, design, businessunderstanding, ability to put themselves in the merchant's shoes.</p>

                        <a href="#" className="link">Read More</a>
                    </div>
                </div>
                <div className="howWork__item">
                    <div className="enumeration">
                        <div className="enumeration__item">
                            <div className="enum-num">1</div>
                            <div className="enum-info">Full service range including</div>
                        </div>
                        <div className="enumeration__item">
                            <div className="enum-num">2</div>
                            <div className="enum-info">Technical skills, design, business</div>
                        </div>
                        <div className="enumeration__item">
                            <div className="enum-num">3</div>
                            <div className="enum-info">Themselves in the merchant's</div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>

    )
}

export default HowWork