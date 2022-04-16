import React, { Fragment } from 'react';


const Accordion = ({ type, accordionData }) => {

    function acordionContent(contentAccordionData) {


        return (
            <div className="features__item">
                <h2 className="h2-title">Designer</h2>
                <p className="feature__paragraph" >Service range including technical skills, design, business understanding.</p>
                <div className="features__todo">
                    <div className="features__todo-item">
                        <p className="features__todo-text">Range including technical skills</p>
                        <p className="features__todo-text">Business understanding</p>
                        <p className="features__todo-text">Partner on the long run</p>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <Fragment>
            <div className="accordion accordion--bigContent">
                {accordionData.map(item => (
                    <div className="accordion__item">
                        <div className="accordion__trigger">{item.trigger}</div>
                        <div className="accordion__content">{
                            type === "standart" ? item.content : acordionContent(accordionData)

                        }</div>
                    </div>
                ))}
            </div>
        </Fragment>
    )
}

export default Accordion