import React, { Fragment } from 'react';

// +++ Img +++
import brand1 from '../assets/img/partners/Bitmap.png';
import brand2 from '../assets/img/partners/Bitmap-1.png';
import brand3 from '../assets/img/partners/Bitmap-2.png';
import brand4 from '../assets/img/partners/Bitmap-3.png';
import brand5 from '../assets/img/partners/Bitmap-4.png';


const Partner = () => {
  return (
    <Fragment>
        <div className="partner-box">
            <img src={brand1} alt="Partner" />
            <img src={brand2} alt="Partner" />
            <img src={brand3} alt="Partner" />
            <img src={brand4} alt="Partner" />
            <img src={brand5} alt="Partner" />
        </div>
    </Fragment>
  )
}

export default Partner