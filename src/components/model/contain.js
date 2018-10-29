import React, {Component} from 'react'
import * as stylesInit from '../../Data/initStyle'
import Part from './contains/Part';
export default class Contain extends Component {
  constructor(props) {
    super(props)
    this.state = {
      styles: {
        ...stylesInit
      }
    }
  }
  render() {
    const styles = {
      containClass: {
        width: '460px',
        height: '590px',
        margin: '0 auto',
        // background: 'url("images/background/background_998.jpg")',
        position: 'relative',
        backgroundRepeat: "no-repeat"
      }
    }
    const PartItems = Object
      .getOwnPropertyNames(this.state.styles)
      .map((style, index) => <Part
        styleInit={this.state.styles[style]}
        items={this.props.choosenItem[style]}
        key={index}></Part>)
    return (
      <div className="contain" style={styles.containClass}>
        {PartItems}
      </div>
    )
  }
}