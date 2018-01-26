import React from 'react';
import {
  Route,
  Link,
} from 'react-router-dom';
import { Menu } from 'semantic-ui-react';
// import type { Match } from 'react-router-dom';

type NavComponentProps = {
  label: string,
  to: string,
  activeOnlyWhenExact: boolean,
};


const NavComponent = (props: NavComponentProps) => (
  <Route
    path={props.to}
    exact={props.activeOnlyWhenExact}
  >
    {({ match }) => {
      return (
        <Menu.Item active={match} name='About' onClick={() => {}}><Link to='/about'>About</Link></Menu.Item>
      );
    }}
  </Route>
);

export default NavComponent;
