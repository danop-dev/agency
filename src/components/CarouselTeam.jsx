import React, { Fragment } from 'react'

const CarouselTeam = ({
    imgPeople

}) => {

    let i = 0;

    return (
        <Fragment>
            <div class="team__carousel">
                {imgPeople.map(item => (
                    <div key={item.id} className="team__card">
                        <div className="team__card-img">
                            <img src={item.img} alt="Team member" key={i++}/>
                        </div>
                        <div className="team__card-info">
                            <div className="team__card-name">{item.name}</div>
                            <div className="team__card-position">{item.pos}</div>
                        </div>
                    </div> 
                ))}
            </div>
        </Fragment>
    )
}

export default CarouselTeam