import React, { ChangeEvent, Component } from 'react';

interface ComponentProps {
  data: { id: number; title: string; desc: string };
  onSubmit: (id: number, title: string, desc: string) => void;
}

interface ComponentState {
  title: string;
  desc: string;
}

export class UpdateContent extends Component<ComponentProps, ComponentState> {
  constructor(props: ComponentProps) {
    super(props);
    this.state = {
      title: this.props.data.title,
      desc: this.props.data.desc,
    };
  }

  render() {
    return (
      <article>
        <h2>Update</h2>
        <form
          action='/update_process'
          method='post'
          onSubmit={(e) => {
            e.preventDefault();
            this.props.onSubmit(this.props.data.id, this.state.title, this.state.desc);
          }}
        >
          <p>
            <input
              type='text'
              name='title'
              placeholder='title'
              value={this.state.title}
              onChange={(e) => this.setState({ title: e.currentTarget.value })}
            ></input>
          </p>
          <p>
            <textarea
              name='desc'
              placeholder='description'
              value={this.state.desc}
              onChange={(e) => this.setState({ desc: e.currentTarget.value })}
            ></textarea>
          </p>
          <p>
            <input type='submit'></input>
          </p>
        </form>
      </article>
    );
  }
}
