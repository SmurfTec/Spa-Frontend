import React from 'react';
import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@material-ui/core';
import globalStyles from 'styles/commonStyles';

const Cart = () => {
  const classes_g = globalStyles();
  const type = 'product';

  return (
    <div className={classes_g.componentSectionGap}>
      <Typography variant='h4'>Cart</Typography>

      <TableContainer>
        <Table stickyHeader>
          <TableHead>
            <TableRow>
              <TableCell></TableCell>
              <TableCell style={{ minWidth: 300 }}>
                {type === 'product' ? 'Product' : 'Service'}
              </TableCell>
              <TableCell style={{ minWidth: 180 }}>Price</TableCell>
              <TableCell align='center'>Date</TableCell>
              <TableCell align='center'>Guests</TableCell>
              <TableCell align='center'>Subtotal</TableCell>
            </TableRow>
          </TableHead>
          <TableBody></TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Cart;
