import React, { Fragment } from 'react';
import Avatar from '@mui/material/Avatar';

const Review = ({ fontColor, img, name, pos, sizeImg }) => {
  
  return (
    <Fragment>
      <div className="review">
        <Avatar alt="People" src={img} sx={{ width: sizeImg || 48, height: sizeImg || 48 }} />
        <div className="info" style={{ color: fontColor }} >
          {name ? <div className='testimonials-card__pers-name'> {name} </div> : <div className="text">"Put themselves in the merchant's shoes"</div>}
          <div className="company">{pos || "Meta Inc."}</div>
        </div>
      </div>
    </Fragment>
  )
}

export default Review