import React from 'react'
import './item.scss'

//* Individual components
import Details from '../details/details.component'
import Thumbnail from '../thumbnail/thumbnail.component'

const Item = props => {
  const { data } = props
  
  return (
    <>
      <div className="item">
        <div className="item__thumbnail">
            <Thumbnail thumbnail={data.hero} heroAlt={data.alt} />
        </div>
        <div className="item__details">
          <Details data={data} />
        </div>
      </div>
    </>
  )
}

// Item.propTypes = {

// };

export default Item
