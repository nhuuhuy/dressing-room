import React, {Component} from 'react'
import Item from './TabPane/Item';

export default class TabPane extends Component {
  render() {
      let elementItem = this.props.ListItem.map((item,index)=>(
        //   console.log(this.props.ButtonArray)
        item.type === this.props.ButtonArray.type ? <Item item={item} key={index} transferItem={this.props.transferItem} ></Item> : ''
      ))
    return (
      <div className={this.props.id === 0 ? 'tab-pane fade in active': 'tab-pane fade in'} id={this.props.ButtonArray.tabName}>
        {elementItem}
      </div>
    )
  }
}
