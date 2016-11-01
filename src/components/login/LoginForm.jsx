import React, { Component, PropTypes } from 'react'
import ReactDOM from 'react-dom'
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'
import { injectIntl, FormattedMessage, defineMessages, intlShape } from 'react-intl'

import { FormGroup, FormControl, ControlLabel, HelpBlock } from 'react-bootstrap'

import ErrorMessage from '../common/ErrorMessage'

const messages = defineMessages({
  usernameLabel: {
    id: 'login.username',
    description: 'User name label in login popup',
    defaultMessage: 'User name'
  },
  usernamePlaceholder: {
    id: 'login.username',
    description: 'User name input placeholder in login popup',
    defaultMessage: 'User name'
  },
  passwordLabel: {
    id: 'login.password',
    description: 'Password label in login popup',
    defaultMessage: 'Password'
  },
  passwordPlaceholder: {
    id: 'login.password',
    description: 'Password input placeholder in login popup',
    defaultMessage: 'Password'
  },
  loginButton: {
    id: 'login.loginButton',
    description: 'Login button text',
    defaultMessage: 'Log in'
  },
  clearButton: {
    id: 'login.clearButton',
    description: 'Clear values button text',
    defaultMessage: 'Clear'
  }
})

class LoginForm extends Component {
  constructor (props) {
    super(props)

    this.getValidationState = this.getValidationState.bind(this)
    this.renderField = this.renderField.bind(this)
  }

  componentWillReceiveProps (nextProps) {
    // this.username.focus()
    const username = this.username
    /* eslint-disable react/no-find-dom-node */
    ReactDOM.findDOMNode(username).focus()
    /* eslint-enable react/no-find-dom-node */
  }

  getValidationState ({ pristine, active, error }) {
    if (pristine) {
      return 'success'
    }
    if (error) {
      if (active) {
        return 'warning'
      }
      return 'error'
    }
    return 'success'
  }

  usernameNormalizer (value, previousValue) {
    // Prevent user form use whitespaces
    if (/\s+/.test(value)) {
      return previousValue
    }
    return value
  }

  renderField ({ name, placeholder, input, label, type,
    meta: { touched, pristine, error, valid, active } }) {
    return (
      <FormGroup validationState={this.getValidationState({ pristine, active, error })}>
        <ControlLabel>{label}</ControlLabel>
        <FormControl
          {...input}
          ref={c => { this[`${name}`] = c }}
          type={type}
          placeholder={placeholder || name}
        />
        {touched && error && !pristine && <HelpBlock>{error}</HelpBlock>}
      </FormGroup>
    )
  }

  render () {
    const formattedText = {
      usernamePlaceholder: this.props.intl.formatMessage(messages.usernameLabel),
      passwordPlaceholder: this.props.intl.formatMessage(messages.passwordLabel)
    }

    const { handleSubmit, reset, pristine, submitting, valid, errorMessage } = this.props
    return (
      <form onSubmit={handleSubmit(this.props.handleFormSubmit)}>
        {errorMessage ? <ErrorMessage error={errorMessage} /> : null}
        <Field
          name="username"
          label={
            <FormattedMessage {...messages.usernameLabel} />
          }
          placeholder={formattedText.usernamePlaceholder}
          component={this.renderField}
          type="text"
          normalize={this.usernameNormalizer}
        />
        <Field
          name="password"
          label={
            <FormattedMessage {...messages.passwordLabel} />
          }
          placeholder={formattedText.passwordPlaceholder}
          component={this.renderField}
          type="password"
        />
        <div>
          <button
            disabled={pristine || submitting || !valid}
            className="btn btn-primary"
          >
            <FormattedMessage {...messages.loginButton} />
          </button>
          <button
            type="button"
            disabled={pristine || submitting}
            onClick={reset}
            className="btn btn-warning pull-right"
          >
            <FormattedMessage {...messages.clearButton} />
          </button>
        </div>
      </form>
    )
  }
}

LoginForm.propTypes = {
  errorMessage: PropTypes.string,
  valid: PropTypes.bool,
  pristine: PropTypes.bool,
  submitting: PropTypes.bool,
  reset: PropTypes.func,
  handleSubmit: PropTypes.func,
  handleFormSubmit: PropTypes.func,
  intl: intlShape.isRequired
}

// TODO: must be defined and enforced.
const passwordConfig = {
  length: 6,
  regex: new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,}')
}
const usernameConfig = {
  length: 8
}

function validate ({ username, password }) {
  const errors = {}

  if (!username) {
    errors.username = 'Required'
  } else if (username.length < usernameConfig.length) {
    errors.username = `Username must be at least ${usernameConfig.length} characters`
  }

  if (!password) {
    errors.password = 'Required'
  } else if (password.length < passwordConfig.length) {
    errors.password = `Password must have al lest ${passwordConfig.length} characters`
  }
  return errors
}

const formOptions = {
  form: 'login',
  validate
}

function mapStateToProps (state) {
  return {
    errorMessage: state.auth.errorMessage
  }
}

export default connect(mapStateToProps)(reduxForm(formOptions)(injectIntl(LoginForm)))
