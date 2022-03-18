import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Card,
  CardContent,
  Typography,
  CardMedia,
  Button,
  CardActionArea,
  Box,
  IconButton,
} from '@material-ui/core';
import { Rating } from '@material-ui/lab';

import Favorite from '@material-ui/icons/Favorite';
import UnFavorite from '@material-ui/icons/FavoriteBorder';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import SendIcon from '@material-ui/icons/Send';

import styles from './CardProp';
import useStyles from 'styles/commonStyles';

import prodImg from 'assets/prod3.jpg';

const ProductCard = (props) => {
  const classes = styles();
  const classes_g = useStyles();
  const {
    isService,
    isPromo,
    name,
    description,
    images,
    rating,
    isFavourite,
    _id,
    price,
    dummyId,
    numReviews,
    info,
    sale,
    showVendor,
    discount,
  } = props;

  const navigate = useNavigate();

  const handleClick = () => {
    // navigate(`/products&services/${type}/${_id}`);
    // navigate(`/products&services/${type}/${dummyId}`);
  };

  return (
    <Card className={classes.productCard}>
      <CardActionArea onClick={handleClick}>
        <CardMedia className={classes.cardMedia} image={prodImg} />
      </CardActionArea>

      <CardContent>
        <div className={classes.dispFlex}>
          <Typography variant='body2' className={classes.title}>
            {name}
          </Typography>
        </div>
        <Box display='flex' flexDirection='column' gridGap={2}>
          <div className={classes.dispFlex}>
            <Rating value={rating} readOnly size='small' />
            <Typography variant='body2'>({numReviews})</Typography>
          </div>
          {!isService ? (
            sale ? (
              <div className={classes.dispFlex}>
                <Typography
                  variant='body2'
                  color='textSecondary'
                  style={{ textDecoration: 'line-through' }}
                  className={classes_g.fontWeight600}
                >
                  ${price}
                </Typography>
                <Typography
                  variant='subtitle2'
                  className={classes_g.fontWeight600}
                >
                  - ${price - props.discount}
                </Typography>
              </div>
            ) : (
              <Box display='flex' gridGap={10} alignItems='center'>
                <Typography
                  variant='subtitle1'
                  className={classes_g.fontWeight600}
                >
                  ${price}
                </Typography>
                <Typography variant='caption'>
                  {'  '} ({info})
                </Typography>
              </Box>
            )
          ) : sale ? (
            <>
              <Typography variant='caption'>{info}</Typography>
              <div className={classes.servPricePromo}>
                <Typography
                  variant='subtitle2'
                  className={classes_g.fontWeight600}
                >
                  From <span>${price}</span> - ${price - discount}
                </Typography>
              </div>
            </>
          ) : (
            <>
              <Typography variant='caption'>{info}</Typography>
              <Typography
                variant='subtitle2'
                className={classes_g.fontWeight600}
              >
                From ${price}
              </Typography>
            </>
          )}
          {showVendor && (
            <Typography variant='caption'>
              {isService ? 'Service from ' : 'Product from '}{' '}
              {props?.vendor?.fullName}
            </Typography>
          )}
        </Box>

        <Box component='span' sx={{ textAlign: 'center', marginBlock: 5 }}>
          {!isService ? (
            <Button
              variant='contained'
              color='secondary'
              endIcon={<ShoppingCartIcon />}
              size='small'
            >
              ADD TO CART
            </Button>
          ) : (
            <Button
              color='primary'
              endIcon={<SendIcon />}
              size='small'
              style={{ width: 130 }}
            >
              BOOK
            </Button>
          )}
        </Box>
        <IconButton className={classes.favourite}>
          {isFavourite ? <Favorite /> : <UnFavorite />}
        </IconButton>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
