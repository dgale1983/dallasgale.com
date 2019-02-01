import React, { Component } from 'react'
// import PropTypes from 'prop-types';
import Nav from '../components/nav/nav.component'

// * Data for <Nav />
import Data from '../data/nav.json'
const navData = Data.navigation

class NavContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      navOpen: false,
    }
  }

  handleNavState = () => {
    let currentState = this.state.navOpen
    this.setState({
      navOpen: !currentState,
    })
  }

  render() {
    const { onAnchorClick, sectionName, mobileVisibility } = this.props
    return (
      <Nav
        data={navData}
        mobileVisibility={mobileVisibility}
        sectionName={sectionName}
        onClick={mobileVisibility}
        onAnchorClick={onAnchorClick}
      />
    )
  }
}

// NavContainer.propTypes = {

// };

export default NavContainer
