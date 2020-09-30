import React, {Component} from 'react';

interface SubjectProps {
  title: string;
  sub: string;
  onChangePage: () => void;
}

export class Subject extends Component<SubjectProps> {
  render() {
    return (
      <header>
        <h1>
          <a
            href='/'
            onClick={(e) => {
              e.preventDefault();
              this.props.onChangePage();
            }}
          >
            {this.props.title}
          </a>
        </h1>
        {this.props.sub}
      </header>
    );
  }
}
