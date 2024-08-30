import Carousel from '../components/carousel/carousel';
import FlyMe from '../components/layout/FlyMe';
import Navbar from '../components/layout/Navbar';
import Slider from '../components/slider/Slider';
import { SlideData } from '../exampleData/SlideData';


export default function Home(): JSX.Element {
  return (
    <>
      <Navbar />
      <Slider slides={SlideData} />
      <Carousel/>
      <FlyMe />
    </>
  );
}
