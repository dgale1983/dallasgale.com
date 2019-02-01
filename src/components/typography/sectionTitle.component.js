import React from 'react';
import './sectionTitle.scss';
// import PropTypes from 'prop-types';

const SectionTitle = props => {
    const { color, title, position } = props;
    return (
        <h2 className={`sectionTitle  typography__color--${ color } ${ position }`}>{ title }</h2>
    );
};

// SectionTitle.propTypes = {
    
// };

export default SectionTitle;