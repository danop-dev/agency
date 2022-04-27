import React, { Fragment } from 'react';
import pic1 from '../assets/img/pic1.png';

const Features = ({type, img}) => {

    let color;
    let colOp;
    type === "dark" ? color = "#fff" : color = "#391400"; 
    type === "dark" ? colOp = "rgba(255, 255, 255, 0.65)" : colOp = "rgba(57, 20, 0, 0.65)"; 

  return (
    <Fragment>
        <div className="features__wrapper">
            <div className="features__item --paddingRight20">
                <h4 className="h4-subtitle">Features</h4>
                <h2 style={{color: color}} className="h2-title">Give Your Site A New Look</h2>
                <p style={{color: color}} className="feature__paragraph" >Service range including technical skills, design, business understanding.</p>
                <div className="features__todo">
                    <div className="features__todo-item">
                        <p style={{color: colOp}} className="features__todo-text">Range including technical skills</p>
                        <p style={{color: colOp}} className="features__todo-text">Business understanding</p>
                        <p style={{color: colOp}} className="features__todo-text">Partner on the long run</p>
                    </div>
                </div>
            </div>
            <div className="features__item">
                <img className="feature-img" src={img} alt="Pic" />
            </div>
        </div>
    </Fragment>
  )
}

export default Features