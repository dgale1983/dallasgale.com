import React, { Component } from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import PortfolioComponent from '../components/portfolio/portfolio.component'
import '../components/portfolio/portfolio.scss'
import '../components/portfolio/filter/filter.scss'

//* Data for <Portfolio /> component
import Data from '../data/portfolio.json'
const portfolios = Data.portfolio

console.log('portfolios', portfolios)

// * Folio Filters
const PORTFOLIO_FILTERS = {
  BY_ALL: category => category.all,
  BY_APP_DEV: category => category.appDev,
  BY_UI_DESIGN: category => category.uiDesign,
  BY_ANGULAR: category => category.angular,
  BY_CMS: category => category.cms,
  BY_WEB_DESIGN: category => category.webDesign,
  BY_WEB_DEV: category => category.webDev,
  BY_REACT: category => category.react,
  BY_UNITY: category => category.unity,
}

class PortfolioContainer extends Component {
  constructor(props) {
    super(props)

    this.state = {
      list: portfolios,
      filterKey: 'BY_ALL',
    }
  }

  render() {
    const { filterKey, list } = this.state
    const { children, openLightbox, isOpen, lightboxClose } = this.props
    const filteredList = list.filter(PORTFOLIO_FILTERS[filterKey])

    return (
      <section className="section  portfolio">
        <div className="filter">
          <h4 className="typography__color--light  filter__title">
            FILTER_{this.state.filterKey}
          </h4>
          <ul className="filter__list">
            <li className="filter__item">
              <AnchorLink
                className="filter__button"
                href={`#portfolio`}
                onClick={() => this.setState({ filterKey: 'BY_WEB_DEV' })}
              >
                WEB DEVELOPMENT
              </AnchorLink>
            </li>
            <li className="filter__item">
              <AnchorLink
                className="filter__button"
                href={`#portfolio`}
                onClick={() => this.setState({ filterKey: 'BY_WEB_DESIGN' })}
              >
                WEB DESIGN
              </AnchorLink>
            </li>

            <li className="filter__item">
              <AnchorLink
                className="filter__button"
                href={`#portfolio`}
                onClick={() => this.setState({ filterKey: 'BY_ANGULAR' })}
              >
                ANGULAR
              </AnchorLink>
            </li>

            <li className="filter__item">
              <AnchorLink
                className="filter__button"
                href={`#portfolio`}
                onClick={() => this.setState({ filterKey: 'BY_REACT' })}
              >
                REACT
              </AnchorLink>
            </li>

            <li className="filter__item">
              <AnchorLink
                className="filter__button"
                href={`#portfolio`}
                onClick={() => this.setState({ filterKey: 'BY_APP_DEV' })}
              >
                APP DEV
              </AnchorLink>
            </li>

            <li className="filter__item">
              <AnchorLink
                className="filter__button"
                href={`#portfolio`}
                onClick={() => this.setState({ filterKey: 'BY_UI_DESIGN' })}
              >
                UI DESIGN
              </AnchorLink>
            </li>

            <li className="filter__item">
              <AnchorLink
                className="filter__button"
                href={`#portfolio`}
                onClick={() => this.setState({ filterKey: 'BY_ALL' })}
              >
                ALL
              </AnchorLink>
            </li>
          </ul>
        </div>

        <PortfolioComponent
          children={children}
          data={filteredList}
          openLightbox={openLightbox}
          isOpen={isOpen}
          lightboxClose={lightboxClose}
        />
      </section>
    )
  }
}

export default PortfolioContainer
