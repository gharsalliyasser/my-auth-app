import React, { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import Table from './Table'
import Input from './Input'
import Button from './Button'
import { updateUser } from '../actions/auth'

const EditTable = () => {
  
  const [ email, setEmail] = useState('')
  const [ password, setPassword] = useState('')
  const params = useParams('')

  console.log(params)
  //const [ message, setMessage ] = useState('')
  
  const dispatch = useDispatch()
  const message = useSelector(state => state.message)
  const classes = useStyles();

  console.log('M',message)

  const handleSubmit = (e) => {
    e.preventDefault()
    const email = e.target[0].value
    const password = e.target[2].value
    dispatch(updateUser(email, password))
  }

  return (
    <React.Fragment>
      <div className={classes.arrow}>
      <Link to="/user" className={classes.backIcon}>
        Back
      </Link>
      </div>
      <form onSubmit={handleSubmit}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell className={classes.header}>Change Info</TableCell>
              <TableCell align="center"></TableCell>
              <TableCell align="right"></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>CHANGE PHOTO</TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <Input
                  name="email"
                  value={email}
                  label="email"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <Input
                  name="password"
                  value={password}
                  label="password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableBody>
        </Table>
        <Button className={classes.button} type="submit">Save</Button>
      </form>
      {message && (
        <div>
          {message.message}
        </div>
      )}
    </React.Fragment>
  )
}

const useStyles = makeStyles({
  arrow: {
    display: 'flex',
    justifyContent: 'end',
    alignItems: 'center'
  },
  button: {
    margin: '16px',
    backgroundColor: '#023e8a',
    color: 'white',
    '&:hover': {
      backgroundColor: '#03045e'
    }
  },
  header: {
    fontSize: '24px'
  },
  field: {
    fontSize: '13px',
    color: '#BDBDBD',
    fontWeight: '500'
  },
  backIcon: {
    display: 'flex',
    textDecoration: 'none',
    margin: '0 60px',
    color: 'black'
  }
});

export default EditTable