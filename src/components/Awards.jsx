import React, { Fragment } from 'react';

const Awards = ({ awardsData }) => {
  return (
    <Fragment>
      <div className="awards__wrapper">
        {awardsData.map(item => (
          <div className="awards__wrapper-item">
            <div className="line"></div>
            <div className="awards__item">
              <div className="awards__item-box">
                <div className="awards__img">
                  <img src={item.img} alt="Award" />
                </div>
                <div className="awards__title">{item.title}</div>
              </div>
              <div className="awards__item-box">
                <div className="awards__date">{item.date}</div>
              </div>
              <div className="awards__item-box">
                <div className="awards__text">{item.text}</div>
                <div className="awards__logo">
                  <img src={item.logo} alt="Award" />
                </div>
              </div>
            </div>
          </div>
        ))}
        <div className="line"></div>
        <div className="awards__more">
          <div className="awards__more-text">Want more awards?</div>
          <a href="#" className="awards__more-btn">Explore Now</a>
        </div>
      </div>
    </Fragment>
  )
}
export default Awards