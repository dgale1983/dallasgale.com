import React, { Component } from 'react'
import Filter from '../components/portfolio/filter/filter.component'

import FilterData from '../data/filters.json'
const filterCategories = FilterData.filters

class PortfolioFilterContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      folioFilter: '',
      checkedLabel: '',
    }
  }

  handleChange = e => {
    this.setState({
      folioFilter: this.state.checkedLabel,
    })

    this.props.onChange(e.target.value)
  }

  handleChecked = label => {
    this.setState({
      checkedLabel: label,
    })
  }

  render() {
    const { filterLabel } = this.props
    return (
      <>
        <input
          type="text"
          value={this.state.folioFilter}
          onChange={this.handleChange}
        />
        <Filter
          filterLabel={filterLabel}
          filterData={filterCategories}
          checkedValue={() => this.handleChecked('react')}
        />
      </>
    )
  }
}

// PortfolioFilterContainer.propTypes = {

// };

export default PortfolioFilterContainer
