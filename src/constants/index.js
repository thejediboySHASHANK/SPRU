import Icon1 from "../assets/about_images/h1.png"
import Icon2 from "../assets/about_images/h2.png"
import Icon3 from "../assets/about_images/h3.png"
import Icon4 from "../assets/about_images/h4.png"

import SubIcon1 from "../assets/icons/icon1.png"
import SubIcon2 from "../assets/icons/icon4.png"
import SubIcon3 from "../assets/icons/icon2.png"
import SubIcon4 from "../assets/icons/icon5.png"
import SubIcon5 from "../assets/icons/icon3.png"
import SubIcon6 from "../assets/icons/icon6.png"

import Product1 from "../assets/product_images/s1-1.jpg"
import Product2 from "../assets/product_images/s2-1.jpg"
import Product3 from "../assets/product_images/s3-1.jpg"

import ServiceImg1 from "../assets/services_images/1.png"
import ServiceImg2 from "../assets/services_images/2.jpg"
import ServiceImg3 from "../assets/services_images/3.jpg"
import ServiceImg4 from "../assets/services_images/4.jpg"
import ServiceImg5 from "../assets/services_images/5.jpg"
import ServiceImg6 from "../assets/services_images/6.jpeg"

import Profile from "../assets/profile_icon/t1.jpg"


export const NavContent = [
    {
        ph_no: "(+91) 7355147501",
        office_hours: "10am to 6pm",
        off_day: "Sun Off",
        navLinks: ["HOME", "OUR COMPANY", "PRODUCTS", "CATALOGUE", "CERTIFICATES", "CAREER", "DISTRIBUTOR", "GALLERY", "CONTACT US"]
    }
]

export const AboutContent = [
    {
        title: "Welcome to SPRU Products.jsx",
        description: "Spru Products.jsx is one of the reliable Manufacturers, Exporters, and Suppliers " +
            "of many items. We are an ISO 9001-2008 certified company. Our product range comprises " +
            "of House Cleaning Chemicals, Autocare Products.jsx, and Laundry Products.jsx. We deliver good " +
            "quality products at low cost. That is why our customers trust us and this helps us to " +
            "create a long-term relationship with our customers. We use innovation and knowledge for " +
            "creating ideas that can reduce the impact of our business operations on the environment. " +
            "All our products are eco-friendly, biodegradable with extraordinary performance in action. " +
            "These are manufactured using sophisticated machines, under the guidance of our qualified " +
            "technician & team of experts.",
        features: {
            icons: [Icon1, Icon2, Icon3, Icon4],
            title: ["Manufacturing", "Market Presence", "R & D", "Contact"],
            description: [
                "Our Manufacturing facilities is located at Nawabganj, Barabanki, Uttar Pradesh",
                "We support the on field sales team through round the clock Marketing and Technical support.",
                "We have a team of consultants who are specialist for various products of the Industry.",
                "Please feel free to communicate with us 24/7."
            ]
        }
    }
]

export const ChooseUsCont = [
    {
        title: "Why Choose Us",
        description: "We are Manufacturing Cleaning Chemicals For Commercials, Industrials, " +
            "Hotels, Hospitals, Institutions, Theaters, Shopping malls, Offices, NGOs..",

        features: [
            {
                icon: SubIcon1,
                text: "CUSTOMER SUPPORT",
            },
            {
                icon: SubIcon2,
                text: "QUALITY"
            },
            {
                icon: SubIcon3,
                text: "SAFETY & SECURITY"
            },
            {
                icon: SubIcon4,
                text: "NETWORKING"
            },
            {
                icon: SubIcon5,
                text: "CUSTOMER MANAGEMENT"
            },
            {
                icon: SubIcon6,
                text: "DELIVERY"
            },
        ]
    }
]

export const ProductContent = [
    {
        title : "Our Products",
        images : [Product1, Product2, Product3],
    }
]

export const ServicesContent = [
    {
        title : "INDUSTRIES WE SERVE",
        description: "We are happy to announce to you that we are providing services to a different kind of sectors " +
            "from government to non-government, NGO’S, corporate company’s & central government also...",

        images : [ServiceImg1, ServiceImg2, ServiceImg3, ServiceImg4, ServiceImg5, ServiceImg6]
    }
]

export const TestiMonialsCont = [
    {
        title:  "Our Testimonials",
        testimonial : [
            {
                icon : Profile,
                text : "I am very happy with Spru Products, they are very " +
                    "friendly and always ready to take new challenge. " +
                    "We closed several great clients in Utter Pradesh as well India also.",
                name : "Hament Gupta",
                designation : "Propritor",
                company : "GNG Distributors, Sitapur"
            },
            {
                icon : Profile,
                text : "I am very happy with Spru Products, they are very " +
                    "friendly and always ready to take new challenge. " +
                    "We closed several great clients in Utter Pradesh as well India also.",
                name : "Hament Gupta",
                designation : "Propritor",
                company : "GNG Distributors, Sitapur"
            },
            {
                icon : Profile,
                text : "I am very happy with Spru Products, they are very " +
                    "friendly and always ready to take new challenge. " +
                    "We closed several great clients in Utter Pradesh as well India also.",
                name : "Hament Gupta",
                designation : "Propritor",
                company : "GNG Distributors, Sitapur"
            },
        ]
    }
]

export const FooterContent = [
    {
        text : "Spru Products is one of the reliable Manufacturers, Exporters, and Suppliers of " +
            "many items. We are an ISO 9001-2008 certified company. Our product range comprises " +
            "of House Cleaning Chemicals, Autocare Products, and Laundry Products. We deliver " +
            "good quality products at low cost. That is why our customers trust us and this helps " +
            "us to create a long-term relationship with our customers.",

        quick_links : ["About", "Vision & Mission", "Guiding Principles", "Catalogue", "Certificates", "Career", "Distributor", "Gallery", "Contact Us"],
        address : "1st Floor, Ories Tower Plot No.- 6, Opp. New High Court Faizabad Road, Lucknow",
        mobile : "(+91) 7355147501 (24/7 Support Line)",
        email : "info@spruproducts.in",
    }
]