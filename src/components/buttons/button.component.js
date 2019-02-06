import React from 'react';
import PropTypes from 'prop-types'
import './styles.scss';

const Button = props => {
  const { buttonType, children, className, onClick,  } = props

  return (
      <button
        onClick={onClick}
        className={`button ${className}`}
      >
        {children}
      </button>
  )
}

Button.propTypes = {
  buttonType: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.any,
  onClick: PropTypes.func,
}

export default Button
