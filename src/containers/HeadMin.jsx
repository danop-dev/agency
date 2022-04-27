import React, {Fragment} from 'react'

const HeadMin = ({name, paragraph}) => {
    return (
        <Fragment>
            <section className="header-min section--dark">
                <div className="container">
                    <div className="header-min__wrapper">
                        <h2 className="header-min__title">{name}</h2>
                        <div className="header-min__paragraph">{paragraph}</div>
                    </div>
                </div>
            </section>
        </Fragment>
    )
}

export default HeadMin