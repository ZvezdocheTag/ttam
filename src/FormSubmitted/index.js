import React from 'react';
import * as Css from './styles';

const FormSubmitted = () => {
  return (
    <>
      <Css.Wrapper>
        <Css.MessagesWrapper>
          <Css.Message through={true}>Выборы</Css.Message>
          <br />
          <Css.Message>Путешествие</Css.Message>
          <br />
          <Css.Message size="big">
            <strong>близко!</strong>
          </Css.Message>
        </Css.MessagesWrapper>
      </Css.Wrapper>
      <Css.FooterSand />
    </>
  );
};

export default FormSubmitted;
