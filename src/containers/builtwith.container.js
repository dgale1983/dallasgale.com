import React, { Component } from 'react'
import BuiltWith from '../components/builtwith/builtwith.component'
import GatsbyLogo from '../images/logos/tech/gatsby.png'
import GatsbyLogo_day from '../images/logos/tech/gatsby_day.png'
import ReactLogo from '../images/logos/tech/react.png'
import ReactLogo_day from '../images/logos/tech/react_day.png'
import ContentfulLogo from '../images/logos/tech/contentful.png'
import ContentfulLogo_day from '../images/logos/tech/contentful_day.png'
import NetlifyLogo from '../images/logos/tech/netlify.png'
import NetlifyLogo_day from '../images/logos/tech/netlify_day.png'
import GitHubLogo from '../images/logos/tech/github.png'
import GitHubLogo_day from '../images/logos/tech/github_day.png'
// import PropTypes from 'prop-types'

const tech = [
    {
        name: 'Gatsby',
        logo: GatsbyLogo,
        logoDay: GatsbyLogo_day,
        tagline: 'Scaffolded using',
        url: 'https://www.gatsbyjs.org/'
    },
    {
        name: 'React',
        logo: ReactLogo,
        logoDay: ReactLogo_day,
        tagline: 'Built with',
        url: 'https://reactjs.org/'
    },
    {
        name: 'Contentful',
        logo: ContentfulLogo,
        logoDay: ContentfulLogo_day,
        tagline: 'Content managed by',
        url: 'https://www.contentful.com/'
    },
    {
        name: 'Netlify',
        logo: NetlifyLogo,
        logoDay: NetlifyLogo_day,
        tagline: 'Deployed & Hosted with',
        url: 'https://www.netlify.com/'
    },
    {
        name: 'GitHub',
        logo: GitHubLogo,
        logoDay: GitHubLogo_day,
        tagline: 'Pushed to',
        url: 'https://github.com/'
    }
]

class BuiltWithContainer extends Component {
    render() {
        return (
            <BuiltWith tech={tech} theme={this.props.theme} />
        );
    }
}

// BuiltWithContainer.propTypes = {
//     theme: PropTypes.string,
// };

export default BuiltWithContainer;