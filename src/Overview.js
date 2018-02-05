import React from 'react';
import { Grid, Header } from 'semantic-ui-react';
import SortableTable from './SortableTable';

const Overview = () => (
  <Grid padded='horizontally'>
    <Grid.Column>
      <Header textAlign='center' as='h1'>Cryptocurrency Market Overview</Header>
      <div> Average: </div>
      <SortableTable />
    </Grid.Column>
  </Grid>
);

export default Overview;
