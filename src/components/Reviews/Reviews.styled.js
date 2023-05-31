import styled from '@emotion/styled';

export const Section = styled.div`
  padding-right: 15px;
  padding-left: 15px;
`;

export const ReviewsTitle = styled.h3`
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





// export const ReviewsTitle = styled.h3`
//   font-family: Helvetica Neue;
//   font-weight: 500;
//   font-size: 1.25rem;
//   letter-spacing: 0;
//   line-height: 1.2;
//   padding-left: 9px;
//   text-transform: uppercase;
//   margin-top: 10px;
//   margin-bottom: 1em;
//   margin-left: 24px;
//   position: relative;
//   overflow: hidden;

//   &:before {
//     content: '';
//     position: absolute;
//     bottom: -3px;
//     left: 0;
//     width: 0;
//     height: 3px;
//     background-color: blue;
//     transition: width 0.3s;
//   }

//   &:hover:before {
//     width: 100%;
//   }
// `;
export const Ul = styled.ul`
  list-style: none;
`;
export const Li = styled.li`
  border: 1px solid #546e7c;
  border-radius: 10px;
  width: 1100px;
  padding: 15px;
  margin-bottom: 10px;

  /* &:hover,
  &:focus {
    background-color: #506e7c;
    color: #e0e0e0;
  } */
`;
export const P = styled.p`
  font-weight: 800;
  text-transform: uppercase;
  margin-bottom: 5px;
`;

export const NoReviews = styled.p`
  font-size: 30px;
  font-weight: 800;
  text-transform: uppercase;
  margin-top: 200px;
  margin-left: 400px;
`;
export const Wrapper = styled.div`
  border-radius: 10px;
`;

export const Container = styled.div`
  padding: 20px;
  /* background-color: lightblue; */
  border-radius: 10px;
`;