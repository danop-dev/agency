import React, {Fragment} from 'react';
 

const EventsCard = ({
    day,
    month,
    year,
    time,
    title,
    paragraph,
    btn,
    btnVal,
    btnLink
}) => {
    return (
        <Fragment>
            <div className="event-card">
                <div className="event__top-info">
                    <div className="event__date">
                        <div className="event__day">{day}</div>
                        <div className="event__date-MY">
                            <div className="event__month">{month}</div>
                            <div className="event__year">{year}</div>
                        </div>
                    </div>
                    <div className="event__time">{time}</div>
                </div>
                <div className="event__bottom-info">
                    <div className="card-title">{title}</div>
                    <div className="card-p">{paragraph}</div>
                    {btn ? <a href={btnLink} className="card-btn">{btnVal}</a> : null}
                    
                </div>
            </div>
        </Fragment>
    )
}

export default EventsCard