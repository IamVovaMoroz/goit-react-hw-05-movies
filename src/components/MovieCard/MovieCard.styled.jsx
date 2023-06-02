// import styled from 'styled-components';
// import { NavLink } from 'react-router-dom';

// export const MovieCardInfo = styled.div`
//   display: flex;
//   flex-direction: row;
//   padding-right: 30px;
//   padding-left: 30px;
//   padding-top: 30px;
// `;
// export const Img = styled.img`
//   width: 300px;
//   height: auto;
//   object-fit: cover;
//   display: block;
//   margin-right: 20px;
//   transition: transform 0.3s ease, box-shadow 0.3s ease;
//   box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);

//   &:hover {
//     transform: scale(1.05);
    
//   }
// `;

// export const MovieTitle = styled.h1`
//   font-size: 20px;
//   font-weight: 800;
//   margin-bottom: 10px;
// `;
// export const Score = styled.p`
//   color: darkgrey;
// `;
// export const Title = styled.h3`
//   font-size: 18px;
//   font-weight: 800;
//   margin-top: 10px;
//   margin-bottom: 5px;
// `;

// export const AddInfo = styled.div`
//   margin-top: 22px;
// `;

// export const CartNav = styled.nav`
//   display: flex;
// `;
// export const StyledNavLink = styled(NavLink)`
//   margin-right: 20px;
//   text-transform: uppercase;
// `;

// export const Button = styled.button`
//   font-size: 16px;
//   text-transform: uppercase;
//   width: 90px;
//   margin-top: 10px;
//   padding: 6px;
//   /* padding-top: 4px;
//   padding-bottom: 4px; */
//   border: none;
//   /* padding-right: 4px; */
//   border-radius: 5px;
//   background-color: #fff;
//   cursor: pointer;
//   position: relative;
//   transition: color 0.3s;
//   white-space: nowrap; 
//   border: 1px solid grey; 
  

//   &:hover {
//     color: grey;

//     &::before {
//       content: '';
//       position: absolute;
//       width: 100%;
//       height: 3px;
//       background-color: blue;
//       bottom: -3px;
//       left: 0;
//       animation: underlineAnim 0.3s forwards;
//     }
//   }

//   @keyframes underlineAnim {
//     0% {
//       width: 0;
//     }
//     100% {
//       width: 100%;
//     }
//   }
// `;

import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const MovieCardInfo = styled.div`
  display: flex;
  flex-direction: row;
  padding-right: 30px;
  padding-left: 15px;
  padding-top: 30px;
  margin-top: 60px;
`;

export const Img = styled.img`
  width: 300px;
  height: auto;
  object-fit: cover;
  display: block;
  margin-right: 20px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);

  &:hover {
    transform: scale(1.05);
  }
`;

export const MovieTitle = styled.h1`
  font-size: 20px;
  font-weight: 800;
  margin-bottom: 10px;
`;

export const Score = styled.p`
  color: darkgrey;
`;

export const Title = styled.h3`
  font-size: 18px;
  font-weight: 800;
  margin-top: 10px;
  margin-bottom: 5px;
`;

export const AddInfo = styled.div`
  margin-top: 22px;
  position: relative;
  height: 100px; /* Adjust the height as needed */
`;

export const CartNav = styled.nav`
  display: flex;
`;

export const StyledNavLink = styled(NavLink)`
  margin-right: 20px;
  text-transform: uppercase;
`;

export const Button = styled.button`
  font-size: 16px;
  text-transform: uppercase;
  width: 90px;
  margin-top: 10px;
  padding: 6px;
  border: none;
  border-radius: 5px;
  background-color: #fff;
  cursor: pointer;
  position: relative;
  transition: color 0.3s;
  white-space: nowrap;
  border: 1px solid grey;

  &:hover {
    color: grey;

    &::before {
      content: '';
      position: absolute;
      width: 100%;
      height: 3px;
      background-color: blue;
      bottom: -3px;
      left: 0;
      animation: underlineAnim 0.3s forwards;
    }
  }

  @keyframes underlineAnim {
    0% {
      width: 0;
    }
    100% {
      width: 100%;
    }
  }
`;