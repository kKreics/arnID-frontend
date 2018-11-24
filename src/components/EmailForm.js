import React from 'react';
import PropTypes from 'prop-types';
import InputWithIcon from './InputWithIcon';

const EmailForm = ({identity = { email: '', passport: ''}, onChange, onSave}) => {
  return (
    <form className="email-form">
      <InputWithIcon icon="user"
                      inputOptions={{ type: 'text', value: identity.email, required: true, name: 'email' }}
                      onChange={onChange}  />
      <InputWithIcon icon="key"
                      inputOptions={{ type: 'password', value: identity.password, required: true, name: 'password' }}
                      onChange={onChange}  />
      <div className="bottom-button">
        <input  className="btn btn-primary"
                type="submit"
                onClick={onSave}
                value="Continue"
        />
      </div>
    </form>
  );
};

EmailForm.propTypes = {
  identity: PropTypes.object.isRequired,
  onSave: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default EmailForm;
