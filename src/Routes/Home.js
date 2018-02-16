import React, { Component } from 'react';
import _ from 'lodash';
import Overview from '../Overview';

export default class Home extends Component {
  state = {
    // make this better. The data manipulation will probably be in server.
    data: [],
    column: null,
    direction: null,
  };

  componentDidMount() {
    const url = 'https://api.coinmarketcap.com/v1/ticker/?limit=10';
    fetch(url).then(res => res.json())
      .then((res) => {
        this.setState({ data: res });
      });
  }

  // Seems like intermittently doesn't work for negative numbers
  handleSort = clickedColumn => () => {
    const { column, data, direction } = this.state;

    if (column !== clickedColumn) {
      const sortFunction = clickedColumn === 'name' ?
        obj => obj.name :
        obj => parseInt(obj[clickedColumn], 10);
      this.setState({
        column: clickedColumn,
        data: _.sortBy(data, sortFunction),
        direction: 'ascending',
      });
      return;
    }
    this.setState({
      data: data.reverse(),
      direction: direction === 'ascending' ? 'descending' : 'ascending',
    });
  }

  render() {
    const { data, column, direction } = this.state;
    return (
      <Overview
        data={data}
        column={column}
        direction={direction}
        onClick={this.handleSort}
      />
    );
  }
}
