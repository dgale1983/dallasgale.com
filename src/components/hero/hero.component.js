import React from 'react'
import './hero.scss'
import Video from '../../video/nyc.mp4'

// import PropTypes from 'prop-types';

const Hero = props => {
  return (
    <section className="hero">
      <div className="hero__media">
        {/* <div className="hero__video-container">
          <video loop autoPlay className="hero__video">
            <source src={Video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div> */}
        <div className="hero__photo"></div>
      </div>

      <div className="content  hero__intro">
        <h1 className="hero__intro--tagline">
          <span className="typography__weight--thin">
            Hi, I’m{' '}
            <span className="typography__color--splash  typography__weight--bold">
              Dallas Gale
            </span>
            , a <span className="typography__weight--bold">web developer</span>{' '}
            & <span className="typography__weight--bold">designer</span> based
            in <span className="typography__weight--bold">NYC</span>, who loves{' '}
            <span className="typography__weight--bold">
              building with pixel bricks
            </span>{' '}
            and believes that{' '}
            <span className="typography__weight--bold">
              good design is a challenge to be mastered
            </span>
            .
          </span>
        </h1>
      </div>
    </section>
  )
}

// Hero.propTypes = {

// };

export default Hero
