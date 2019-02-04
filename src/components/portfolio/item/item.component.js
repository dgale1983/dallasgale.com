import React from 'react'
import './item.scss'

//* Individual components
import Details from '../details/details.component'
// import Thumbnail from '../thumbnail/thumbnail.component'

const Item = props => {
  const { data, modalOnClick, theme } = props
  
  return (
      <div className="item">
        <div className="item__thumbnail">
            <button onClick={modalOnClick} aria-label={`Enlarge the ${data.project} image`}>
              {/* <Thumbnail thumbnail={data.hero} heroAlt={data.project} /> */}
              <img className="portfolio__item-thumbnail-img" src={data.hero} alt={data.project} />
            </button>
        </div>
        <div className="item__details">
          <Details data={data} theme={theme} />
        </div>
      </div>
  )
}

// Item.propTypes = {

// };

export default Item
