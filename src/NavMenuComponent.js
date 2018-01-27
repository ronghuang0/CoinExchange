import React from 'react';
import {
  Route,
} from 'react-router-dom';
import { Menu } from 'semantic-ui-react';
// import type { Match } from 'react-router-dom';

type NavComponentProps = {
  label: string,
  to: string,
  activeOnlyWhenExact: boolean,
};


const NavMenuComponent = (props: NavComponentProps) => (
  <Route
    path={props.to}
    exact={props.activeOnlyWhenExact}
  >
    {({ match, history }) => (
      <Menu.Item
        active={match && match.isExact}
        name={props.label}
        onClick={() => history.push(props.to)}
      >
        {props.label}
      </Menu.Item>
    )};
  </Route>
);

export default NavMenuComponent;
