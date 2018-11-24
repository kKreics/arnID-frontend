import React from 'react';
import PropTypes from 'prop-types';

const InputWithIcon = ({inputOptions = { value: '', type: 'text', name: '', required: false }, onChange, icon}) => {
  return (
    <div className="input-with-icon">
      <input type={inputOptions.type} name={inputOptions.name} required={inputOptions.required} defaultValue={inputOptions.value} onChange={onChange} />
      <i className={`fas fa-${icon}`}></i>
    </div>
  );
};

InputWithIcon.propTypes = {
  icon: PropTypes.string.isRequired,
  inputOptions: PropTypes.object.isRequired
};

export default InputWithIcon;
