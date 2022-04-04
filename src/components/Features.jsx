import React, { Fragment } from 'react';
import pic1 from '../assets/img/pic1.png';

const Features = () => {
  return (
    <Fragment>
        <div className="features__wrapper">
            <div className="features__item --padingRight20">
                <h4 className="h4-suptitle">Features</h4>
                <h2 className="h2-title">Give Your Site A New Look</h2>
                <p className="feature__paragraph" >Service range including technical skills, design, business understanding.</p>
                <div className="features__todo">
                    <div className="features__todo-item">
                        <p className="features__todo-text">Range including technical skills</p>
                        <p className="features__todo-text">Business understanding</p>
                        <p className="features__todo-text">Partner on the long run</p>
                    </div>
                </div>
            </div>
            <div className="features__item">
                <img className="feature-img" src={pic1} alt="Pic" />
            </div>
        </div>
    </Fragment>
  )
}

export default Features