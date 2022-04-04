import React, { Fragment } from 'react'
import Button from './Button'

const Newsleter = () => {
    return (
        <Fragment>
            <div className="newsletter__wrapper">
                <div className="newsletter__title h3-title">Newsletter</div>
                <div className="newsletter__form">
                    <form action="#" className="newsletter-form-action">
                        <input className="newsletter__email" type="email" name="email" placeholder="Your email" />   
                        <Button
                            type={"secundaryTransparent"}
                            name={"Subscribe"}
                        />
                    </form>
                </div>
            </div>
        </Fragment>
    )
}

export default Newsleter