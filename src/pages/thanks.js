import React from 'react';
import Hero from '../containers/hero.container';
import Logo from '../images/logos/dg.png';
import { Link } from "gatsby"
import Layout from '../components/layout'
import SEO from '../components/seo'

const Thanks = props => {
    return (
    <Layout>
        <SEO title="Thanks for contacting me!" />
            <div className="contact__thanks">
                <Hero>
                    <span className="typography__weight--thin">
                        Thanks, I will be in touch.
                    </span>
                    <Link to="/">
                        <div className="contact__thanks-logo">
                            <img src={Logo} alt="Home" />
                        </div>
                    </Link>
                </Hero>
        </div>
    </Layout>
    );
};


export default Thanks;