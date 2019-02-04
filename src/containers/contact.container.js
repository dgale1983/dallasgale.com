import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import Contact from '../components/contact/contact.component';


class ContactContainer extends Component {
    render() {
        return (
            <Contact mode={this.props.mode} />
        );
    }
}

// NavContainer.propTypes = {

// };

export default ContactContainer;