import React, { Component } from 'react';
import Overview from '../Overview';

export default class Home extends Component {
  componentDidMount() {
    fetch('https://api.coinbase.com/v2/prices/spot?currency=USD')
      .then(res => res.json())
      .then((res => console.log(res)));
  }
  render() {
    return (
      <Overview />
    );
  }
}
