import React, { Component } from 'react';
import DisplayNumber from '../containers/DisplayNumber';

export class DisplayNumberRoot extends Component {
  render() {
    return (
      <div>
        <h1>Display Root</h1>
        <DisplayNumber unit='kg'></DisplayNumber>
      </div>
    );
  }
}
