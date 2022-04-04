import React, { Fragment } from 'react'

const Accordion = ({accordionData}) => {
    return (
        <Fragment>
            <div className="accordion">
                {accordionData.map(item => (
                    <div className="accordion__item">
                        <div className="accordion__trigger">{item.trigger}</div>
                        <div className="accordion__content">{item.content}</div>
                    </div>
                ))}       
            </div>
        </Fragment>
    )
}

export default Accordion