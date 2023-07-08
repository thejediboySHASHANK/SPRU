import React from 'react'

const Products = ({products}) => {
    const {title, images} = products[0]
    return (
        <div className="text-center">
            <h1 className="text-4xl font-bold">{title}</h1>
            <div className="mt-20 flex items-center justify-center gap-8">
                {images.map ((image, index) => (
                    // <img
                    //     key={index}
                    //     src={image}
                    //     alt="product-img.jpg"
                    //     className="border shadow-xl object-cover transition-transform hover:scale-110"
                    // />
                    <div
                        key={index}
                        className="border border-gray-200 shadow-2xl overflow-hidden flex items-center justify-center"
                    >
                        <img
                            src={image}
                            alt="product-img.jpg"
                            className="w-full h-full object-cover transition-transform hover:scale-150 duration-500"
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}
export default Products
