import React, {Component} from 'react'
import TabPane from './TabContent/TabPane';
import buttonArr from '../../Data/buttonArray';
import dressingRoom from '../../Data/GetData';
export default class TabContent extends Component {

  render() {
    // console.log(dressingRoom.ListOfItems);
    let elementTabPane = buttonArr.map((btn, index) => (
      <TabPane transferItem={this.props.transferItem}  ListItem={dressingRoom.ListOfItems} ButtonArray={btn} key={index} id={index}></TabPane>
    ))
    return (
      <div className="tab-content row">
        {elementTabPane}
      </div>
    )
  }
}
