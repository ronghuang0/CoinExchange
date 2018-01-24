/* @flow */
import React from 'react';
import type { Match } from 'react-router-dom';

type Props = {
  match: Match,
};

const Topic = (props: Props) => (
  <div>
    <h3>{props.match.params.topicId}</h3>
  </div>
);

export default Topic;
