import React, { Component } from 'react'
import Contact from '../components/contact/contact.component'
import { navigate } from 'gatsby'

// Workaround for Netlify forms to play nice with Gatsby
// https://github.com/imorente/gatsby-netlify-form-example/blob/master/src/pages/contact.js
function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

class ContactContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }

  handleSubmit = e => {
    e.preventDefault()

    const form = e.target
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': form.getAttribute('name'),
        ...this.state,
      }),
    })
      .then(() => navigate(form.getAttribute('action')))
      .catch(error => alert(error))
  }

  render() {
    return (
      <Contact
        theme={this.props.theme}
        onFieldChange={this.handleChange}
        onFormSubmit={this.handleSubmit}
      />
    )
  }
}

export default ContactContainer
