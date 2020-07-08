import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledNavbar = styled.nav`
  display: grid;
  grid-template-columns: 1fr auto;
  padding: 20px;
`;

export const StyledNavBrand = styled.div`
  font-size: 1.4rem;

  & > a {
    text-decoration: none;
  }
`;

export const StyledNavItems = styled.div`
  list-style: none;
  padding: 0;
  display: grid;
  grid-auto-flow: column;
  gap: 20px;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  font-size: 1.2rem;
  transition: color 200ms;
  &:hover {
    color: #e16365;
  }
`;
