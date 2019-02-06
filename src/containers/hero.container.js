import React, { Component } from 'react'
// import PropTypes from 'prop-types';
import Hero from '../components/hero/hero.component'

// * Data import
import Data from '../data/hero.json'
const d = Data.hero

class HeroContainer extends Component {
  render() {
    return <Hero tagline={d[0].tagline} children={this.props.children} />
  }
}

// hero.container.propTypes = {

// };

export default HeroContainer
