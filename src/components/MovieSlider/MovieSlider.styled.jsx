// import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Wrapper = styled.div`
  margin-top: 20px;
`;

export const Movies = styled.div`
  position: relative;
  overflow: hidden;
`;

export const Ul = styled.ul`
  display: flex;
  padding: 0;
  margin: 0;
  list-style: none;
  transition: transform 1s ease-in-out;
`;

export const Li = styled.li`
  margin-right: 10px;
`;

export const StyledLink = styled(Link)`
  display: block;
  text-decoration: none;
  color: #333;
  transition: opacity 0.3s ease;

  &:hover {
    opacity: 0.7;
  }
`;

export const Img = styled.img`
  width: 200px;
  height: auto;
  vertical-align: top; /* Добавлено свойство для убирания отступа снизу */
`;

export const Thumb = styled.div`
  position: relative;
`;

// export const Title = styled.h3`
//   font-size: 16px;
//   margin-top: 5px;
// `;

export const Arrow = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 70px;
  height: 40px;
  background-color: rgba(25, 25, 26, 0.421); /* Измененный цвет */
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  z-index: 1;
  ${({ left }) => left && 'left: 10px;'} /* Кнопка-стрелка слева */
  ${({ right }) => right && 'right: 10px;'} /* Кнопка-стрелка справа */
`;

export const LeftArrow = styled.span`
  border-top: 6px solid transparent;
  border-bottom: 6px solid transparent;
  border-right: 8px solid #fff;
`;

export const RightArrow = styled.span`
  border-top: 6px solid transparent;
  border-bottom: 6px solid transparent;
  border-left: 8px solid #fff;
`;


export const Title = styled.p`
  font-size: 17px; 
  font-weight: 900;
  line-height: 1.14;
  letter-spacing: 0.03em;

  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  color: #ffffff;
 
  width: 100%;
  left: 0;
  bottom: 0;
  height: 60px;
  margin: 0;
  background-color: rgba(43, 178, 180, 0.421);
`;