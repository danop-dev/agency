import React, { Fragment } from 'react';

const WorkCard = ({
    imgPath,
    subtitle,
    title
}) => {
    return (
        <Fragment>
            <a href="#" className="work__card-item"  style={{ backgroundImage: `url(${imgPath})` }}>
                <div className="card-info">
                    <span className="card-info__suptitle">{subtitle}</span>
                    <div className="card-info__title">{title}</div>
                </div>
            </a>
        </Fragment>
    )
}

export default WorkCard