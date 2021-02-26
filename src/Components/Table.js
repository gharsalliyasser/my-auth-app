import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MuiTable from '@material-ui/core/Table';
import TableContainer from '@material-ui/core/TableContainer';

const Table = (props) => {
  const { children } = props
  const classes = useStyles();

  return (
    <TableContainer style={{ width: '100%', marginTop: '24px' }}>
      <MuiTable 
        className={classes.root} 
        aria-label="simple table"
        style={{ width: 600, margin: 'auto' }}
      >
        { children }
      </MuiTable>
    </TableContainer>
  );
}

const useStyles = makeStyles({
  root: {
    borderColor: 'rgba(224, 224, 224, 1)',
    borderStyle: 'solid',
  },
});

export default Table