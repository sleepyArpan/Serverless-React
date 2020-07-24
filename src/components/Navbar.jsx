import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

import {
  StyledNavbar,
  StyledNavBrand,
  StyledNavItems,
  StyledLink,
} from '../styled/Navbar';
import { Accent } from '../styled/Random';

const Navbar = ({ toggleTheme }) => {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

  return (
    <StyledNavbar>
      <StyledNavBrand>
        <Link to='/'>
          <Accent>Typing.</Accent>Game.
        </Link>
      </StyledNavBrand>
      <StyledNavItems>
        <li>
          <StyledLink to='/'>Home</StyledLink>
        </li>
        <li>
          <StyledLink to='/highscores'>High Scores</StyledLink>
        </li>
        {isAuthenticated && (
          <li>
            <button
              onClick={() =>
                logout({
                  returnTo: window.location.origin,
                })
              }>
              Logout
            </button>
          </li>
        )}
        {!isAuthenticated && (
          <li>
            <button onClick={() => loginWithRedirect()}>Login</button>
          </li>
        )}
        <button onClick={toggleTheme}>Toggle Theme</button>
      </StyledNavItems>
    </StyledNavbar>
  );
};

export default Navbar;
