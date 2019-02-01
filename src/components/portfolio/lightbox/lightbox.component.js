import React from 'react'
import './lightbox.scss'

const Lightbox = props => {
  const { src, lightboxClose } = props
  return (
    <>
      <div className="lightbox__wrapper">
        <button className="lightbox__button--close" onClick={lightboxClose}>
          Close
        </button>

        <div
          className="lightbox__image"
          style={{
            background: `url(${src})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center center',
          }}
        />
      </div>
    </>
  )
}

export default Lightbox
