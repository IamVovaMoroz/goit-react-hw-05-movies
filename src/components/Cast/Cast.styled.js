// import styled from '@emotion/styled';

// export const Section = styled.div`
//   padding-right: 15px;
//   padding-left: 15px;
// `;
// export const CastTitle = styled.div`
//   font-family: Helvetica Neue;
//   font-weight: 500;
//   font-size: 1.25rem;
//   letter-spacing: 0;
//   line-height: 1.2;
//   padding-left: 9px;
//   text-transform: uppercase;
//   margin-top: 10px;
//   padding-right: 10px;
//   margin-bottom: 1em;
//   position: relative;
//   cursor: pointer;
//   display: inline-block;

//   &::before {
//     position: absolute;
//     content: '';
//     height: 3px;
//     width: 100%;
//     bottom: 0;
//     left: 0;
//     background-color: blue;
//     transform: scaleX(0);
//     transform-origin: right;
//     transition: transform 0.3s;
//   }

//   &:hover::before {
//     transform: scaleX(1);
//     transform-origin: left;
//   }
// `;

// export const CastList = styled.ul`
//   list-style: none;
//   padding: 0px;
//   display: flex;
//   flex-wrap: wrap;
//   gap: 60px;
  
 

// `;

// export const CastItem = styled.li`
//   width: 170px;
  
// `;
// export const Thumb = styled.div`
//   height: 255px;
//   width: 177px;
//   overflow: hidden;
// `;
// export const ActorImg = styled.img`
//   display: block;
//   height: 100%;
//   width: 100%;
//   object-fit: cover;
//   box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.2); 
// `;

// export const ActorName = styled.p`
//   font-size: 14px;
//   font-weight: 600;
//   white-space: nowrap; 
// `;

// export const Character = styled.p`
//   font-size: 10px;
//   font-weight: 400;
//   white-space: nowrap;
// `;


import styled from '@emotion/styled';

export const Section = styled.div`
  padding-right: 15px;
  padding-left: 15px;
`;

export const CastTitle = styled.div`
  font-family: Helvetica Neue;
  font-weight: 500;
  font-size: 1.25rem;
  letter-spacing: 0;
  line-height: 1.2;
  padding-left: 9px;
  text-transform: uppercase;
  margin-top: 10px;
  padding-right: 10px;
  margin-bottom: 1em;
  position: relative;
  cursor: pointer;
  display: inline-block;

  &::before {
    position: absolute;
    content: '';
    height: 3px;
    width: 100%;
    bottom: 0;
    left: 0;
    background-color: blue;
    transform: scaleX(0);
    transform-origin: right;
    transition: transform 0.3s;
  }

  &:hover::before {
    transform: scaleX(1);
    transform-origin: left;
  }
`;

export const CastList = styled.ul`
  list-style: none;
  padding: 0px;
  display: flex;
  flex-wrap: wrap;
  gap: 60px;
`;

export const CastItem = styled.li`
  width: 170px;
`;

export const Thumb = styled.div`
  height: 255px;
  width: 177px;
  overflow: hidden;
  position: relative;

  &:hover img {
    filter: brightness(70%);
    &::before {
      opacity: 1;
    }
  }
`;

export const ActorImg = styled.img`
  display: block;
  height: 100%;
  width: 100%;
  object-fit: cover;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.2);
  transition: filter 0.3s;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    background: linear-gradient(
      to right,
      rgba(255, 255, 255, 0.8) 0%,
      rgba(255, 255, 255, 0.5) 50%,
      rgba(255, 255, 255, 0) 80%
    );
    transition: opacity 0.3s;
  }
`;

export const ActorName = styled.p`
  font-size: 14px;
  font-weight: 600;
  white-space: nowrap;
`;

export const Character = styled.p`
  font-size: 10px;
  font-weight: 400;
  white-space: nowrap;
`;
