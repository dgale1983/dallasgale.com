import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'

// import Header from './header'
import './layout.scss'


const Layout = ({ children, theme }) => (
  // eslint-disable-next-line react/jsx-filename-extension
  <StaticQuery
    query={graphql`
    query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={() => (
      <div className={theme}>
        {children}
      </div>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  theme: PropTypes.string,
}

Layout.defaultProps = {
  theme: 'night',
}

export default Layout
