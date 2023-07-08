
import './App.css'
import {Route, Routes} from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import {
    AboutContent,
    ChooseUsCont, FooterContent,
    NavContent,
    ProductContent,
    ServicesContent,
    TestiMonialsCont
} from "./constants/index.js";
import Carousel from "./components/Carousel.jsx";
import Carousel2 from "./components/Carousel2.jsx";
import About from "./components/About.jsx";
import ChooseUS from "./components/ChooseUS.jsx";
import Products from "./components/Products.jsx";
import Services from "./components/Services.jsx";
import TestiMonials from "./components/TestiMonials.jsx";
import Footer from "./components/Footer.jsx";

function App() {

  return (
      <Routes>
          <Route index element={
              <div>
                  <Navbar navContent={NavContent} />
                  {/*<Carousel />*/}
                  <Carousel2 />
                  <About about={AboutContent}/>
                  <ChooseUS choose={ChooseUsCont} />
                  <Products products={ProductContent} />
                  <Services services={ServicesContent}/>
                  <TestiMonials testimonials={TestiMonialsCont} />
                  <Footer footer={FooterContent} />
              </div>
          }/>

      </Routes>
  )
}

export default App
