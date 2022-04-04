import React from 'react';
import { Box, Button, Container, Typography } from '@material-ui/core';
import styles from './Styles';
import { Link } from 'react-router-dom';

const About = () => {
  const classes = styles();

  return (
    <Container className={classes.root}>
      <Box>
        <Typography variant='h6'>About Royal Thai Spa</Typography>
      </Box>
      <Box>
        <Typography variant='body1'>Who we are - our philosophy</Typography>
      </Box>
      <Box>
        <Typography variant='body2'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut lacus
          mauris. In quis ornare nibh, ac blandit diam. Integer tempor non
          lectus dictum varius. Phasellus ultricies efficitur mauris non
          porttitor. In nisl elit, faucibus at aliquam eget, euismod at ipsum.
          Cras iaculis quis eros dignissim consectetur. Sed hendrerit arcu vitae
          laoreet efficitur. In ultrices, risus at luctus pulvinar, mauris dolor
          dictum turpis, et hendrerit neque magna in lorem. Nullam vel sapien
          vel odio faucibus interdum. Etiam nec diam eget dolor fermentum
          efficitur vel ac diam. Interdum et malesuada fames ac ante ipsum
          primis in faucibus. Curabitur dictum, ex et rhoncus ornare, nulla urna
          scelerisque justo, vitae tincidunt quam est in ligula. Proin varius
          placerat mauris, lacinia vestibulum lectus suscipit sit amet. Duis in
          malesuada eros, sed scelerisque quam. Praesent placerat, nulla ut
          condimentum fringilla, dui odio mollis ipsum, sit amet luctus ipsum
          nisl quis felis. Sed imperdiet vitae nunc nec imperdiet. Morbi at nunc
          sed lorem lacinia tempus sit amet venenatis tellus. Maecenas et
          pulvinar elit, ut vehicula libero. Praesent diam ex, vulputate a
          condimentum ac, tempor at enim. Morbi at luctus eros. Ut pellentesque
          eros et ante facilisis, non accumsan leo efficitur. Maecenas est
          lacus, laoreet et dictum sit amet, consequat et sapien. Ut
          ullamcorper, metus et iaculis fermentum, orci sapien dignissim est, at
          tincidunt turpis felis sit amet risus. Morbi tristique turpis mauris,
          eu tempus tellus tincidunt eget. Morbi luctus molestie nisl sed
          consectetur. Pellentesque varius vulputate eleifend. Suspendisse
          eleifend quam nisi, non varius est consectetur eu. Sed in ligula
          elementum, mattis turpis non, tincidunt ipsum. Donec tempus ultrices
          velit in accumsan.
        </Typography>
      </Box>
      <Box>
        <Typography variant='body1'>
          How it started - a bit of history/backstory
        </Typography>
      </Box>
      <Box>
        <Typography variant='body2'>
          Cras felis massa, bibendum ut pharetra sit amet, consectetur vel odio.
          Nunc orci ipsum, molestie in bibendum elementum, ornare id leo. Nam
          sit amet dui sit amet tortor venenatis dignissim eget pulvinar sapien.
          Etiam pharetra congue lorem, fringilla porta nisl aliquam nec.
          Pellentesque blandit magna a luctus auctor. Aliquam erat volutpat.
          Donec vestibulum sollicitudin nulla auctor ullamcorper. Suspendisse in
          metus suscipit, facilisis sem nec, varius ex. Donec rhoncus iaculis
          elit sit amet consequat. Proin elementum placerat mollis. Proin
          ullamcorper rhoncus blandit.
          <br /> Sed pharetra lacus at orci pretium, vitae ullamcorper tellus
          faucibus. Vivamus nibh diam, venenatis at velit ut, vestibulum
          volutpat felis. Suspendisse ut tortor lobortis, maximus massa eget,
          scelerisque eros. Nam felis arcu, hendrerit sit amet lacus semper,
          sollicitudin sagittis mi. Donec vitae malesuada velit. Sed auctor,
          sapien at consequat lacinia, libero ligula efficitur enim, et auctor
          purus tellus in quam. Aliquam fringilla eros quis lectus tempor, at
          pulvinar ipsum finibus. Sed a varius lacus. Morbi pulvinar ipsum et
          ultrices semper. Class aptent taciti sociosqu ad litora torquent per
          conubia nostra, per inceptos himenaeos. Donec bibendum, ante id
          faucibus fermentum, ex mauris placerat arcu, id fermentum ligula arcu
          vel eros. Sed ac ipsum vel nisi porttitor imperdiet non in nibh.
          Mauris eget commodo turpis. Integer nec lorem porttitor, sollicitudin
          eros quis, porttitor tellus. Aliquam mollis ex in ligula hendrerit
          pellentesque. Cras sed interdum ipsum.
        </Typography>
      </Box>
      <Box>
        <Typography variant='body1'>What we do - our approach</Typography>
      </Box>
      <Box>
        <Typography variant='body2'>
          Pellentesque convallis tristique mi, id tristique arcu semper in.
          Fusce massa ipsum, hendrerit sit amet urna in, tincidunt viverra ex.
          Nullam rutrum sodales sem, ac porta elit. In dapibus sapien felis, nec
          gravida odio gravida quis. Donec volutpat sem vitae lacinia maximus.
          Phasellus odio leo, facilisis nec feugiat non, porttitor eu turpis.
          Sed finibus eros vel ante fringilla, ut posuere ipsum vestibulum.
          Proin interdum, justo sed porta ullamcorper, lacus turpis lacinia
          mauris, ac varius est lacus in ex. Fusce accumsan id tellus vel
          consequat. Vestibulum vulputate blandit mauris, vitae interdum magna
          malesuada vel.
        </Typography>
      </Box>
      <Box>
        <Button
          variant='standard'
          style={{ textDecoration: 'underline', color: '#6FB462' }}
          component={Link}
          to='/working'
        >
          Join us today - here’s how it works
        </Button>
      </Box>
    </Container>
  );
};

export default About;
