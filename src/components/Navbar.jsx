import React, {useEffect, useState} from 'react';
import Logo from "../assets/logo.png";

const Navbar = ({navContent}) => {
    const {ph_no, office_hours, off_day, navLinks} = navContent[0];
    const [isNavbarVisible, setIsNavbarVisible] = useState(false);
    const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth)

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.pageYOffset;
            const navbarThreshold = 100; // Adjust this value as needed

            setIsNavbarVisible(scrollTop > navbarThreshold);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            {isNavbarVisible && (
                <div className="fixed top-0 left-0 w-full bg-white shadow-lg z-50">
                    <div className="flex justify-center bg-primary px-4 py-5">
                        <div className="flex gap-12 h-full">
                            {navLinks.map((link, index) => (
                                <div className="cursor-pointer" key={index}>
                                    <span className="text-white font-bold">{link}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}

            <div className="flex justify-between px-20 py-2.5 border-b-2">
                <img className="w-80 h-20 object-contain object-center ml-20 items-center" src={Logo} alt="logo.jpg"
                     draggable="false"/>
                <div className="flex gap-16 mr-40 items-center">
                    <div>
                        <span className="text-gray-400">CALL US ON</span> <br/>
                        <span className="font-semibold">{ph_no}</span>
                    </div>
                    <div>
                        <span className="text-gray-400">OFFICE OPENED</span> <br/>
                        <span className="font-semibold">{office_hours} <span
                            className="text-gray-500 font-semibold">{off_day}</span></span>
                    </div>
                </div>
            </div>

            <div className="flex justify-center bg-primary px-4 py-5">
                <div className="flex gap-12 h-full">
                    {navLinks.map((link, index) => (
                        <div className="cursor-pointer" key={index}>
                            <span className="text-white font-bold">{link}</span>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Navbar;
