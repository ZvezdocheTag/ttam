import styled from 'styled-components';
import manLegs from './man.svg';

export const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: -90px;
  background: url(${manLegs}) no-repeat 54% 0;
  width: 80vw;
  position: relative;
  z-index: 2;
  background-size: contain;

  ${props => props.theme.media.phone`
  margin-top: 0px;
  background-size: cover;
  background-position: 47% 0;
  width: 100vw;
  height: 60vh;
  `}

  @media (orientation: landscape) {
    background-size: contain;
    background-position: 7% 0;
  }
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
  ${props => props.theme.media.phone`
    height: 50vh;
  `}
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

  ${props => props.theme.media.phone`
      font-size: ${props => (props.size === 'big' ? '60px' : '30px')};
  `}

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
