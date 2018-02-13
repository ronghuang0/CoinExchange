import React, { Component } from 'react';
import Overview from '../Overview';

export default class Home extends Component {
  state = {
    // make this better. The data manipulation will probably be in server.
    data: [],
  };

  componentDidMount() {
    const url = 'https://api.coinmarketcap.com/v1/ticker/?limit=10';
    fetch(url).then(res => res.json())
      .then((res) => {
        this.setState({ data: res });
      });
  }
  render() {
    const { data } = this.state;
    return (
      <Overview data={data} />
    );
  }
}
