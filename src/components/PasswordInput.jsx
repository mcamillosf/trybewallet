import React, { Component } from 'react';
import PropTypes from 'prop-types';

class PasswordInput extends Component {
  render() {
    const { func, pass } = this.props;

    return (
      <div className="password-input">
        <label htmlFor="password">
          <input
            type="password"
            id="password"
            className="pass-inp"
            name="password"
            placeholder="PASSWORD"
            value={ pass }
            data-testid="password-input"
            onChange={ func }
          />
        </label>
      </div>
    );
  }
}

PasswordInput.propTypes = {
  func: PropTypes.func,
  pass: PropTypes.string,
}.isRequired;

export default PasswordInput;
