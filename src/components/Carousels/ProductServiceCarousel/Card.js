import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Card,
  CardContent,
  Typography,
  CardActions,
  CardMedia,
  Button,
  CardActionArea,
  Box,
  Avatar,
  IconButton,
  Tooltip,
} from '@material-ui/core';
import prod1 from 'assets/prod1.jpg';
import serv2 from 'assets/prod3.jpg';
// import spa1 from 'assets/spa1.svg';
import Favorite from '@material-ui/icons/Favorite';
import UnFavorite from '@material-ui/icons/FavoriteBorder';
import { Rating } from '@material-ui/lab';
import styles from './CardProp';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import SendIcon from '@material-ui/icons/Send';
import clsx from 'clsx';

const ProductCard = (props) => {
  const classes = styles();
  const {
    type,
    isPromo,
    title,
    description,
    image,
    rating,
    isFavourite,
    _id,
    showDesc,
    price,
    dummyId,
  } = props;

  const navigate = useNavigate();

  const handleClick = () => {
    // navigate(`/products&services/${type}/${_id}`);
    navigate(`/products&services/${type}/${dummyId}`);
  };

  return (
    <Card className={classes.productCard}>
      <CardActionArea onClick={handleClick}>
        <CardMedia
          className={classes.cardMedia}
          image={type === 'product' ? prod1 : serv2}
        />
        <CardContent>
          <div className={classes.dispFlex}>
            <Typography variant='body2'>{props.title}</Typography>
          </div>
          <Box display='flex' flexDirection='column' gridGap={2}>
            <div className={classes.dispFlex}>
              <Rating value={4} readOnly size='small' />
              <Typography variant='body2'>({props.rating})</Typography>
            </div>
            {type === 'product' ? (
              isPromo ? (
                <div className={classes.dispFlex}>
                  <Typography
                    variant='body1'
                    color='textSecondary'
                    style={{ textDecoration: 'line-through' }}
                  >
                    {price}
                  </Typography>
                  <Typography variant='subtitle1'>
                    - ${props.promoPrice}
                  </Typography>
                </div>
              ) : (
                <Box display='flex' gridGap={10}>
                  <Typography variant='subtitle1'>${price}</Typography>
                  <Typography variant='body2'>{'  '} (100ml)</Typography>
                </Box>
              )
            ) : isPromo ? (
              <>
                <Typography variant='body2'>{props.oneHourRate}</Typography>
                <div className={classes.servPricePromo}>
                  <Typography variant='subtitle1'>
                    From <span>${price}</span> - ${props.promoPrice}
                  </Typography>
                </div>
              </>
            ) : (
              <>
                <Typography variant='body2'>{props.oneHourRate}</Typography>
                <Typography variant='subtitle1'>From {price}</Typography>
              </>
            )}
            {showDesc && (
              <Typography variant='caption'>{description}</Typography>
            )}
          </Box>

          <Box component='span' sx={{ textAlign: 'center' }}>
            {type === 'product' ? (
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
        </CardContent>
      </CardActionArea>
      <IconButton className={classes.favourite}>
        {isFavourite ? <Favorite /> : <UnFavorite />}
      </IconButton>
    </Card>
  );
};

export default ProductCard;
