import React from 'react'
import * as Sentry from '@sentry/browser';

// Sentry.init({
//  dsn: "https://a812de2c43104981b8b9a767c4c7fbf6@sentry.io/1457337"
// });
// should have been called before using it here
// ideally before even rendering your react app

// * COMPONENTS
// import BuiltWith from '../containers/builtwith.container'
import Contact from '../containers/contact.container'
import Hero from '../containers/hero.container'
import Logo from '../components/logo/logo.component'
import Layout from '../components/layout'
// import Nav from '../components/nav/nav.component'
// import Portfolio from '../containers/portfolio.container'
// import Skills from '../containers/skills.container'
import SEO from '../components/seo'
// import Training from '../containers/training.container'
import ToggleTheme from '../components/buttons/toggleTheme.component'
// import Work from '../containers/work.container'

//* CSS 
// TODO: Convert to styled-components
import '../components/portfolio/item/item.scss'
import '../components/portfolio/portfolio.scss'
import '../components/portfolio/filter/filter.scss'
import './app.scss'

// * DATA
import NavData from '../data/nav.json'

const navData = NavData.navigation

class IndexPage extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      error: false,
      eventId: null,
      showMenu: false,
      theme: 'night',
    }
  }

  handleThemeMode = () => {
    const { theme } = this.state
    if (theme === 'night') { 
      this.setState({
        theme: 'day',
      })
    } else {
      this.setState({
        theme: 'night',
      })
    }
  }

  // When the Lightbox is visible th
  handleMobileMenuState = () => {
    const { showMenu } = this.state
    this.setState({
      showMenu: !showMenu,
    })
  }

  handleAnchorClick = () => {
    this.setState({
      showMenu: false,
    })
  }

  // Error Tracking
  componentDidCatch(error, errorInfo) {
    this.setState({
      error,
    })
    Sentry.withScope((scope) => {
      scope.setExtras(errorInfo)
      const eventId = Sentry.captureException(error)
      this.setState({
        eventId,
      })
    })
  }

  render() {
    const { error, eventId, theme } = this.state
    const sentryLabel = 'Report Feedback'
    if (error) {
      return (
        <button
          type="button"
          onClick={
            () => Sentry.showReportDialog({ eventId })
          }
        >
          {sentryLabel}
        </button>
      )
    }
    return (
      <Layout theme={`theme__mode theme__mode--${theme}`}>
        <SEO
          title="DG - Frontend developer & designer"
          keywords={[`gatsby`, `application`, `react`]}
        />
        <ToggleTheme onClick={this.handleThemeMode} theme={theme} />
        <Logo href="#top" onClick={() => this.setState({ showMenu: false })} />

        <div id={'top'} />
        <Hero>
          <span className="typography__weight--bold">
            Hi there, my site in the process of a face lift and will be back online when it's done!
          </span>
        </Hero>

        <div id={'contact'} />
        <Contact theme={theme} />
      </Layout>
    )
  }
}

export default IndexPage
