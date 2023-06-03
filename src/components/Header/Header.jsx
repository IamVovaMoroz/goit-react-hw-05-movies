import React from 'react';
import { Nav, Ul, Li, NavLinkStyled } from './Header.styled';


function Header() {
  return (
    <Nav>
      <Ul>
        <Li>
          <NavLinkStyled to="/" exact="true">Home</NavLinkStyled>
        </Li>
        <Li>
          <NavLinkStyled to="/movies" exact="true">Movies</NavLinkStyled>
        </Li>
        <Li>
          <NavLinkStyled to="/contact" exact="true">Contact</NavLinkStyled>
        </Li>
      </Ul>
    </Nav>
  );
}

export default Header;