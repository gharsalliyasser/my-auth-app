import React,  { useState, useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import { register } from '../actions/auth'
import { clearMessage } from '../actions/message'
import { makeStyles } from '@material-ui/core/styles';
import MuiCard from '@material-ui/core/Card';
import FormControl from '@material-ui/core/FormControl' 
import Input from './Input'
import Button from './Button'
import SocialLinks from './SocialLinks'

const RegisterCard = () => {
  const dispatch = useDispatch()

  const [ email, setEmail ] = useState('')
  const [ password, setPassword ] = useState('')
  const { message } = useSelector(state => state.message);
  const [ successful, setSuccessful ] = useState(false)

  useEffect(() => {
    dispatch(clearMessage())
  },[])

  const handleSubmit = (event) => {
    event.preventDefault()
    setSuccessful(false)

    const email = event.target[0].value
    const password = event.target[2].value
    dispatch(register(email, password))
      .then(() => {
        setSuccessful(true)
      })
      .catch (() => {
        setSuccessful(false)
      })
  }

  // const handleLogin = (e) => {
  //   return <Redirect to="/login" />
  // }

  const classes = useStyles()

  return (
    <React.Fragment>
      <MuiCard className={classes.card}>
        <div className={classes.header}>
                    <p>REGISTRATION</p>
        </div>
        <form className={classes.formInputs} onSubmit={handleSubmit}>
          <FormControl>
            <Input 
              type="email"
              name="email" 
              label="email" 
              value={email} 
              onChange={e => setEmail(e.target.value)}
            />
            <Input
              type="password"
              name="password" 
              label="password" 
              value={password} 
              onChange={e => setPassword(e.target.value)}
            />
            <Button type="submit">Submit</Button>
              <p>or continue with these social profile</p>
            <SocialLinks />
            <p>Already a member?
              <Link
                to="/login"
                className={classes.link}
              > 
                Login
              </Link>
            </p>
          </FormControl>
        </form>
      </MuiCard>
      {message && 
        <div className={ successful ? classes.success : classes.alert}>
          {message}
        </div>
      }
    </React.Fragment>
  )
}

const useStyles = makeStyles(() => ({
  card: {
    border: '2px solid #BDBDBD',
    borderRadius: '8px',
    padding: '24px',
    margin: '24px',
    minWidth: '300px'
  },
  header: {
    textAlign: 'center',
    '& h3': {
      fontSize: '16px',
    },
    '& p': {
      fontSize: '12px',
    }
  },
  formInputs: {
    display: 'grid',
    '& p': {
      fontSize: '10px',
      color: '#BDBDBD'
    }
  },
/*   icon: {
    width: '16px',
    filter: 'opacity(0.2) drop-shadow(0 0 0 black)',
  }, */
  link: {
    color: '#2F80ED',
    cursor: 'pointer'
  },
  success: {
    color: 'white',
    fontWeight: 500,
    textTransform: 'uppercase',
    backgroundColor: '#379634',
    padding: '11px',
    width: '40%',
    margin: 'auto',
    borderRadius: '8px',
    boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)'
  },
  alert: {
    color: 'white',
    fontWeight: 500,
    textTransform: 'uppercase',
    backgroundColor: 'red',
    padding: '11px',
    width: '40%',
    margin: 'auto',
    borderRadius: '8px',
    boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)'
  }
}));

export default RegisterCard

