import React, { Component } from 'react';
import './App.css';
import { ReadContent } from './components/ReadContent';
import { CreateContent } from './components/CreateContent';
import { UpdateContent } from './components/UpdateContent';
import { Control } from './components/Control';
import { Subject } from './components/Subject';
import { TOC } from './components/TOC';

interface appProps {}

interface appState {
  mode: string;
  selectedContentId: number;
  welcome: { title: string; desc: string };
  subject: { title: string; sub: string };
  contents: { id: number; title: string; desc: string }[];
}

class App extends Component<appProps, appState> {
  constructor(props: appProps) {
    super(props);
    this.state = {
      mode: 'welcome',
      selectedContentId: 0,
      subject: { title: 'WEB', sub: 'World Wide Web' },
      welcome: { title: 'Welcome', desc: 'Hello, React!!' },
      contents: [
        { id: 1, title: 'HTML', desc: 'HTML is HyperText ~~~~' },
        { id: 2, title: 'CSS', desc: 'CSS is ~~~~' },
        { id: 3, title: 'JavaScript', desc: 'Javascript is ~~~~' },
      ],
    };
  }

  render() {
    return (
      <div className='App'>
        <Subject
          title={this.state.subject.title}
          sub={this.state.subject.sub}
          onChangePage={() => {
            this.setState({ mode: 'welcome' });
          }}
        ></Subject>
        <TOC
          onChangePage={(selectedContentId) => {
            this.setState({ mode: 'read', selectedContentId });
          }}
          data={this.state.contents}
        ></TOC>
        <Control
          onChangeMode={(mode: string) => {
            if (mode === 'delete') {
              if (window.confirm('really?')) {
                const contents = this.state.contents.filter(
                  (c) => c.id !== this.state.selectedContentId
                );
                this.setState({
                  mode: 'welcome',
                  contents,
                });
              }
            } else {
              this.setState({ mode });
            }
          }}
        ></Control>
        {this.getContent()}
      </div>
    );
  }

  private getReadContent() {
    const content = this.state.contents.find((c) => c.id === this.state.selectedContentId);
    return content ? content : null;
  }

  private getContent() {
    let title = '';
    let desc = '';
    let article;
    if (this.state.mode === 'welcome') {
      title = this.state.welcome.title;
      desc = this.state.welcome.desc;
      article = <ReadContent name={title} desc={desc}></ReadContent>;
    } else if (this.state.mode === 'read') {
      const data = this.getReadContent();
      if (data) {
        title = data.title;
        desc = data.desc;
      }
      article = <ReadContent name={title} desc={desc}></ReadContent>;
    } else if (this.state.mode === 'create') {
      article = (
        <CreateContent
          onSubmit={(title, desc) => {
            const contents = Array.from(this.state.contents);
            const id = this.state.contents.length + 1;
            contents.push({ id, title, desc });
            this.setState({ contents, mode: 'read', selectedContentId: id });
          }}
        ></CreateContent>
      );
    } else if (this.state.mode === 'update') {
      let content = this.getReadContent();
      if (content !== null) {
        article = (
          <UpdateContent
            data={content}
            onSubmit={(id, title, desc) => {
              const contents = Array.from(this.state.contents);
              const content = contents.find((content) => content.id === id);
              if (content) {
                content.title = title;
                content.desc = desc;
              }
              this.setState({ contents });
            }}
          ></UpdateContent>
        );
      }
    }
    return article;
  }
}

export default App;
