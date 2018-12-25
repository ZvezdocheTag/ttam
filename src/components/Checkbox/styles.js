import styled from 'styled-components';

export const Check = styled.div`
  color: #fff;
  position: absolute;

  left: 7px;
  top: -1px;
  margin-left: 2px;
  margin-top: 4px;
  width: 7px;
  height: 11px;

  border-bottom: solid 2px currentColor;
  border-left: solid 2px currentColor;
  -webkit-transform: rotate(-45deg) translate(-50%, -50%);
  transform: rotate(-45deg) translate(-50%, -50%);
`;

export const HiddenInput = styled.input`
  visibility: hidden;
  width: 0;
  height: 0;
  display: none;
`;

export const FakeInput = styled.div`
  background: #7f4156;
  border-radius: 1px;
  width: 17px;
  height: 17px;
  box-sizing: border-box;
  padding: 2px;
  position: relative;
  border-radius: 2px;
  cursor: default;
`;

export const CheckedSignWrapper = styled.div`
  display: ${props => (props.checked ? 'block' : 'none')};
  position: absolute;
  width: 17px;
  height: 17px;
  top: -1px;
  left: -3px;
  transform: rotateY(180deg);
`;
