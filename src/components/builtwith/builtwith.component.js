import React from 'react';
import GatsbyLogo from '../../images/logos/tech/gatsby.png'
import ReactLogo from '../../images/logos/tech/react.png'
import ContentfulLogo from '../../images/logos/tech/contentful.png'
import NetlifyLogo from '../../images/logos/tech/netlify.png'
import GitHubLogo from '../../images/logos/tech/github.png'
import PropTypes from 'prop-types';

import './styles.scss';

const tech = [
    {
        name: 'Gatsby',
        logo: GatsbyLogo,
        tagline: 'Scaffolded using',
        url: 'https://www.gatsbyjs.org/'
    },
    {
        name: 'React',
        logo: ReactLogo,
        tagline: 'Built with',
        url: 'https://reactjs.org/'
    },
    {
        name: 'Contentful',
        logo: ContentfulLogo,
        tagline: 'Content managed by',
        url: 'https://www.contentful.com/'
    },
    {
        name: 'Netlify',
        logo: NetlifyLogo,
        tagline: 'Deployed & Hosted with',
        url: 'https://www.netlify.com/'
    },
    {
        name: 'GitHub',
        logo: GitHubLogo,
        tagline: 'Pushed to',
        url: 'https://github.com/'
    }
]

const BuiltWith = props => {
    return (
        <section className="section  builtwith">
            <div className="builtwith__content">
                <h5 className="typography__weight--thin  builtwith__title">Thanks to the below <span className="typography__weight--bold">
                    <a className="builtwith__links" href="https://jamstack.org/">JAMSTACK</a> + Tech</span></h5>
                <div className="builtwith__logos">
                    {
                        tech.map(t => (
                            <a href={t.url}>
                                <img key={t.name} src={t.logo} alt={`${t.tagline} - ${t.name}`} />
                            </a>
                        ))
                    }
                </div>
            </div>
        </section>
    );
};

BuiltWith.propTypes = {
    
};

export default BuiltWith;