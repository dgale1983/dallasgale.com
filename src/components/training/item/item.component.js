import React from 'react'
import TextBlock from '../../typography/textBlock.component'
// import PropTypes from 'prop-types';

const Item = ({ data }) => {
  return (
    <div className="training__content-education">
      <img src={data.logo} alt={data.title} className="training__logo" />
      <h3 className="training__title">{data.title}</h3>
      <div className="training__content-info">
        <TextBlock>
          <h3 className="typography__heading--h3  typography__color--splash">
            What
          </h3>
          <p className="typography__paragraph">{data.what}</p>
        </TextBlock>
        <TextBlock>
          <h3 className="typography__heading--h3  typography__color--splash">
            Where
          </h3>
          <p className="typography__paragraph">{data.where}</p>
        </TextBlock>
        <TextBlock>
          <h3 className="typography__heading--h3  typography__color--splash">
            When
          </h3>
          <p className="typography__paragraph">{data.when}</p>
        </TextBlock>
      </div>
    </div>
  )
}

// Item.propTypes = {

// };

export default Item
