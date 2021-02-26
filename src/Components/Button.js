import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles';
import MuiButton from '@material-ui/core/Button';

const Button = (props) => {
  const { 
    variant,
    size, 
    onClick,
    className,
    disableRipple,
    type,
    children
  } = props

  const classes = useStyles()
  
  return (
    <MuiButton
      variant={variant} //contained
      size={size}
      onClick={onClick}
      className={`${classes.primaryButton} ${className}`}
      disableRipple={disableRipple}
      type={type}
    >
      {children}
    </MuiButton>
  )
}

const useStyles = makeStyles(() => ({
  button: {
    backgroundColor: '#6d6d6d',
    borderRadius: '8px',
    margin: '8px 0',
    '&:hover': {
      backgroundColor: '#2F77D6'
    }
  },
}))

Button.defaultProps = {
  variant: 'outlined',
  className: '',
  size: 'medium',
  disableRipple: false,
  disabled: false,
  type: 'submit',
  onClick: () => {}
}

Button.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
  onClick: PropTypes.func,
  variant: PropTypes.string,
  className: PropTypes.string,
  size: PropTypes.string,
  disabled: PropTypes.bool,
  disableRipple: PropTypes.bool,
  type: PropTypes.string
}


export default Button