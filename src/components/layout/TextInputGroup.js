import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const TextInputGroup = ({
  label,
  name,
  value,
  type,
  onChange,
  error
}) => {
  return (
    <div className="form-group">
      <label htmlFor={ name }>{ label }</label>
      <input 
        name={ name }
        className={ classnames('form-control form-control-lg', {
          'is-invalid': error
        }) }
        type={ type } 
        value={ value }
        onChange={ onChange }
      />
      { error && (
        <div className="invalid-feedback">{ error }</div>
      ) }
    </div>
  )
}

TextInputGroup.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  error: PropTypes.string.isRequired,
}

TextInputGroup.defaultProps = {
  type: 'text',
}

export default TextInputGroup;
