import React, { Component } from 'react';
import Overview from '../Overview';

export default class Home extends Component {
  state = {
    // make this better. The data manipulation will probably be in server.
    data: [
      {
        name: 'Bitcoin',
        price: null,
      },
      {
        name: 'Ethereum',
        price: null,
      },
      {
        name: 'Litecoin',
        price: null,
      },
    ],
  };

  componentDidMount() {
    const { data } = this.state;
    // this will move to server.
    const urls = [
      'https://api.coinbase.com/v2/prices/BTC-USD/spot',
      'https://api.coinbase.com/v2/prices/ETH-USD/spot',
      'https://api.coinbase.com/v2/prices/LTC-USD/spot',
    ];
    Promise.all(urls.map(url => fetch(url).then(res => res.json())))
      .then((res) => {
        const newData = res.map((element, index) => {
          const obj = Object.assign({}, data[index]);
          obj.price = element.data.amount;
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
