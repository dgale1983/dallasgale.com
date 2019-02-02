import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import './filter.scss'

const Filter = props => {
  const { checkedValue, filterData } = props

  return (
    <div className="filter">
      <ul className="filter__list">
        {filters.map(filter => (
          <li className="filter__item">
            <AnchorLink
              className="filter__button"
              href={`#portfolio`}
              onClick={`${filter.key}` }>
              `${filter.label}`
            </AnchorLink>
          </li>
          ))
          }
        </ul>
    </div>
  )
}

export default Filter


let filters = [
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
    label: "UI DESIGN",
    key: "BY_UI_DESIGN",
  },
  {
    label: "UI DEVELOPMENT",
    key: "BY_UI_DEVELOPMENT",
  },
  {
    label: "REACT",
    key: "BY_REACT",
  },
  {
    label: "CMS",
    key: "BY_CMS",
  },
]