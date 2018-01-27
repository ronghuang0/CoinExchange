// @flow
import React from 'react';
import {
  Route,
  Link,
} from 'react-router-dom';
import type { Match } from 'react-router-dom';

type Props = {
  match: Match,
};

const SubPage = ({ match }: Props) => (
  <div>
    <h3>{match.params.topicId}</h3>
  </div>
);

const Page2 = ({ match }: Props) => (
  <div>
    <h2>Topics</h2>
    <ul>
      <li>
        <Link to={`${match.url}/sub1`}>
          Sub1
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/sub2`}>
          Sub2
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/sub3`}>
          Sub3
        </Link>
      </li>
    </ul>

    <Route path={`${match.url}/:topicId`} component={SubPage} />
  </div>
);


export default Page2;
