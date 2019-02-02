import React from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-modal';

const Thumbnail = (props) => {

    const {children, onClick, isOpen, onAfterOpen, onRequestClose, contentLabel} = props;

    return (
        <>
        <img className="portfolio__item-thumbnail-img" src={ props.thumbnail } alt={ props.heroAlt } />
        </>
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