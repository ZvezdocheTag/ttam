import styled from 'styled-components';
import manLegs from './man.svg';

export const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: url(${manLegs}) no-repeat 54% 0;
  width: 80vw;
  position: relative;
  z-index: 2;
  /* background-size: cover; */
`;
export const FooterSand = styled.div`
  content: '';
  position: absolute;
  width: 100vw;
  height: 100px;
  bottom: 0;
  left: 0;
  background-color: #d78da4;
  z-index: 1;
`;
export const MessagesWrapper = styled.div`
  text-align: center;
`;

export const Message = styled.span`
  font-family: Shnobel, Helvetica Neue, Arial, sans-serif;
  line-height: 1.2;
  color: ${props => (props.through ? '#7F4156' : '#fff')};
  text-align: center;
  /* display: block; */
  position: relative;
  font-size: ${props => (props.size === 'big' ? '100px' : '50px')};

  ${props =>
    props.through &&
    `
        &:before {
            content: '';
            position: absolute;
            width: 120%;
            display: block;
            height: 5px;
            background: #7F4156;
            top: 60%;
            left: -10%;
        }
    `}
`;
