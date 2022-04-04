import React, { Fragment } from 'react';

const WorkHead = ({color}) => {
    return (
        <Fragment>
            <div className="head-work">
                <h4 className="h4-suptitle">Portfolio</h4>
                <h2 style={{color: color}} className="h2-title --mb35">Latest Work</h2>
                <ul className="work-list-btn">
                    <li className="work-list-item"><button className="work-btn">Show All <span>14</span> </button></li>
                    <li className="work-list-item"><button className="work-btn">Design <span>6</span> </button></li>
                    <li className="work-list-item"><button className="work-btn">Branding <span>4</span> </button></li>
                    <li className="work-list-item"><button className="work-btn">Illustration <span>3</span> </button></li>
                    <li className="work-list-item"><button className="work-btn">Motion <span>1</span> </button></li>
                </ul>
            </div>
        </Fragment>
    )
}

export default WorkHead