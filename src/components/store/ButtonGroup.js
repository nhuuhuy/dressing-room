import React, {Component} from 'react'
import Button from './Button/Button';
import buttonArr from '../../Data/buttonArray'

export default class ButtonGroup extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       id: 0
    }
  }
  changeTab = (id)=>{
    this.setState({
      id: id
    })
  }
  render() {
    let ElementButton = buttonArr.map((item, index) => {
      return <Button key={index} index={index} btn={item} changeTab={this.changeTab} class={index  === this.state.id? 'btn-primary' : 'btn-default'}></Button>
    })

    return (
      <div
        className="btn-pref btn-group btn-group-justified btn-group-lg"
        role="group"
        aria-label="...">
        {ElementButton}
      </div>
    )
  }
}
