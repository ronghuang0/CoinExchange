import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Header } from 'semantic-ui-react';
import ViewTable from './ViewTable';

const Overview = ({ data }) => (
  <Grid padded='horizontally'>
    <Grid.Column>
      <Header textAlign='center' as='h1'>Cryptocurrency Market Overview</Header>
      {/* <SortableTable data={data} /> */}
      <ViewTable data={data} />
    </Grid.Column>
  </Grid>
);

Overview.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    price_usd: PropTypes.string.isRequired,
    percent_change_24h: PropTypes.string.isRequired,
    market_cap_usd: PropTypes.string.isRequired,
    '24h_volume_usd': PropTypes.string.isRequired,
  })).isRequired,
};

export default Overview;
