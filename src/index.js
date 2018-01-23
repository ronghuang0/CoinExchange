/* @flow */
import React from 'react';
import ReactDOM from 'react-dom';

const Root = () => (<div> hi </div>);
const rootEl = document.getElementById('root');
if (!(rootEl instanceof Element)) {
  throw new Error('invalid type');
}
ReactDOM.render(<Root />, rootEl);
