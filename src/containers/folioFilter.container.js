import React, { Component } from 'react'
import '../components/portfolio/filter/filter.scss'

// import FilterData from '../data/filters.json'
// const filterCategories = FilterData.filters

// const PORTFOLIO_FILTERS = {
//   BY_ALL: category => category.all,
//   BY_ANGULAR: category => category.angular,
//   BY_APP_DEVELOPMENT: category => category.appDev,
//   BY_UI_DESIGN: category => category.uiDesign,
//   BY_CMS: category => category.cms,
//   BY_UI_DEVELOPMENT: category => category.webDev,
//   BY_REACT: category => category.react,
//   BY_UNITY: category => category.unity,
// }

// const filterKeys = [
//   {
//     label: "ALL",
//     key: "BY_ALL",
//   },
//   {
//     label: "ANGULAR",
//     key: "BY_ANGULAR",
//   },
//   {
//     label: "APP DEVELOPMENT",
//     key: "BY_APP_DEVELOPMENT",
//   },
//   {
//     label: "CMS",
//     key: "BY_CMS",
//   },
//   {
//     label: "UI DESIGN",
//     key: "BY_UI_DESIGN",
//   },
//   {
//     label: "UI DEVELOPMENT",
//     key: "BY_UI_DEVELOPMENT",
//   },
//   {
//     label: "UNITY",
//     key: "BY_UNITY",
//   },
//   {
//     label: "REACT",
//     key: "BY_REACT",
//   },
// ]




class FolioFilterContainer extends Component {
  constructor(props) {
    super(props)
    // this.state = {
    //   list: PortfolioData,
    //   filterKey: 'BY_ALL',
    // }
  }

  // handleChange = e => {
  //   this.setState({
  //     folioFilter: this.state.checkedLabel,
  //   })

  //   this.props.onChange(e.target.value)
  // }

  // handleChecked = label => {
  //   this.setState({
  //     checkedLabel: label,
  //   })
  // }

  render() {
    // const { filterKey, list } = this.state
    // const filteredList = list.filter(PORTFOLIO_FILTERS[filterKey])

    return (
      <div className="filter">
        {/* <ul className="filter__list">
          {
            filterKeys.map(filter => (
            <li className="filter__item">
              <AnchorLink
                className="filter__button"
                href={`#portfolio`}
                onClick={() => this.setState({filterKey: filter.key})}
              >
                {filter.label}
              </AnchorLink>
            </li>
            ))
          }
        </ul> */}
      </div>
    )
  }
}

// PortfolioFilterContainer.propTypes = {

// };

export default FolioFilterContainer
