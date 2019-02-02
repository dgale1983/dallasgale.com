import React from 'react'
import Item from './item/item.component'
import SectionTitle from '../typography/sectionTitle.component'
import './portfolio.scss'

const Portfolio = props => {
  const { children, data } = props

  return (
    <>
      <SectionTitle title="Portfolio" color="light" />
      <div className="content  portfolio__wrapper">
        {children}
        <div className="portfolio__content">
          {data.map(category => {
            return (
              <div key={category.id} className="portfolio__item">
                <Item
                  key={category.id}
                  data={category}
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
