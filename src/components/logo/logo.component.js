import React from 'react'
import './logo.scss'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import LogoImage from '../../images/logos/dg.png'
// import PropTypes from 'prop-types';

const Logo = props => {
  return (
    <div className="logo">
      <AnchorLink
        offset="0"
        className="logo__wrapper"
        href="#top"
        onClick={props.onClick}
      >
        <img src={LogoImage} alt="DG" className="logo__img" />
      </AnchorLink>
    </div>
  )
}

// Logo.propTypes = {

// };

export default Logo
