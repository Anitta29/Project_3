import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/custom-animations/cube-animation.css';



const slider = (
  <AwesomeSlider animation="cubeAnimation">
    <div data-src="1.jpg" />
    <div data-src="2.jpg" />
    <div data-src="3.jpg" />
  </AwesomeSlider>
);

function MyCarousel(){
  return slider
}

export default MyCarousel