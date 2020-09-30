import React, { Component } from 'react';

interface ComponentProps {
  onSubmit: (title: string, desc: string) => void;
}

interface ComponentState {
  title: string;
  desc: string;
}

export class CreateContent extends Component<ComponentProps, ComponentState> {
  render() {
    return (
      <article>
        <h2>Create</h2>
        <form
          action='/create_process'
          method='post'
          onSubmit={(e) => {
            e.preventDefault();
            this.props.onSubmit(this.state.title, this.state.desc);
          }}
        >
          <p>
            <input
              type='text'
              name='title'
              placeholder='title'
              onChange={(e) => {
                this.setState({ title: e.currentTarget.value });
              }}
            ></input>
          </p>
          <p>
            <textarea
              name='desc'
              placeholder='description'
              onChange={(e) => {
                this.setState({ desc: e.currentTarget.value });
              }}
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
