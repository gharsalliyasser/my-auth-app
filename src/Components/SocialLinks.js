import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
//import githubIcon from '../images/GitHub.svg'
import facebookIcon from '../images/Facebook.svg'
import twitterIcon from '../images/Twitter.svg'
import googleIcon from '../images/Google.svg'

const useStyles = makeStyles(() => ({
  list: {
    display: 'flex',
    paddingLeft: '0',
    margin: '0',
    listStyleType: 'none',
    justifyContent: 'center',
    '& li': {
      margin: '8px',
      cursor: 'pointer',
    },
  }
}))

const SocialLinks = () => {
  const classes = useStyles()
  const icons = [facebookIcon, twitterIcon, googleIcon]

  return (
    <ul className={classes.list}>
      {icons.map((icon, index) => {
        return (
          <li key={index}>
            <img src={icon} alt="login"/>
          </li>
        ) 
      })}
    </ul>
  )
}

export default SocialLinks