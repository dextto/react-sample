import React, {Component} from 'react';

interface ComponentProps {
  name: string;
  desc: string;
}

export class ReadContent extends Component<ComponentProps> {
  render() {
    return (
      <article>
        <h2>{this.props.name}</h2>
        {this.props.desc}
      </article>
    );
  }
}
