import React, { Component } from 'react';

interface IProps {
  onClick: (size: number) => void;
}

interface IState {
  size: number;
}

export class AddNumber extends Component<IProps, IState> {
  state = { size: 1 };

  render() {
    return (
      <div>
        <h1>Add Number</h1>
        <input
          type='button'
          value='+'
          onClick={() => {
            this.props.onClick(this.state.size);
          }}
        ></input>
        <input
          type='text'
          value={this.state.size}
          onChange={(e) => {
            this.setState({ size: Number(e.target.value) });
          }}
        ></input>
      </div>
    );
  }
}
