import { title } from 'process';
import React, { useEffect } from 'react'
import { SliderCollection } from '../../types/component';

export default function Slider(props: any) {

    const slides: SliderCollection = props.slides;

    const handleDotClick = (e: any) => {
        const dots = document.querySelectorAll('.dot');
        dots.forEach((dot: any) => {
            dot.classList.remove('active');
        });
        e.target.classList.add('active');
        const slide = slides.find((slide: any) => slide.id === parseInt(e.target.id));
        const slideIndex = slides.indexOf(slide);
        const slideWidth = document.querySelector('.slide')?.clientWidth;
        document.querySelector('.slides')?.scrollTo({
            left: slideWidth! * slideIndex,
            behavior: 'smooth'
        });
    }

    return (
        <div className='slider'>
            <div className='slides'>
                {slides?.map((slide: any) => (
                    <div key={slide.id} className='slide' style={{ background: `url(${slide.image})` }}>
                        <div className='slide-content'>
                            <h1>{slide?.title}</h1>
                            <h2>{slide?.subtitle}</h2>
                            <p>{slide?.text}</p>
                        </div>
                    </div>
                ))}
            </div>
            <div className='dots'>
                {slides?.map((slide: any) => (
                    <span onClick={handleDotClick} id={slide.id} key={slide.id} className={'dot' + (slide.id == slides[0].id ? ' active' : "")}></span>
                ))}
            </div>
        </div>
    )
}
