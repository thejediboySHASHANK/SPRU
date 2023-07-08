import React from 'react'
import Image from "../assets/about_images/pic11.jpg"

import Icon1 from "../assets/about_images/h1.png"

const About = ({about}) => {
    const {title, description, features} = about[0]
    return (
        <div className="grid grid-cols-[2fr_3fr] gap-6 px-40 py-2.5 mt-10">
            <div>
                <img src={Image} alt="product-img" />
            </div>
            <div>
                <h1 className="text-2xl">{title}</h1>
                <p className="mt-2 text-gray-600">{description}</p>
                <div className="grid grid-cols-2 mt-4 gap-6">
                        {features.icons.map ((icon, index) => (
                            <div key={index} className="grid grid-cols-[1fr_3fr] gap-2 mt-2">
                                <div className="mt-4">
                                    <img src={icon} alt="icon.jpg" className="w-16 h-16"  />
                                </div>
                                <div>
                                    <h2 className="mt-2 text-lg underline">{features.title[index]}</h2>
                                    <p className="text-gray-600 mt-1">{features.description[index]}</p>
                                </div>
                            </div>
                        ))}
                </div>
            </div>
        </div>
    )
}
export default About
