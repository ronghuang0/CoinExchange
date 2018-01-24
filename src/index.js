// @flow
import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Link,
} from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.css';
// import 'semantic-ui-css/semantic.min.css';
import {
  Breadcrumb,
  Header,
  Grid,
} from 'semantic-ui-react';
import Home from './Routes/Home';
import About from './Routes/About';
import Topics from './Routes/Topics';

const GridExampleContainer = () => (
  <Grid container columns={1} padded>
    <Grid.Column>
      {/* <Header as="h1">First Header</Header> */}
      <Breadcrumb size="massive">
        <Breadcrumb.Section link><Link to="/">Home</Link></Breadcrumb.Section>
        <Breadcrumb.Divider />
        <Breadcrumb.Section link><Link to="/about">About</Link></Breadcrumb.Section>
        <Breadcrumb.Divider />
        <Breadcrumb.Section link><Link to="/topics">Topics</Link></Breadcrumb.Section>
      </Breadcrumb>
    </Grid.Column>
  </Grid>
);

const Root = () => (
  <Router>
    <div>
      <GridExampleContainer />
      <hr />

      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/topics" component={Topics} />
    </div>
  </Router>
);

const rootEl = document.getElementById('root');
if (!(rootEl instanceof Element)) {
  throw new Error('invalid type');
}
ReactDOM.render(<Root />, rootEl);
