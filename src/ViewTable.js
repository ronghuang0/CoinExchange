/* eslint-disable */

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

export default class ViewTable extends Component {

  render() {
    const { data } = this.props;

    return (
      <Table unstackable sortable celled fixed>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>
              Name
            </Table.HeaderCell>
            <Table.HeaderCell>
              Market Cap
            </Table.HeaderCell>
            <Table.HeaderCell>
              Price
            </Table.HeaderCell>
            <Table.HeaderCell>
              Volume
            </Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {_.map(data, ({
              name,
              price,
            }) => (
              <Table.Row key={name}>
                <Table.Cell>{name}</Table.Cell>
                <Table.Cell>{price}</Table.Cell>
              </Table.Row>
            ))}
        </Table.Body>
      </Table>
    );
  }
}
