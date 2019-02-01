import React from 'react';
import PropTypes from 'prop-types';

const Thumbnail = (props) => {
    return (
        // <div className="portfolio__thumbnail">
            <img className="portfolio__item-thumbnail-img" src={ props.thumbnail } alt={ props.heroAlt } />
        // </div>
    );
};



// Type checking
Thumbnail.defaultProps = {
    thumbnail: 'https://via.placeholder.com/477x273.png/000000/808080?text=Portfolio+Thumbnail.com',
};

Thumbnail.propTypes = {
    thumbnail: PropTypes.string
};


export default Thumbnail;