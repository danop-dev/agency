import React, { Fragment } from 'react';
import Button from './Button';

const ContactForm = () => {
    return (
        <Fragment>
            <form action="#" className="contact-form">
                <div className="contact-form__title">Get In Touch</div>
                <input type="email" name="contact-email" className="contact-form__email contact-form--label" placeholder="Your email" />
                <input type="text" name="contact-sbj" className="contact-form__sbj contact-form--label" placeholder="Subject" list="sbj-li" />
                <datalist id="sbj-li">
                    <option>Subject 1</option>
                    <option>Subject 2</option>
                    <option>Subject 3</option>
                </datalist>
                <textarea name="contact-msg" className="contact-form__msj" placeholder="Message"></textarea>
                <div className="contact-form__btn">
                    <Button
                        type={"primaryOrange"}
                        name={"Submit Now"}
                    />
                </div>
            </form>
        </Fragment>
    )
}

export default ContactForm