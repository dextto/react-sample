// NOTE: DisplayNumber의 presentation
//       redux와 상관이 없기 때문에 재사용 가능

import React, { Component } from 'react';

interface IProps {
  number: number;
  unit: string;
}

export class DisplayNumber extends Component<IProps> {
  render() {
    return (
      <div>
        <h1>Display Number</h1>
        <input type='text' value={this.props.number} readOnly></input>
        {this.props.unit}
      </div>
    );
  }
}
