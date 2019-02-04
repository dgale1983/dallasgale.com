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
      isAnchorClicked: false,
      showModal: false,
      showMenu: false,
      sectionName: 'Section Name',
      theme: 'night',
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

    this.handleThemeMode = () => {
      if (this.state.theme === 'night')
        this.setState({
          theme: 'day',
        })
      else {
        this.setState({
          theme: 'night',
        })
      }
    }

    // When the Lightbox is visible th
    this.handleMobileMenuState = () => {
      this.setState({
        showMenu: !this.state.showMenu,
      })
    }

    this.handleAnchorClick = () => {
      this.setState({
        showMenu: false,
      })
    }
    
  }

  // componentDidUpdate() {
  //   console.log('modal', this.state.showModal);
  // }

  render() {
    return (
      <Layout theme={`theme__mode theme__mode--${this.state.theme}`}>
        <SEO
          title="DG - Frontend developer & designer"
          keywords={[`gatsby`, `application`, `react`]}
        />

        <button onClick={this.handleThemeMode} className={`theme__mode-btn theme__mode--${this.state.theme}`}>
          Current mode: {this.state.theme}
        </button>


        <Nav
            onHamburgerClick={this.handleMobileMenuState}
            data={navData}
            stateOfMenu={this.state.showMenu}
            sectionName={this.state.sectionName}
            onAnchorClick={this.handleAnchorClick}
          />

        <header className="header">
          <Logo onClick={() => this.setState({ showMenu: false })} />
        </header>

        {/* 
          - Hero Component 
        */}

        <div id={'top'} />
        <Hero />

        {/* 
          - Portfolio Component 
        */}
        <div id={'portfolio'} />
        <Portfolio
          openLightbox={this.handleShowLightbox}
          lightboxClose={this.handleHideLightbox}
          isOpen={this.state.showModal}
          theme={this.state.theme}
        />

        {/* 
            - Work Component 
          */}
        <div id={'work'} />
        <Work theme={this.state.theme} />

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
