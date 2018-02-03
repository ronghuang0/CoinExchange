import React from 'react';
import PropTypes from 'prop-types';
import {
  Route,
} from 'react-router-dom';
import { Menu } from 'semantic-ui-react';

const NavMenuComponent = ({ label, to, exact }) => (
  <Route
    path={to}
    exact={exact}
  >
    {({ match, history }) => (
      <Menu.Item
        active={match && match.isExact}
        name={label}
        onClick={() => history.push(to)}
      >
        {label}
      </Menu.Item>)}
  </Route>
);

NavMenuComponent.propTypes = {
  label: PropTypes.string,
  to: PropTypes.string,
  exact: PropTypes.bool,
};

export default NavMenuComponent;
