import React, { Component } from 'react';

interface TOCProps {
  onChangePage: (id: number) => void;
  data: {
    id: number;
    title: string;
    desc: string;
  }[];
}

export class TOC extends Component<TOCProps> {
  shouldComponentUpdate(newProps: TOCProps, newState: any) {
    return newProps.data !== this.props.data;
  }
  render() {
    return (
      <nav>
        <ul>
          {this.props.data.map((d) => {
            return (
              <li key={d.id}>
                <a
                  href={d.id.toString() + '.html'}
                  onClick={(e) => {
                    e.preventDefault();
                    this.props.onChangePage(d.id);
                  }}
                >
                  {d.title}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    );
  }
}
