import React, {Fragment} from 'react'

const HeadMin = ({name, paragraph}) => {
    return (
        <Fragment>
            <section className="headre-min section--dark">
                <div className="container">
                    <div className="headre-min__wrapper">
                        <h2 className="headre-min__title">{name}</h2>
                        <div className="headre-min__paragraph">{paragraph}</div>
                    </div>
                </div>
            </section>
        </Fragment>
    )
}

export default HeadMin