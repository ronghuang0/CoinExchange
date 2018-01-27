import React from 'react';
import { Grid } from 'semantic-ui-react';
import SortableTable from './SortableTable';

const Overview = () => (
  <Grid padded='horizontally'>
    <Grid.Column>
      <SortableTable />
    </Grid.Column>
  </Grid>
);

export default Overview;
