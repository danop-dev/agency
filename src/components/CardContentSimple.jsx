import React, { Fragment } from 'react';

const CardContentSimple = ({
    imgPath,
    title,
    paragraph,
    btn,
    btnVal,
    style
}
) => {

    let cardFlex = `card-img__box `;
    let cardTitle = `card-title `;

    if(style === "line"){
        cardFlex += `card-img__box--row`;
        cardTitle += `card-title--row`;
    }


    return (
        <Fragment>
            <div className={cardFlex}>
                <img className="card-img" src={imgPath} alt="icon" />
                {style === "line" ? <div className={cardTitle}>{title}</div> : null}
            </div>
            {style !== "line" ? <div className={cardTitle}>{title}</div> : null}
            <div className="card-p">{paragraph}</div>
            {btn ? <a href="#" className="card-btn">{btnVal}</a> : <a href="#" className="card-btn--more">{btnVal}</a>}

        </Fragment>
    )
}
export default CardContentSimple