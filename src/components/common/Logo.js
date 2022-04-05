import { Typography } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getBanners } from 'store/slices/banners/extraReducers';

function Logo({ w, h, comp }) {
  const { banners } = useSelector((st) => st.banners);
  const [logo, setLogo] = useState('');

  const dispatch = useDispatch();
  useEffect(() => {
    if (!banners) return dispatch(getBanners());

    let el = banners.find((el) => el.name === 'logo');
    console.log('el', el);
    setLogo(el);
  }, [banners]);

  return (
    <div id='logo'>
      <Link
        component={Link}
        to='/'
        style={{
          display: 'flex',
          gap: 10,
          alignItems: 'center',
        }}
      >
        {logo && (
          <img
            style={{
              width: 40,
              height: 40,
              borderRadius: '50%',
            }}
            src={logo?.images?.[0]?.url}
            alt='logo'
          />
        )}
        <Typography variant='h5'>
          RoyalThai<span>Spa</span>
        </Typography>
        {/* <img src={square} width={w} height={h} alt='LotPot Auction' /> */}
      </Link>
    </div>
  );
}

export default Logo;
