import React from 'react'


const Services = ({services}) => {
    const {title, description, images} = services[0]
    const styles = {
        background: `linear-gradient(to bottom left, #00800080, #006241)`,
    }

    return (
        <div style={styles} className="mt-14">
            <h1 className="text-white text-4xl font-bold text-center py-10">{title}</h1>
            <p className="text-center w-1/2 mx-auto text-white">{description}</p>
            <div className="grid grid-cols-3 mt-10 px-36">
                    {images.map((image, index) => (
                        <div
                            key={index}
                            className="flex items-center justify-center mx-auto bg-cover bg-center w-[370px] h-[231px] mb-10"
                            style={{ backgroundImage: `url(${image})`, aspectRatio: '1/1' }}
                        ></div>
                    ))}
            </div>
        </div>
    )
}
export default Services
