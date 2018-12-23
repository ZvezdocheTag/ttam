import React from 'react';
import PropTypes from 'prop-types';
import { HiddenInput, FakeInput, Check, CheckedSignWrapper } from './styles';

class CheckboxDefault extends React.PureComponent {
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

CheckboxDefault.propTypes = {
  disable: PropTypes.bool
};

export default CheckboxDefault;
