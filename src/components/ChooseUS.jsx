import React, {useEffect, useState} from 'react'
import backgroundImage from "../assets/rachel-chow-44zxd7IRqYM-unsplash.jpg"
const ChooseUs = ({choose}) => {
    const {title, description, features} = choose[0]
    const [scrollY, setScrollY] = useState(0);
    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const backgroundStyles = {
        height: '400px',
        width: '100%',
        background: `linear-gradient(to bottom, rgba(0, 128, 0, 0.5), rgba(0, 128, 0, 0.5)), url(${backgroundImage})`,
        backgroundPosition: `center ${scrollY * 0.5}px`, // Adjust the scroll speed by multiplying the scrollY value
        backgroundSize: 'cover',
        transform: `rotate(${scrollY < 0 ? 180 : 0}deg)`,
        transition: 'transform 0.3s ease',
        marginBottom: "200px"
    };

    return (
        <div className="mt-4" style={backgroundStyles}>
            <h1 className="py-14 text-center text-white text-5xl font-semibold capitalize">{title}</h1>
            <div className="flex justify-center items-center text-center">
                <p className="text-white text-lg w-1/2">{description}</p>
            </div>
            <div className="flex justify-center text-center gap-7 mt-20">
                {features.map ((feature, index) => (
                    <div key={index} className="border p-5 w-40 bg-white hover:bg-[#66A663] hover:text-white rounded-lg shadow-lg">
                        <img src={feature.icon} alt="icon.jpg" className="mx-auto w-20 h-20 p-2 border-b" />
                        <p className="text-lg mt-3 items-center">{feature.text}</p>
                    </div>
                ))}
            </div>

        </div>
    )

}
export default ChooseUs
