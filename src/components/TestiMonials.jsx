import React from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
const TestiMonials = ({testimonials}) => {
    const {title, testimonial} = testimonials[0]

    // Repeat the testimonials to simulate infinite scrolling
    const testimonialItems = testimonials[0].testimonial;
    const repeatedTestimonials = testimonialItems.concat(testimonialItems).concat(testimonialItems);

    // Configure settings for React Slick
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 3000,
        slidesToShow: 3,
        slidesToScroll: 1
    };

    return (
        <div className="text-center mt-20">
            <h1 className="text-4xl font-bold">{title}</h1>
            <div className="flex justify-center mt-10">
                <Slider {...settings} className="overflow-hidden px-36">
                    {repeatedTestimonials.map((testi, index) => (
                        <div key={index} className="p-8 shadow-xl">
                            <img src={testi.icon} alt="profile" className="mx-auto rounded-full shadow-2xl" />
                            <p className="mt-4">{testi.text}</p>
                            <p className="mt-4 text-xl">{testi.name}</p>
                            <p className="mt-2">{testi.designation}</p>
                            <p>{testi.company}</p>
                            <div className="border-b-4 border-primary pt-10 rounded-md"></div>
                        </div>
                    ))}
                </Slider>
            </div>

        </div>
    )
}
export default TestiMonials
