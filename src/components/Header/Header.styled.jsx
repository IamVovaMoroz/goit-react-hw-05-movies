
// import styled from '@emotion/styled';
// import { NavLink } from 'react-router-dom';

// export const Nav = styled.nav`
//   background-color: rgba(43, 178, 180, 0.421);
//   padding: 10px;
// `;

// export const Ul = styled.ul`
//   display: flex;
//   justify-content: center;
//   list-style: none;
//   padding: 0;
// `;

// export const Li = styled.li`
//   margin-right: 10px;

//   &:last-child {
//     margin-right: 0;
//   }
// `;

// export const NavLinkStyled = styled(NavLink)`
//   text-decoration: none;
//   color: #333333;
//   font-weight: bold;
//   font-size: 48px;
//   padding: 8px 16px;
//   border: 2px solid transparent;
//   transition: all 0.3s;

//   &:hover {
//     border-color: #333333;
//   }

//   &.active {
//     color: #021bffa8;
//     background-color: #021bffa8;
//     border-color: #021bffa8;
//     outline: none;
//   }

//   &:active {
//     transform: translateY(1px);
//   }
// `;
// import styled from '@emotion/styled';
// import { NavLink } from 'react-router-dom';

// export const Nav = styled.nav`
//   background-color: rgba(43, 178, 180, 0.421);
//   padding: 10px;
// `;

// export const Ul = styled.ul`
//   display: flex;
//   justify-content: center;
//   list-style: none;
//   padding: 0;
// `;

// export const Li = styled.li`
//   margin-right: 10px;

//   &:last-child {
//     margin-right: 0;
//   }
// `;

// export const NavLinkStyled = styled(NavLink)`
//   text-decoration: none;
//   color: #333333;
//   font-weight: bold;
//   font-size: 16px; /* Adjust the font size as desired */
//   padding: 8px 16px;
//   border: 2px solid transparent;
//   transition: all 0.3s;

//   &:hover {
//     color: white; /* Change the text color to white on hover */
//     border-color: #333333;
//   }

//   &.active {
//     color: white; /* Change the text color to white in the active state */
//     background-color: #021bffa8;
//     border-color: #021bffa8;
//     outline: none;
//   }

//   &:active {
//     transform: translateY(1px);
//   }
// `;

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
  margin: 20px;

  &:last-child {
    margin-right: 0;
  }
`;

export const NavLinkStyled = styled(NavLink)`
  text-decoration: none;
  color: #333333;
  font-weight: bold;
  font-size: 38px; /* Adjust the font size as desired */
  padding: 8px 16px;
  border: 2px solid transparent;
  border-radius: 16px; /* Add a small border radius */
  transition: all 0.3s;

  &:hover {
    color: white;
  }

  &.active {
    color: white;
    background-color: rgba(0, 121, 191, 0.8);
    border-color: white; /* Set the border color to white in the active state */
    outline: none;
  }

  &:active {
    transform: translateY(1px);
  }
`;
