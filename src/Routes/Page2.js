import React from 'react';
import PropTypes from 'prop-types';
import {
  Route,
  Link,
} from 'react-router-dom';

const SubPage = ({ match }) => (
  <div>
    <h3>{match.params.topicId}</h3>
  </div>
);

SubPage.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.node,
    }).isRequired,
  }).isRequired,
};

const Page2 = ({ match }) => (
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

Page2.propTypes = {
  match: PropTypes.shape({ url: PropTypes.string.isRequired }).isRequired,
};

export default Page2;
