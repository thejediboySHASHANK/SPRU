import React from 'react'
import Logo from "../assets/logo.png"

const Footer = ({footer}) => {
    const {text, quick_links, address, mobile, email} = footer[0]
    return (
        <div className="bg-dark mt-14 px-36">
            <div className="grid grid-cols-[2fr_3fr]">
                <div className="mt-20">
                    <img className="mx-0" src={Logo} alt="logo.jpg" />
                    <p className="text-[#A4D0A4] mt-4">{text}</p>
                </div>
                <div className="mt-20 ml-10 grid grid-cols-2">
                    <div>
                        <span className="text-white text-lg border-b-2 pb-2 font-semibold">QUICK LINKS</span>
                        <div><br/></div>
                        {quick_links.map ((link, index) => (
                            <div className="mt-0.5">
                                <span className="text-white">{link}</span>
                            </div>
                        ))}
                    </div>

                    <div>
                        <span className="text-white text-lg border-b-2 pb-2 font-semibold">GET IN TOUCH</span>
                        <div><br/></div>
                        <span className="text-[#A4D0A4] text-lg">ADDRESS</span>
                        <p className="text-[#A4D0A4] mt-1">{address}</p>

                        <p className="text-[#A4D0A4] text-lg mt-5">MOBILE</p>
                        <p className="text-[#A4D0A4] mt-1">{mobile}</p>

                        <p className="text-[#A4D0A4] text-lg mt-5">EMAIL</p>
                        <p className="text-[#A4D0A4] mt-1">{email}</p>
                        {/*{quick_links.map ((link, index) => (*/}
                        {/*    <div className="mt-0.5">*/}
                        {/*        <span className="text-white">{link}</span>*/}
                        {/*    </div>*/}
                        {/*))}*/}
                    </div>
                </div>
            </div>
            Footer
        </div>
    )
}
export default Footer
