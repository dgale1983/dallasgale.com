import React, { Component } from 'react'
import Item from '../components/portfolio/item/item.component'
// import PropTypes from 'prop-types'

class PortfolioContainer extends Component {
  render() {
    return <Item data={this.props.data} />
  }
}

// PortfolioContainer.propTypes = {}

export default PortfolioContainer
