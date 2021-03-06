import _ from 'lodash';
import React, { Component } from 'react';
import { Table } from 'semantic-ui-react';

const tableData = [
  {
    name: 'Bitcoin',
    marketCap: 187801973425,
    price: 11159,
    volume: 9624400000,
  },
  {
    name: 'Ethereum',
    marketCap: 102831314283,
    price: 1057,
    volume: 3485130000,
  },
  {
    name: 'Litecoin',
    marketCap: 9685832618,
    price: 176.3,
    volume: 363560000,
  },
];

export default class SortableTable extends Component {
  state = {
    column: null,
    data: tableData,
    direction: null,
  }

  handleSort = clickedColumn => () => {
    const { column, data, direction } = this.state;

    if (column !== clickedColumn) {
      this.setState({
        column: clickedColumn,
        data: _.sortBy(data, [clickedColumn]),
        direction: 'ascending',
      });
    }

    this.setState({
      data: data.reverse(),
      direction: direction === 'ascending' ? 'descending' : 'ascending',
    });
  }

  render() {
    const { column, data, direction } = this.state;

    return (
      <Table unstackable sortable celled fixed>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell
              sorted={column === 'name' ? direction : null}
              onClick={this.handleSort('name')}
            >
              Name
            </Table.HeaderCell>
            <Table.HeaderCell
              sorted={column === 'marketCap' ? direction : null}
              onClick={this.handleSort('marketCap')}
            >
              Market Cap
            </Table.HeaderCell>
            <Table.HeaderCell
              sorted={column === 'price' ? direction : null}
              onClick={this.handleSort('price')}
            >
              Price
            </Table.HeaderCell>
            <Table.HeaderCell
              sorted={column === 'volume' ? direction : null}
              onClick={this.handleSort('volume')}
            >
              Volume
            </Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {_.map(data, ({
              name,
              marketCap,
              price,
              volume,
            }) => (
              <Table.Row key={name}>
                <Table.Cell>{name}</Table.Cell>
                <Table.Cell>{marketCap}</Table.Cell>
                <Table.Cell>{price}</Table.Cell>
                <Table.Cell>{volume}</Table.Cell>
              </Table.Row>
            ))}
        </Table.Body>
      </Table>
    );
  }
}
