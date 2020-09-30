import React, {Component} from 'react';

interface ControlProps {
  onChangeMode: (mode: string) => void;
}

export class Control extends Component<ControlProps> {
  render() {
    return (
      <ul>
        <li>
          <a
            href='/create'
            onClick={(e) => {
              e.preventDefault();
              this.props.onChangeMode('create');
            }}
          >
            Create
          </a>
        </li>
        <li>
          <a
            href='/update'
            onClick={(e) => {
              e.preventDefault();
              this.props.onChangeMode('update');
            }}
          >
            Update
          </a>
        </li>
        <li>
          <input
            type='button'
            value='delete'
            onClick={(e) => {
              e.preventDefault();
              this.props.onChangeMode('delete');
            }}
          ></input>
        </li>
      </ul>
    );
  }
}
