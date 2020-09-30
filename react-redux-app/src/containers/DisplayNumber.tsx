import { DisplayNumber } from '../components/DisplayNumber';
import { connect } from 'react-redux';

interface RootState {
  number: number;
}

const mapReduxStateToReactProps = (state: RootState) => ({ number: state.number });

export default connect(mapReduxStateToReactProps)(DisplayNumber);

// import React, { Component } from 'react';
// import store from '../store';

// interface IProps {}

// export default class extends Component<IProps> {
//   state = { number: store.getState().number };

//   constructor(props: IProps) {
//     super(props);
//     store.subscribe(() => {
//       this.setState({ number: store.getState().number });
//     });
//   }

//   render() {
//     return <DisplayNumber number={this.state.number} unit={this.props.unit}></DisplayNumber>;
//   }
// }
