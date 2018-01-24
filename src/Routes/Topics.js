/* @flow */
import React from 'react';
import {
  Route,
  Link,
} from 'react-router-dom';
import type { Match } from 'react-router-dom';

type Props = {
  match: Match,
};

const Topic = (props: Props) => (
  <div>
    <h3>{props.match.params.topicId}</h3>
  </div>
);

const Topics = (props: Props) => (
  <div>
    <h2>Topics</h2>
    <ul>
      <li>
        <Link to={`${props.match.url}/rendering`}>
          Rendering with React
        </Link>
      </li>
      <li>
        <Link to={`${props.match.url}/components`}>
          Components
        </Link>
      </li>
      <li>
        <Link to={`${props.match.url}/props-v-state`}>
          Props v. State
        </Link>
      </li>
    </ul>

    <Route path={`${props.match.url}/:topicId`} component={Topic} />
    <Route
      exact
      path={props.match.url}
      render={() => (
        <h3>Please select a topic.</h3>
      )}
    />
  </div>
);

export default Topics;
