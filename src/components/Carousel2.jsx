import React from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import Image1 from "../assets/1.png"
import Image2 from "../assets/2.png"
import Image3 from "../assets/3.png"


const Carousel2 = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 3000,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <Slider {...settings} className="w-full h-[650px] overflow-hidden">
            <div>
                <img src={Image1} alt="Slide 1" className="w-full h-full object-cover" />
            </div>
            <div>
                <img src={Image2} alt="Slide 2" className="w-full h-full object-cover" />
            </div>
            <div>
                <img src={Image3} alt="Slide 3" className="w-full h-full object-cover" />
            </div>
        </Slider>
    );
}
export default Carousel2
