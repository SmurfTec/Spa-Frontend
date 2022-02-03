import { Typography } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';

function Logo({ w, h, comp }) {
  return (
    <div id='logo'>
      <Link component={Link} to='/'>
        <Typography variant='h5'>
          RoyalThai<span>Spa</span>
        </Typography>
        {/* <img src={square} width={w} height={h} alt='LotPot Auction' /> */}
      </Link>
    </div>
  );
}

export default Logo;
