import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

const BuiltWith = ({tech, theme}) => {
    return (
        <section className="section  builtwith">
            <div className="builtwith__content">
                <h5 className="typography__weight--thin  builtwith__title">Thanks to the below <span className="typography__weight--bold">
                    <a className="builtwith__links" href="https://jamstack.org/">JAMSTACK</a> + Tech</span></h5>
                <div className="builtwith__logos">
                    {
                        tech.map(t => (
                            <a href={t.url}>
                                <img key={t.name} src={`${theme === 'day' ? (t.logoDay) : (t.logo)}`} alt={`${t.tagline} - ${t.name}`} />
                            </a>
                        ))
                    }
                </div>
            </div>
        </section>
    );
};

BuiltWith.propTypes = {
    tech: PropTypes.object,
    theme: PropTypes.string,
};

export default BuiltWith;