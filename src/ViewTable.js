/* eslint-disable */
import _ from 'lodash';
import React, { Component } from 'react';
import { Table } from 'semantic-ui-react';

export default class ViewTable extends Component {
  render() {
    const { data } = this.props;
    console.log('woley', data);
    return (
      <Table unstackable sortable celled fixed>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>
              Name
            </Table.HeaderCell>
            <Table.HeaderCell>
              Price
            </Table.HeaderCell>
            <Table.HeaderCell>
              Change (24h)
            </Table.HeaderCell>
            <Table.HeaderCell>
              Market Cap
            </Table.HeaderCell>
            <Table.HeaderCell>
              Volume (24h)
            </Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {_.map(data, ({
              name,
              percent_change_24h,
              price_usd,
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
