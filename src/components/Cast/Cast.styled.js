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
  
 
  /* justify-content: space-between; */
`;

export const CastItem = styled.li`
  width: 170px;
  
`;
export const Thumb = styled.div`
  height: 255px;
  width: 177px;
  overflow: hidden;
`;
export const ActorImg = styled.img`
  display: block;
  height: 100%;
  width: 100%;
  object-fit: cover;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.2); 
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