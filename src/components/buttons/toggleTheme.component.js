import React from 'react';
import PropTypes from 'prop-types'
import Button from './button.component'

const ToggleTheme = props => {

    const {onClick, theme} = props;
    const message = `Current theme:`;

    return (
        <Button className={`button__theme button__theme--${theme}`} onClick={onClick}>
            {message} <span className="button__theme--type">{theme}</span>
        </Button>
    );
};

ToggleTheme.propTypes = {
    onClick: PropTypes.func,
    theme: PropTypes.string,
};

export default ToggleTheme;