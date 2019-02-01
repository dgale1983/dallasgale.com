import React from 'react'
import SectionTitle from '../typography/sectionTitle.component'
import Item from './item/item.component'
import './training.scss'
// import PropTypes from 'prop-types';

const Training = props => {
  const { children, data } = props

  return (
    <section className="section  training">
      <div className="content  training__wrapper">
        <SectionTitle title="Education & Training" color="positive" />
        {children}

        <div className="training__table">
          <div className="training__table-cell">
            <div className="training__content">
              {data.map(d => (
                <Item key={d.id} data={d} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// Training.propTypes = {

// };

export default Training
