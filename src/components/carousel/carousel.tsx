import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import dynamic from 'next/dynamic';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { useEffect } from 'react';

const OwlCarousel = dynamic(() => import('react-owl-carousel'), {
    ssr: false, // Sunucu tarafında render edilmez
});


export default function Carousel({ images: images }: { images: string[] }) {

    useEffect(() => {
        if (typeof window !== 'undefined') {
            try {
                require('owl.carousel');
            } catch (error) {
                console.error(error);
            }
        }
    }, []);

    return (
        <OwlCarousel
            className="owl-theme"
            loop
            margin={10}
            nav={false}
            dots={false}
            autoplay
            autoplayTimeout={2000}
            autoplayHoverPause
            responsive={
                {
                    0: { items: 1 },
                    600: { items: 3 },
                    1000: { items: 5 }
                }
            }
        >
            {
                images.map((image, index) => (
                    <div key={index} className="item">
                        <img src={image} alt="carousel" />
                    </div>
                ))
            }
        </OwlCarousel>
    )
}
