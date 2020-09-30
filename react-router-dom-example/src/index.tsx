import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { HashRouter, Route, Switch, NavLink, useParams } from 'react-router-dom';

function Home() {
  return (
    <div>
      <h2>Home</h2>
      Home...
    </div>
  );
}

const contents = [
  { id: 1, title: 'HTML', desc: 'HTML is...' },
  { id: 2, title: 'JS', desc: 'JS is...' },
  { id: 3, title: 'React', desc: 'React is...' },
];

function Topic() {
  const params: { topic_id: string } = useParams();
  const topic_id = Number(params.topic_id);
  const topic = contents.find((c) => c.id === topic_id);
  return (
    <div>
      <h3>{topic ? topic.title : 'NOT Found'}</h3>
      {topic ? topic.desc : ''}
    </div>
  );
}

function Topics() {
  let lis: any[] = [];
  contents.map((cur) =>
    lis.push(
      <li key={cur.id}>
        <NavLink to={'/topics/' + cur.id}>{cur.desc}</NavLink>
      </li>
    )
  );

  return (
    <div>
      <h2>Topics</h2>
      <ul>{lis}</ul>
      <Route path='/topics/:topic_id'>
        <Topic></Topic>
      </Route>
    </div>
  );
}
function Contact() {
  return (
    <div>
      <h2>Contact</h2>
      Contact...
    </div>
  );
}

function App() {
  return (
    <div>
      <h1>React Router Dom Example</h1>
      <ul>
        <li>
          <NavLink exact to='/'>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to='/topics'>Topics</NavLink>
        </li>
        <li>
          <NavLink to='/contact'>Contact</NavLink>
        </li>
      </ul>
      <Switch>
        <Route exact path='/'>
          <Home></Home>
        </Route>
        <Route path='/topics'>
          <Topics></Topics>
        </Route>
        <Route path='/contact'>
          <Contact></Contact>
        </Route>
        <Route path='/'>NOT found</Route>
      </Switch>
    </div>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
