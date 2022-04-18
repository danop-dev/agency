import React, { Fragment } from 'react';

const Accordion = ({ type, accordionData }) => {

    let typeClass = `accordion `;
    type !== "standart" ? typeClass += `accordion--bigContent` : typeClass = ``;

    function listContent(liContent){
        let key = 1;
        return( liContent.map(item => (  <p key={key++} className="features__todo-text">{item}</p> )) )
    }

    function acordionContent(contentAccordionData) {
        return (
            <div className="features__item">
                <h2 className="h2-title">{contentAccordionData.title}</h2>
                <p className="feature__paragraph" >{contentAccordionData.paragraph}</p>
                <div className="features__todo">
                    <div className="features__todo-item">
                        {listContent(contentAccordionData.listInfo)}
                    </div>
                </div>
            </div>
        )
    }

    return (
        <Fragment>
            <div className={typeClass}>
                {accordionData.map(item => (
                    <div key={item.id} className="accordion__item">
                        <div className="accordion__trigger"><div>{item.trigger}</div></div>
                        <div className="accordion__content">{
                            type === "standart" ? item.content : acordionContent(item.content)
                        }</div>
                    </div>
                ))}
            </div>
        </Fragment>
    )
}

export default Accordion