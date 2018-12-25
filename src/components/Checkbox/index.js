import React from 'react';
import PropTypes from 'prop-types';
import { HiddenInput, FakeInput, Check, CheckedSignWrapper } from './styles';

class Checkbox extends React.PureComponent {
  state = {
    isChecked: true
  };

  render() {
    const { isChecked } = this.state;
    return (
      <>
        <HiddenInput type="checkbox" checked={isChecked} readOnly />
        <FakeInput disable={isChecked} checked={isChecked}>
          <CheckedSignWrapper checked={isChecked}>
            <Check />
          </CheckedSignWrapper>
        </FakeInput>
      </>
    );
  }
}

Checkbox.propTypes = {
  disable: PropTypes.bool
};

export default Checkbox;
