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

  ${props => props.theme.media.phone`
    width: 100%;
    background-image: initial;
  `}
`;

export const Title = styled.h3`
  text-align: center;
  font-family: Shnobel, Helvetica Neue, Arial, sans-serif;
  font-size: 50px;
  margin: 0;

  ${props => props.theme.media.phone`
    font-size: 27px;
    margin-bottom: 25px;
  `}
`;

export const Label = styled.label`
  font-size: 18px;
  margin-bottom: 10px;
  display: block;
  position: relative;

  ${props => props.theme.media.phone`
    font-size: 16px;
    display: inline-block;
    margin-bottom: 20px;
  `}
`;
export const Fieldset = styled.fieldset`
  border: none;
  outline: none;
  position: relative;
  padding-left: 40px;
  margin-bottom: 20px;
    margin: 0;
    padding: 0;
  ${props => props.theme.media.phone`
    padding-left: 0;
    text-align: center;
    margin-bottom: 30px;
  `}

  & > ${Label} {
    opacity: ${props => (!props.disable ? 1 : 0.5)};
  }

  &:last-child {
    margin-bottom: 38px;
  }
  & > ${Label}:before {
    opacity: ${props => (!props.disable ? 1 : 0)};
    transition: opacity 0.3s ease;
    position: absolute;
    top: 10px;
    left: 0;
    font-family: Shnobel, Helvetica Neue, Arial, sans-serif;
    font-size: 44px;
    counter-increment: fieldset;
    content: counter(fieldset) '. ';

    ${props => props.theme.media.phone`
      font-size: 16px;
      font-family: Open Sans, Helvetica Neue, Arial, sans-serif;
      left: -19px;
      top: 0;
    `}
  }
`;

export const SendButton = styled.button`
  border: none;
  outline: none;
  margin: 0 auto;
  display: block;

  padding: 11px 70px 17px;
  font-size: 40px;
  border-radius: 25px;
  height: 70px;

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

  ${props => props.theme.media.phone`
    padding: 9px 45px 17px;
    font-size: 30px;
    height: 60px;
    width: 100%;
    border-radius: 30px;
    `}
`;

export const Input = styled.input`
  /* padding: 0.88vw 1.47vw; */
  padding: 10px 25px;
  border: 0.15vw solid transparent;

  text-align: left;
  width: 100%;
  max-width: 302px;
  height: 50px;
  line-height: 50px;
  font-size: 20px;
  border-radius: 25px;

  ${props => props.theme.media.phone`

`}
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

  ${props => props.theme.media.phone`
top: 2px;
    left: -25px;
`}
`;
