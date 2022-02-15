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
import useStyles from 'styles/commonStyles';

const ProductCard = (props) => {
  const classes = styles();
  const classes_g = useStyles();
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
      </CardActionArea>

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
                  - ${props.promoPrice}
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
                <Typography variant='caption'>{'  '} (100ml)</Typography>
              </Box>
            )
          ) : isPromo ? (
            <>
              <Typography variant='caption'>{props.oneHourRate}</Typography>
              <div className={classes.servPricePromo}>
                <Typography
                  variant='subtitle2'
                  className={classes_g.fontWeight600}
                >
                  From <span>${price}</span> - ${props.promoPrice}
                </Typography>
              </div>
            </>
          ) : (
            <>
              <Typography variant='caption'>{props.oneHourRate}</Typography>
              <Typography
                variant='subtitle2'
                className={classes_g.fontWeight600}
              >
                From ${price}
              </Typography>
            </>
          )}
          {showDesc && <Typography variant='caption'>{description}</Typography>}
        </Box>

        <Box mb={1} component='span' sx={{ textAlign: 'center' }}>
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
        <IconButton className={classes.favourite}>
          {isFavourite ? <Favorite /> : <UnFavorite />}
        </IconButton>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
