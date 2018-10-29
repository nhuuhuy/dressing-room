import React, {Component} from 'react'

export default class Part extends Component {

  render() {
    let styles = this.props.styleInit;
    if (this.props.items) {
      styles = {
        ...styles,
        backgroundImage: `url(${this.props.items.imgSrc_png}) `
      }
    }
    return (
      <div style={styles}></div>
    )
  }
}
