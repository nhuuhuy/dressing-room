import React, {Component} from 'react'
import ButtonGroup from './ButtonGroup';
import TabContent from './TabContent';

export class Store extends Component {
  render() {
    return (
      <div>
        <ButtonGroup></ButtonGroup>
        <div className="well">
          <TabContent transferItem={this.props.transferItem}  ></TabContent>
        </div>
      </div>

    )
  }
}
export default Store
