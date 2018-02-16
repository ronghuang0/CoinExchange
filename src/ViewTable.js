/* eslint-disable */
import _ from 'lodash';
import React, { Component } from 'react';
import { Table } from 'semantic-ui-react';

export default class ViewTable extends Component {
  render() {
    const { data, column, direction, onClick } = this.props;
    return (
      <Table unstackable sortable celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell sorted={column === 'name' ? direction : null} onClick={onClick('name')}>
              Name
            </Table.HeaderCell>
            <Table.HeaderCell sorted={column === 'price_usd' ? direction : null} onClick={onClick('price_usd')}>
              Price
            </Table.HeaderCell>
            <Table.HeaderCell sorted={column === 'percent_change_24h' ? direction : null} onClick={onClick('percent_change_24h')}>
              Change (24h)
            </Table.HeaderCell>
            <Table.HeaderCell sorted={column === 'market_cap_usd' ? direction : null} onClick={onClick('market_cap_usd')}>
              Market Cap
            </Table.HeaderCell>
            <Table.HeaderCell sorted={column === '24h_volume_usd' ? direction : null} onClick={onClick('24h_volume_usd')}>
              Volume (24h)
            </Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {_.map(data, ({
              name,
              price_usd,
              percent_change_24h,
              market_cap_usd,
              '24h_volume_usd': volume,
            }) => (
              <Table.Row key={name}>
                <Table.Cell>{name}</Table.Cell>
                <Table.Cell>{`$${price_usd}`}</Table.Cell>
                <Table.Cell>{`${percent_change_24h}%`}</Table.Cell>
                <Table.Cell>{`$${market_cap_usd}`}</Table.Cell>
                <Table.Cell>{`$${volume}`}</Table.Cell>

              </Table.Row>
            ))}
        </Table.Body>
      </Table>
    );
  }
}
