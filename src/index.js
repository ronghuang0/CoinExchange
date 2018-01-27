// @flow
import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
// import 'semantic-ui-css/semantic.min.css';
import {
  Menu,
  Grid,
  Input,
} from 'semantic-ui-react';
import Home from './Routes/Home';
import Page1 from './Routes/Page1';
import Page2 from './Routes/Page2';
import NavMenuComponent from './NavMenuComponent';

const NavMenu = () => (
  <Grid padded='horizontally'>
    <Grid.Column>
      <Menu secondary >
        <NavMenuComponent label='Home' to='/' />
        <NavMenuComponent label='Page1' to='/page1' />
        <NavMenuComponent label='Page2' to='/page2' />
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
      <NavMenu />
      <Route exact path='/' component={Home} />
      <Route path='/page1' component={Page1} />
      <Route path='/page2' component={Page2} />
    </div>
  </Router>
);

const rootEl = document.getElementById('root');
if (!(rootEl instanceof Element)) {
  throw new Error('invalid type');
}
ReactDOM.render(<Root />, rootEl);
