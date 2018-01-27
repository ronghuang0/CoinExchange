// @flow
import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Link,
} from 'react-router-dom';
// import 'semantic-ui-css/semantic.min.css';
import {
  Menu,
  Grid,
  Input,
} from 'semantic-ui-react';
import Home from './Routes/Home';
import About from './Routes/About';
import Topics from './Routes/Topics';
import NavComponent from './NavComponent';

const GridExampleContainer = () => (
  <Grid padded='horizontally'>
    <Grid.Column>
      <Menu secondary>
        <NavComponent label='Home' to='/' />
        <NavComponent label='About' to='/about' />
        <NavComponent label='Topics' to='/topics' />


        <Menu.Menu position='right'>
          <Menu.Item>
            <Input icon='search' placeholder='Search...' />
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    </Grid.Column>
  </Grid>
);

const Root = () => (
  <Router>
    <div>
      <GridExampleContainer />
      <Route exact path='/' component={Home} />
      <Route path='/about' component={About} />
      <Route path='/topics' component={Topics} />
    </div>
  </Router>
);

const rootEl = document.getElementById('root');
if (!(rootEl instanceof Element)) {
  throw new Error('invalid type');
}
ReactDOM.render(<Root />, rootEl);
