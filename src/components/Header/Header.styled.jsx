import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Nav = styled.nav`
  background-color: rgba(43, 178, 180, 0.421);
  padding: 10px;
`;

export const Ul = styled.ul`
  display: flex;
  justify-content: center;
  list-style: none;
  padding: 0;
`;

export const Li = styled.li`
  margin-right: 10px;

  &:last-child {
    margin-right: 0;
  }
`;

export const NavLinkStyled = styled(NavLink)`
  text-decoration: none;
  color: #333333;
  font-weight: bold;

  &.active {
    color: #021bffa8;
  }
`;
// export const NavLinkStyled = styled(NavLink)`
//   text-decoration: none;
//   color: #333333;
//   font-weight: bold;

//   &.active {
//     color: #021bffa8;
//   }
// `.attrs(props => ({
//   exact: props.exact.toString() // Преобразование значения в строку
// }))``;
