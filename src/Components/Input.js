import React from 'react'
import PropTypes from 'prop-types'
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles'

const Input = (props) => {
  const {
    id,
    className,
    value,
    name,
    variant,
    placeholder, 
    label, 
    helperText,
    error,
    onChange,
    onBlur,
    type,
    multiline,
    inputProps
  } = props 
  
  const classes = useStyles();

  return (
    <TextField
      id={id}
      className={`${classes.input} ${className}`}
      value={value}
      name={name}
      variant={variant}
      placeholder={placeholder}
      label={label}
      helperText={helperText || ''}
      error={error}
      onChange={onChange}
      onBlur={onBlur}
      type={type}
      multiline={multiline}
      InputProps={inputProps}
    />
  )
}

const useStyles = makeStyles(() => ({
  input: {
    margin: '8px 0',
    paddingLeft: '4px',
    borderRadius: '8px',
    "&::placeholder": {
      color: "gray",
      fontSize: '8px'
    },
  },
}));

Input.defaultProps = {
  id: '',
  className: '',
  value: '',
  variant: 'outlined',
  label: '',
  helperText: '',
  error: false,
  onBlur: () => {},
  type: 'text',
  multiline: false,
  placeholder: '',
  inputProps: {}
}

Input.propTypes = {
  id: PropTypes.string,
  className: PropTypes.string,
  value: PropTypes.string,
  name: PropTypes.string.isRequired,
  label: PropTypes.string, 
  helperText: PropTypes.string,
  error: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func,
  type: PropTypes.string,
  multiple: PropTypes.bool,
  placeholder: PropTypes.string,
  inputProps: PropTypes.shape({
    startAdornment: PropTypes.node,
  }),
}

export default Input