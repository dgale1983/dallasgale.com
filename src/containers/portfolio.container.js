import React, { Component } from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import Details from '../components/portfolio/details/details.component'
import SectionTitle from '../components/typography/sectionTitle.component'
import Thumbnail from '../components/portfolio/thumbnail/thumbnail.component'
import Lightbox from '../components/portfolio/lightbox/lightbox.component'
import '../components/portfolio/item/item.scss'
import '../components/portfolio/portfolio.scss'
import '../components/portfolio/filter/filter.scss'

//* Data for <Portfolio /> component
import PortfolioData from '../data/portfolio';

// * Folio Filters
const PORTFOLIO_FILTERS = {
  BY_ALL: category => category.all,
  BY_ANGULAR: category => category.angular,
  BY_APP_DEVELOPMENT: category => category.appDev,
  BY_UI_DESIGN: category => category.uiDesign,
  BY_CMS: category => category.cms,
  BY_UI_DEVELOPMENT: category => category.webDev,
  BY_REACT: category => category.react,
  BY_UNITY: category => category.unity,
}

const filterKeys = [
  {
    label: "ALL",
    key: "BY_ALL",
  },
  {
    label: "ANGULAR",
    key: "BY_ANGULAR",
  },
  {
    label: "APP DEVELOPMENT",
    key: "BY_APP_DEVELOPMENT",
  },
  {
    label: "CMS",
    key: "BY_CMS",
  },
  {
    label: "UI DESIGN",
    key: "BY_UI_DESIGN",
  },
  {
    label: "UI DEVELOPMENT",
    key: "BY_UI_DEVELOPMENT",
  },
  {
    label: "UNITY",
    key: "BY_UNITY",
  },
  {
    label: "REACT",
    key: "BY_REACT",
  },
]

class PortfolioContainer extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isLightboxOpen: false,
      lightboxImage: '',
      list: PortfolioData,
      filterKey: 'BY_ALL',
    }
  }

  showLightbox = (image) => {
    this.setState({ 
      isLightboxOpen: true,
      lightboxImage: image.hero
    });
  }

  componentDidUpdate() {
    console.log('this.state.lightboxImage', this.state.lightboxImage)
  }

  closeModal = () => {
    this.setState({modalIsOpen: false});
  }


  render() {
    const { filterKey, list } = this.state
    const { children } = this.props
    const filteredList = list.filter(PORTFOLIO_FILTERS[filterKey])
    


    return (
      <section className="section  portfolio">
        <div className="filter">
          <h4 className="typography__color--light  filter__title">
            FILTERED_{this.state.filterKey}
          </h4>

          {/* Filtering */}
          <ul className="filter__list">
            {
              filterKeys.map(filter => (
              <li key={filter.key} className="filter__item">
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
            </ul>
        </div>

        {/* The below should go in back to <Portfolio /> component */}
        <SectionTitle title="Portfolio" color="light" />
          <div className="content  portfolio__wrapper">
            {children}
            <div className="portfolio__content">
              {filteredList.map(category => {
                return (
                  <div key={category.id} className="portfolio__item">
                    <div className="item">
                      <div className="item__thumbnail">
                          <button className="item__lightbox-button" onClick={() => this.showLightbox(category)}>
                            <Thumbnail 
                              thumbnail={category.hero} 
                              heroAlt={category.alt}
                              isOpen={this.state.modalIsOpen}
                              onAfterOpen={this.afterOpenModal}
                              onRequestClose={this.closeModal}>
                             </Thumbnail>
                          </button>
                          {
                            this.state.isLightboxOpen ? (
                              <Lightbox lightboxClose={() => this.setState({isLightboxOpen: false})} src={this.state.lightboxImage} />
                            ) : null
                          }
                      </div>
                      <div className="item__details">
                        <Details data={category} />
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>

            <h3 className="typography__color--splash">...more to be uploaded soon!</h3>
          </div>

      </section>
    )
  }
}

export default PortfolioContainer
