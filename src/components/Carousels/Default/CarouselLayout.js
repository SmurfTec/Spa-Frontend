import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { styles } from './CarouselProp';

function CarouselLayout({ children, deviceType, respSettings }) {
  const classes = styles();
  const settings = {
    swipeable: true,
    draggable: true,
    showDots: false,
    responsive: respSettings,
    ssr: false,
    infinite: false,
    autoPlay: false,
    keyBoardControl: true,
    containerClass: 'carousel-container',
    deviceType: deviceType,
    dotListClass: 'custom-dot-list-style',
    itemClass: 'carousel-item-padding-40-px',
  };

  return (
    <div className={classes.root}>
      <Carousel {...settings} responsive={respSettings}>
        {children}
      </Carousel>
    </div>
  );
}

export default CarouselLayout;
