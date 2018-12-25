import styled, { css } from 'styled-components';
import pinkBackground from './back.png';

export const PageWrapper = styled.div`
  background: #cd718e url(${pinkBackground}) no-repeat;
  background-size: cover;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: calc(10px + 2vmin);
  color: white;
  position: relative;
`;

export const TextGroup = styled.g`
  ${props => props.theme.media.phone`
display: none;
`}
`;
export const LogoWrapper = styled.div`

  display: flex;
  padding: 30px;
  width: 100%;
  height: 90px;
 

  ${props => props.theme.media.phone`
  padding: 10px;
      ${props =>
        props.finalPageFlag &&
        css`
          order: 1;
          z-index: 2;
          padding-top: 30vh;
          justify-content: center;
          align-items: center;
        `}

  `}

  & ${TextGroup} {
    ${props => props.theme.media.phone`
      display: ${props => (props.finalPageFlag ? 'block' : 'none')};
  `}
  }
`;
