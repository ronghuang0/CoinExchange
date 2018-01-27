import React from 'react';
import {
  Route,
} from 'react-router-dom';
import { Menu } from 'semantic-ui-react';
import type { Match, RouterHistory } from 'react-router-dom';

type NavComponentProps = {
  label: string,
  to: string,
  exact: boolean,
};

type InnerProps = {
  match: Match,
  history: RouterHistory,
};

const NavMenuComponent = ({ label, to, exact }: NavComponentProps) => (
  <Route
    path={to}
    exact={exact}
  >
    {({ match, history }: InnerProps) => (
      <Menu.Item
        active={match && match.isExact}
        name={label}
        onClick={() => history.push(to)}
      >
        {label}
      </Menu.Item>)}
  </Route>
);

export default NavMenuComponent;
