import React from 'react'
import Item from './item/item.component'
// import PortfolioItem from '../../containers/portfolioItem.container'
import SectionTitle from '../typography/sectionTitle.component'
import './portfolio.scss'

const Portfolio = props => {
  const { children, data, isOpen, lightboxClose, openLightbox } = props

  return (
    <>
      <SectionTitle title="Portfolio" color="light" />
      <div className="content  portfolio__wrapper">
        {children}
        <div className="portfolio__content">
          {data.map(category => {
            return (
              <div key={category.id} className="portfolio__item">
                {/* {children} */}
                {/* <PortfolioItem key={category.id} data={category} /> */}
                <Item
                  key={category.id}
                  data={category}
                  isOpen={isOpen}
                  openLightbox={openLightbox}
                  lightboxClose={lightboxClose}
                />
              </div>
            )
          })}
        </div>

        <h3 className="typography__color--splash">...more to be uploaded soon!</h3>
      </div>
    </>
  )
}

export default Portfolio
