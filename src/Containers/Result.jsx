import React, { Component } from 'react';

class Result extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }

render() {
  return (
    <div>
        <ul>
        {this.props.houses.map(house  =>  <li  key={house}>{house}</li>)}
        </ul>
        <Message  message={this.props.selectedHouse}  />
    </div>
)
}

export  default  connect(store=>store)(Result)