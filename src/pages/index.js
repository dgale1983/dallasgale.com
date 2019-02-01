import React from 'react'

// * COMPONENTS
import Contact from '../containers/contact.container'
import Hero from '../containers/hero.container'
import Layout from '../components/layout'
import Nav from '../components/nav/nav.component'
import Portfolio from '../containers/portfolio.container'
import Skills from '../containers/skills.container'
import SEO from '../components/seo'
import Training from '../containers/training.container'
import Work from '../containers/work.container'
import Logo from '../components/logo/logo.component'

//* CSS
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
      showModal: false,
      showMenu: false,
      theme: 'default',
      sectionName: 'Section Name',
      isAnchorClicked: false,
    }

    this.handleOpenLightbox = () => {
      this.setState({
        showModal: true,
      })
    }

    this.handleCloseLightbox = () => {
      this.setState({
        showModal: false,
      })
    }

    // When the Lightbox is visible th
    this.handleMobileMenuState = () => {
      this.setState({
        showMenu: !this.state.showMenu,
      })
    }
  }

  render() {
    return (
      <Layout>
        <SEO
          title="DG - Frontend developer & designer"
          keywords={[`gatsby`, `application`, `react`]}
        />

        <Logo onClick={() => this.setState({ showMenu: false })} />
        {/* 
          - Hero Component 
        */}
        <div id={'top'} />
        <Hero />

        {/* 
          - Portfolio Component 
        */}

        <Nav
          onHamburgerClick={this.handleMobileMenuState}
          data={navData}
          stateOfMenu={this.state.showMenu}
          sectionName={this.state.sectionName}
          onAnchorClick={() => this.setState({ showMenu: false })}
        />
        <div id={'portfolio'} />
        <Portfolio
          openLightbox={this.handleShowLightbox}
          lightboxClose={this.handleHideLightbox}
          isOpen={this.state.showModal}
        />

        {/* 
            - Work Component 
          */}
        <div id={'work'} />
        <Work />

        {/* 
            - Training Component 
          */}
        <div id={'training'} />
        <Training />

        {/* 
            - Skills Component 
          */}
        <div id={'skills'} />
        <Skills />

        {/* 
            - Contact Component 
          */}
        <div id={'contact'} />
        <Contact />
        {/* </div> */}

        {/* {lightbox} */}
      </Layout>
    )
  }
}

export default IndexPage
