import React from 'react'
import './item.scss'

//* Individual components
import Details from '../details/details.component'
import Thumbnail from '../thumbnail/thumbnail.component'

const Item = props => {
  const { data, modalOnClick } = props
  
  return (
      <div className="item">
        <div className="item__thumbnail">
            <button onClick={modalOnClick} aria-label={`Enlarge the ${data.project} image`}>
              <Thumbnail thumbnail={data.hero} heroAlt={data.project} />
            </button>
           
        </div>
        <div className="item__details">
          <Details data={data} />
        </div>
      </div>
  )
}

// Item.propTypes = {

// };

export default Item
