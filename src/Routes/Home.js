import React, { Component } from 'react';
import Overview from '../Overview';

export default class Home extends Component {
  state = {
    data: null,
  };

  componentDidMount() {
    fetch('https://api.coinbase.com/v2/prices/spot?currency=USD')
      .then(res => res.json())
      .then((res => this.setState({ data: res.data })));
  }
  render() {
    const { data } = this.state;
    console.log('woley', data);
    return (
      <Overview data={data} />
    );
  }
}
