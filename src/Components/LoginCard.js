import React, { useState, useEffect } from 'react'
import { Link, Redirect } from "react-router-dom";
import history from "../history";
import { useDispatch, useSelector } from 'react-redux'
import { login, logout } from '../actions/auth'
import { clearMessage } from '../actions/message'
import { makeStyles } from '@material-ui/core/styles';
import MuiCard from '@material-ui/core/Card';
import FormControl from '@material-ui/core/FormControl'
import Input from './Input'
import Button from './Button'
import SocialLinks from './SocialLinks'

const Login = () => {

  const [ email, setEmail ] = useState('')
  const [ password, setPassword ] = useState('')
  const [ loading, setLoading ] = useState(false)
  const dispatch = useDispatch()

  const announcement = useSelector((state) => state.message)

  const classes = useStyles()

  useEffect(() => {
    dispatch(logout())
    dispatch(clearMessage())
  }, [dispatch])

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)
    
    dispatch(login(email, password))
    .then(() => {
      history.push("/user");
      window.location.reload()
      setLoading(false)
    })
    .catch((e) => {
      setLoading(false)
    })
  }

  if(loading) {
    return <p>Loading</p>
  }

  return (
    <React.Fragment>
      <MuiCard className={classes.card}>  
        <form className={classes.formInputs} onSubmit={handleSubmit}>
          <FormControl>
            <Input
              id="email"
              type="email"
              name="email" 
              label="email" 
              value={email} 
              onChange={e => setEmail(e.target.value)}
            />
            <Input
              id="password"
              type="password"
              name="password" 
              label="password" 
              value={password} 
              onChange={e => setPassword(e.target.value)}
            />
            <Button type="submit">Submit</Button>
              <p>or continue with these social profile</p>
            <SocialLinks />
            <p>Don't have an account yet? 
              <Link
                to="/"
                className={classes.link}
              > 
                Register
              </Link>
            </p>
          </FormControl>
        </form>
      </MuiCard>
      {announcement && 
        <div className={announcement ? classes.alert : classes.success}>
          {announcement.message}
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
  formInputs: {
    display: 'grid',
    '& p': {
      fontSize: '10px',
      color: '#BDBDBD'
    }
  },
  link: {
    color: '#2F80ED',
    cursor: 'pointer'
  },
  alert: {
    color: 'red',
    fontWeight: 500,
    textTransform: 'uppercase',
  },
}));

export default Login