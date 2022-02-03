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
} from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import spa1 from 'assets/spa1.svg';
import StarIcon from '@material-ui/icons/Star';
// import styles from 'styles/commonStyles';
const styles = makeStyles((theme) => ({
  vendorCard: {
    borderRadius: 8,
    '& .MuiCardContent-root': {
      display: 'flex',
      flexDirection: 'column',
      rowGap: 10,
      '& svg': {
        color: theme.palette.warning.main,
      },
      '& span': {
        paddingTop: 2,
      },
      '& .MuiTypography-subtitle2': {
        fontWeight: 600,
      },
    },
  },
}));

const VendorCard = ({ title, description, image, rating, _id, history }) => {
  const classes = styles();

  return (
    <Card className={classes.vendorCard}>
      <CardActionArea>
        <CardContent>
          <Box
            display='flex'
            justifyContent='space-between'
            sx={{ columnGap: 15 }}
          >
            <img src={spa1} width='30px' height='30px' alt='' />
            {/* <Avatar /> */}
            <Box display='flex' alignItems='center' sx={{ columnGap: 5 }}>
              <StarIcon fontSize='small' />
              <Typography variant='subtitle1' component='span'>
                4.5
              </Typography>
            </Box>
          </Box>
          <Box>
            <Typography
              // className={classes.title}
              variant='h5'
            >
              {title}
            </Typography>
            <Typography variant='subtitle2' color='textSecondary'>
              {description}
            </Typography>
          </Box>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default VendorCard;
