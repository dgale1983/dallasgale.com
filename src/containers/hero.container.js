import React, { Component } from 'react'
// import PropTypes from 'prop-types';
import Hero from '../components/hero/hero.component'

// * Data import
import Data from '../data/hero.json'
const d = Data.hero

class HeroContainer extends Component {
  render() {
    console.log(d)
    return <Hero tagline={d[0].tagline} />
  }
}

// hero.container.propTypes = {

// };

export default HeroContainer