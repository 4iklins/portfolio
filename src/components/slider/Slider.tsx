import { S } from './slider_styles';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { slides } from './slideData';
import Slide from './Slide';
import './slider_styles.css';

const items = slides.map(slide => (
  <Slide
    name={slide.name}
    text={slide.text}
  />
));

const Slider = () => {
  return (
    <S.Slider>
      <AliceCarousel
        mouseTracking
        items={items}
        controlsStrategy='alternate'
      />
    </S.Slider>
  );
};

export default Slider;
