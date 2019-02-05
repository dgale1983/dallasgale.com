import React from 'react';
import PropTypes from 'prop-types';

const ButtonMode = props => {

    const {onClick, theme} = props;
    const message = `Current mode:`;

    return (
        <div className="button  button__mode">
            <button onClick={onClick} className={`theme__mode-btn theme__mode--${theme}`}>
            ${message} ${theme}
            </button>
        </div>
    );
};

ButtonMode.propTypes = {
    onClick: PropTypes.func,
};

export default ButtonMode;