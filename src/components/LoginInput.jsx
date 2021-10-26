import React, { Component } from 'react';
import PropTypes from 'prop-types';

class LoginInput extends Component {
  render() {
    const { func, login } = this.props;

    return (
      <div className="login-input">
        <label htmlFor="login">
          <input
            type="text"
            id="login"
            className="log-inp"
            placeholder="LOGIN"
            name="email"
            value={ login }
            data-testid="email-input"
            onChange={ func }
          />
        </label>
      </div>
    );
  }
}

LoginInput.propTypes = {
  func: PropTypes.func,
  login: PropTypes.string,
}.isRequired;

export default LoginInput;
