import styled from 'styled-components';
import pinkBackground from './back.png';

export const PageWrapper = styled.div`
  background: #cd718e url(${pinkBackground}) no-repeat;
  background-size: cover;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
  position: relative;

  ${props => props.theme.media.phone`
    justify-content: flex-start;
    padding-top: 65px;
  `}
`;
export const LogoWrapper = styled.div`
  position: absolute;
  top: 30px;
  left: 30px;
`;
