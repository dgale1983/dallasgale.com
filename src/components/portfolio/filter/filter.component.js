import React from 'react'
import Checkbox from './checkbox/checkbox.component'
import './filter.scss'

const Filter = props => {
  const { checkedValue, filterData } = props

  return (
    <div className="filter">
      <ul className="filter__list">
        {filterData.map(f => (
          <li className="filter__list-item">
            <Checkbox label={f.name} checkedValue={checkedValue} />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Filter
