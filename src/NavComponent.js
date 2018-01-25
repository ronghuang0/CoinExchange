import React from 'react';
import {
  Route,
  Link,
} from 'react-router';
import type { Match } from 'react-router-dom';

type NavComponentProps = {
  label: string,
  to: string,
  activeOnlyWhenExact: boolean,
};

type NavComponentChildProps = {
  match: Match,
};

const NavComponent = (props: NavComponentProps) => (
  <Route
    path={props.to}
    exact={props.activeOnlyWhenExact}
  >
    (props:NavComponentChildProps) => (
    <div>
      {NavComponentChildProps.match ? '> ' : ''}<Link to={to}>{props.label}</Link>
    </div>
    )
  </Route>
)

export default NavComponent;
