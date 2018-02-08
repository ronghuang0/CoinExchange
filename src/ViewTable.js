/* eslint-disable */
import _ from 'lodash';
import React, { Component } from 'react';
import { Table } from 'semantic-ui-react';

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
              Price
            </Table.HeaderCell>
            <Table.HeaderCell>
              Market Cap
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
                <Table.Cell>{0}</Table.Cell>
                <Table.Cell>{0}</Table.Cell>

              </Table.Row>
            ))}
        </Table.Body>
      </Table>
    );
  }
}
