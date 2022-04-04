import React, { Fragment } from 'react';

const CardContentSimple = ({
    imgPath,
    title,
    paragraph,
    btn,
    btnVal
}
) => {
    return (
        <Fragment>
            <div className="card-img__box">
                <img className="card-img" src={imgPath} alt="icon" />
            </div>
            <div className="card-title">{title}</div>
            <div className="card-p">{paragraph}</div>
            {btn ? <a href="#" className="card-btn">{btnVal}</a> : null}

        </Fragment>
    )
}
export default CardContentSimple