import React from 'react';
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
} from '@material-ui/core';
import prod1 from 'assets/prod1.jpg';
import spa1 from 'assets/spa1.svg';
import Favorite from '@material-ui/icons/Favorite';
import UnFavorite from '@material-ui/icons/FavoriteBorder';
import { Rating } from '@material-ui/lab';
import styles from './ProductProp';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

const ProductCard = ({
  title,
  description,
  image,
  rating,
  _id,
  isFavourite,
  price,
  promoPrice,
  isPromo,
}) => {
  const classes = styles();
  // console.log('promoPrice', promoPrice);
  return (
    <Card className={classes.productCard}>
      <CardMedia className={classes.cardMedia} image={prod1} />
      <CardContent>
        <Typography variant='subtitle2'>{title}</Typography>
        <div>
          <div className={classes.dispFlex}>
            <Rating value={4} readOnly size='small' />
            <Typography variant='body2'>({rating})</Typography>
          </div>

          <div className={classes.dispFlex}>
            {isPromo ? (
              <>
                <Typography
                  variant='body1'
                  style={{ textDecoration: 'line-through' }}
                >
                  {price}
                </Typography>
                <Typography variant='h5'>- ${promoPrice}</Typography>
              </>
            ) : (
              <>
                <Typography variant='h5'>{price}</Typography>
                <Typography variant='body2'>{'  '} (100ml)</Typography>
              </>
            )}
          </div>
          <Typography variant='body2'>{description}</Typography>
        </div>

        <Box sx={{ textAlign: 'center' }}>
          <Button
            variant='contained'
            color='secondary'
            endIcon={<ShoppingCartIcon />}
          >
            ADD TO CART
          </Button>
        </Box>
      </CardContent>
      <IconButton className={classes.favourite}>
        {isFavourite ? <Favorite /> : <UnFavorite />}
      </IconButton>
    </Card>
  );
};

export default ProductCard;
