import React, { Component } from 'react';
import Overview from '../Overview';

export default class Home extends Component {
  state = {
    data: [
      {
        name: 'Bitcoin',
        price: null,
      },
    ],
  };

  componentDidMount() {
    const { data } = this.state;
    // this will move to server.
    fetch('https://api.coinbase.com/v2/prices/spot?currency=USD')
      .then(res => res.json())
      .then((res) => {
        const newData = data.map((element) => {
          const obj = Object.assign({}, element);
          obj.price = res.data.amount;
          return obj;
        });
        this.setState({ data: newData });
      });
  }
  render() {
    const { data } = this.state;
    return (
      <Overview data={data} />
    );
  }
}
