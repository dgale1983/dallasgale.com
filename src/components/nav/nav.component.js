import React from 'react'
import './nav.scss'
import AnchorLink from 'react-anchor-link-smooth-scroll'
// import PropTypes from 'prop-types';

const Nav = props => {
  const { onHamburgerClick, onAnchorClick, stateOfMenu } = props
  return (
    <>
      <button
        aria-label="Mobile Menu"
        onClick={onHamburgerClick}
        className={`nav__hamburger  ${stateOfMenu ? 'open' : 'closed'}`}
      >
        <span className="nav__hamburger-bars  nav__hamburger-bars--top" />
        <span className="nav__hamburger-bars  nav__hamburger-bars--middle" />
        <span className="nav__hamburger-bars  nav__hamburger-bars--bottom" />
      </button>
      <nav className={`nav nav__widget  ${stateOfMenu ? 'open' : 'closed'}`}>
        <ul className="nav__list">
          {props.data.map(d => (
            <li key={d.id} className="nav__list--item">
              <AnchorLink
                onClick={onAnchorClick}
                offset="0"
                className="nav__button"
                href={`#${d.anchor}`}
              >
                {d.label}
              </AnchorLink>
            </li>
          ))}
        </ul>
      </nav>
    </>
  )
}

// Nav.propTypes = {

// };

export default Nav
