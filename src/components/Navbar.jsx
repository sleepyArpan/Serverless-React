import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

import {
  StyledNavbar,
  StyledNavBrand,
  StyledNavItems,
  StyledLink,
  StyledButtonLink,
  StyledThemeToggler,
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
            <StyledButtonLink
              onClick={() =>
                logout({
                  returnTo: window.location.origin,
                })
              }>
              Logout
            </StyledButtonLink>
          </li>
        )}
        {!isAuthenticated && (
          <li>
            <StyledButtonLink onClick={() => loginWithRedirect()}>
              Login
            </StyledButtonLink>
          </li>
        )}
        <StyledThemeToggler onClick={toggleTheme}>
          Toggle Theme
        </StyledThemeToggler>
      </StyledNavItems>
    </StyledNavbar>
  );
};

export default Navbar;
