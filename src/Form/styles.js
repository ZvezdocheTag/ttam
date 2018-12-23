import styled from 'styled-components';

export const FormWrapper = styled.form`
  width: 516px;
  padding: 40px 60px;
  text-align: left;

  background-image: linear-gradient(
      to right,
      #bfc2e4 60%,
      rgba(255, 255, 255, 0) 20%
    ),
    linear-gradient(to bottom, #bfc2e4 60%, rgba(255, 255, 255, 0) 20%),
    linear-gradient(to left, #bfc2e4 60%, rgba(255, 255, 255, 0) 20%),
    linear-gradient(to top, #bfc2e4 60%, rgba(255, 255, 255, 0) 20%);
  background-position: top, left, bottom, right;
  background-size: 20px 1px, 1px 20px, 20px 1px, 1px 20px;
  background-repeat: repeat-x, repeat-y, repeat-x, repeat-y;

  counter-reset: fieldset;
`;

export const Title = styled.h3`
  text-align: center;
  font-family: Shnobel, Helvetica Neue, Arial, sans-serif;
  font-size: 50px;
  margin: 0;
`;

export const Label = styled.label`
  font-size: 1.32vw;
  margin-bottom: 10px;
  display: block;
`;
export const Fieldset = styled.fieldset`
  border: none;
  outline: none;
  position: relative;
  padding-left: 40px;
  margin-bottom: 20px;
  padding-bottom: 0;

  & > ${Label} {
    opacity: ${props => (!props.disable ? 1 : 0.5)};
  }

  &:last-child {
    margin-bottom: 38px;
  }
  &:before {
    opacity: ${props => (!props.disable ? 1 : 0)};
    transition: opacity 0.3s ease;
    position: absolute;
    top: 10px;
    left: 0;
    font-family: Shnobel, Helvetica Neue, Arial, sans-serif;
    font-size: 44px;
    counter-increment: fieldset;
    content: counter(fieldset) '. ';
  }
`;

export const SendButton = styled.button`
  border: none;
  outline: none;
  margin: 0 auto;
  display: block;

  line-height: 5.15vw;
  max-height: 5.15vw;
  min-width: 15.44vw;
  min-height: 5.15vw;
  font-size: 2.87vw;
  padding: 0.51vw 2.94vw 0;
  border-radius: 5.15vw;

  color: #fff;
  position: relative;
  padding: 0;
  line-height: 1.36;
  font-family: Shnobel, Helvetica Neue, Arial, sans-serif;
  color: #7f4156;
  border: none;
  /* background: transparent; */
  background: #fff;
  outline: none;
  -webkit-transition: background 0.3s;
  -o-transition: 0.3s background;
  transition: background 0.3s;
  -webkit-transform: translateZ(0);
  transform: translateZ(0);
  cursor: pointer;

  &:hover {
    background-color: #622a3d;
    color: #fff;
  }

  &:disabled {
    color: #fff;
    background: transparent;
    border: 2px solid #fff;
    cursor: default;
  }
`;

export const Input = styled.input`
  min-height: 4.04vw;
  padding: 0.88vw 1.47vw;
  margin-bottom: 1.47vw;
  border: 0.15vw solid transparent;
  border-radius: 3.68vw;
  font-size: 1.32vw;
  text-align: left;
  width: 100%;
`;

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

export const CheckboxWrapper = styled.div`
  display: inline-block;
  cursor: pointer;
  align-self: center;
  position: absolute;
  top: 11px;
  left: 10px;
  opacity: ${props => (props.active ? 1 : 0)};
  transition: opacity 0.3s ease;
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
