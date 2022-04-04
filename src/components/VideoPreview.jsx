import React, { Fragment } from 'react';


const VideoPreview = () => {
  return (
    <Fragment>
        <div className="video__content-wrapper">
            <div className="video__item">
                <div className="video-player">
                    <button className="play-btn"></button>
                    <div className="video-timeline">1.45</div>
                </div>
            </div>
            <div className="video__item">
                <h4 className="h4-suptitle">Video Reel</h4>
                <h3 className="h3-title">Unlock The Greatest Value Possible</h3>
                <p className="header__paragraph" >Design, business understanding, ability to put themselves in the merchant's shoes meant to partner.</p>

            </div>
        </div>
    </Fragment>
  )
}

export default VideoPreview
