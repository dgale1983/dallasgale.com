import ReactDOM, { Component } from 'react'

const modalRoot = document.getElementById('modal-root')

class LightboxContainer extends Component {
  constructor(props) {
    super(props)

    this.domElement = document.createElement('div')
  }

  componentDidMount() {
    modalRoot.appendChild(this.domElement)
  }

  componentWillUnmount() {
    modalRoot.removeChild(this.domElement)
  }

  render() {
    return ReactDOM.createPortal(this.props.children, this.element)
  }
}

export default LightboxContainer
