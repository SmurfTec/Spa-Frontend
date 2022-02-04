import React from 'react';
import {
  Card,
  CardContent,
  Typography,
  CardActionArea,
  Box,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import spa1 from 'assets/spa1.svg';
import StarIcon from '@material-ui/icons/Star';

const styles = makeStyles((theme) => ({
  vendorCard: {
    borderRadius: 8,
    '& .MuiCardContent-root': {
      display: 'flex',
      flexDirection: 'column',
      rowGap: 15,
      '& svg': {
        color: theme.palette.warning.main,
      },
      '& span': {
        paddingTop: 2,
      },
      '& .MuiTypography-subtitle2': {
        fontWeight: 600,
        // height: 44,
      },
      // '& .title': {
      //   height: 60,
      // },
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
            <img src={spa1} width='40px' height='40px' alt='' />
            <Box display='flex' alignItems='center' sx={{ columnGap: 5 }}>
              <StarIcon fontSize='small' />
              <Typography variant='subtitle1' component='span'>
                4.5
              </Typography>
            </Box>
          </Box>
          <Box>
            <Typography variant='h5' className='title'>
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
