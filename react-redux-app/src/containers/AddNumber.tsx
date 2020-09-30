import { connect } from 'react-redux';
import { AddNumber } from '../components/AddNumber';

const mapReduxDispatchToReactProps = {
  onClick: (size: number) => ({ type: 'INCREMENT', size }),
};

export default connect(null, mapReduxDispatchToReactProps)(AddNumber);

/*
import React, { Component } from 'react';
import store from '../store';

export default class extends Component {
  render() {
    return (
      <AddNumber
        onClick={(size) => {
          store.dispatch({ type: 'INCREMENT', size });
        }}
      ></AddNumber>
    );
  }
}
 */
