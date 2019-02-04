import React from 'react'
import SectionTitle from '../typography/sectionTitle.component'
import Item from './item/item.component'
import './work.scss'
// import PropTypes from 'prop-types';

const Work = props => {
  const { children, data, theme } = props

  return (
    <section className="section  work">
      <div className="content  work__wrapper">
        <SectionTitle title="Work" color="positive" />
        {children}
        <div className="work__content">
          {/* Map over Data to render each <Item /> */}
          {data.map(d => (
            <Item key={d.id} data={d} theme={theme} />
          ))}
        </div>
      </div>
    </section>
  )
}

// Work.propTypes = {

// };

export default Work
