import React, { Fragment } from 'react';
import Rating from '@mui/material/Rating';
import Review from './Review';

const TestimonialsCard = ({testimonialsData}) => {
    return (
        <Fragment>
            {testimonialsData.map(item => (
                <div key={item.id} className="testimonials-card">
                    <div className="testimonials-card__rating">
                        <Rating name="half-rating" defaultValue={item.rating} precision={0.5} />
                    </div>
                    <div className="testimonials-card__text">{item.text}</div>
                    <div className="testimonials-card__pers-info">
                        <Review
                            fontColor={"#391400"}
                            img={item.imgPers}
                            name={item.name}
                            pos={item.pos}
                            sizeImg={80}
                        />
                    </div>
                </div>
            ))}

        </Fragment>
    )
}

export default TestimonialsCard