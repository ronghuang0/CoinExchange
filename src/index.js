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

const GridExampleContainer = () => (
  <Grid padded='horizontally'>
    <Grid.Column>
      <Menu secondary>
        <Menu.Item active={false} name='Home' onClick={() => {}}><Link to='/'>Home</Link> </Menu.Item>
        <Menu.Item active={false} name='About' onClick={() => {}}><Link to='/about'>About</Link></Menu.Item>
        <Menu.Item active name='Topics'><Link to='/topics' onClick={() => {}}>Topics</Link></Menu.Item>
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
