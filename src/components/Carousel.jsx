import React, {useEffect, useState} from 'react'
import Image1 from "../assets/1.png"
import Image2 from "../assets/2.png"
import Image3 from "../assets/3.png"

const Carousel = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const images = [
        Image1, Image2, Image3
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex(prevIndex => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
        }, 3000);

        return () => clearInterval(interval);
    }, [images.length]);

    return (
        <div className="w-full h-[620px] relative overflow-hidden">
            {images.map((image, index) => (
                <img
                    key={index}
                    src={image}
                    alt={`Carousel Slide ${index}`}
                    className={`w-full h-full object-cover object-center object-contain absolute top-0 left-0 transition-opacity duration-500 ${activeIndex === index ? 'opacity-100' : 'opacity-0'}`}
                />
            ))}
        </div>
    );
}
export default Carousel
