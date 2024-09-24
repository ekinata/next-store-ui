import Carousel from '../components/carousel/carousel';
import FlyMe from '../components/layout/FlyMe';
import Navbar from '../components/layout/Navbar';
import Lightbox from '../components/lightbox/lightbox';
import Slider from '../components/slider/Slider';
import { CarouselData } from '../exampleData/CarouselData';
import { SlideData } from '../exampleData/SlideData';


export default function Home(): JSX.Element {
  return (
    <>
      <Navbar />
      <Lightbox />
      <Slider slides={SlideData} />
      <Carousel images={CarouselData} />
      <FlyMe />
    </>
  );
}
