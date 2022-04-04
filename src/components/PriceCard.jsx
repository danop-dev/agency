import React, { Fragment } from 'react';
import Button from './Button';

const PriceCard = ({pricesData}) => {

    return (
        <Fragment>
            {pricesData.map(item => (
                <div className="pricing-card">
                    {item.type == "popular" ? <div className="pricing-card__popular">Popular</div> : null}
                    <div className="h4-suptitle">{item.supTitle}</div>
                    <div className="pricing-card__price">{item.price}</div>
                    <div className="pricing-card__text">{item.describe}</div>
                    <div className="pricing-card__component">
                        {item.active[0] ? <div className="pricing-card__component-item pricing-card__component-item--active">Brand Design</div> : <div className="pricing-card__component-item pricing-card__component-item--disable">Brand Design</div>}
                        {item.active[1] ? <div className="pricing-card__component-item pricing-card__component-item--active">Market Analysis</div> : <div className="pricing-card__component-item pricing-card__component-item--disable">Market Analysis</div>}
                        {item.active[2] ? <div className="pricing-card__component-item pricing-card__component-item--active">Production</div> : <div className="pricing-card__component-item pricing-card__component-item--disable">Production</div>}      
                    </div>
                    {item.type === "popular" ? <Button type={"primaryOrange"} name="Contact Us" /> : <Button type={"secundaryTransparent"} name="Contact Us" />}
                </div>

                
            ))}
        </Fragment>
    )
}

export default PriceCard