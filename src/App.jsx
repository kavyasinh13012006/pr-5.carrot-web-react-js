import { BrowserRouter, Routes } from "react-router"
import Banner from "./Banner"
import Counterbinbanner from "./Counterbinbanner"
import Filterclick from "./Filterclick"
import Flter2box from "./Flter2box"
import Footer from "./Footer"
import Header from "./Header"
import Help from "./Help"
import Latest from "./Latest"
import Navegestion from "./Navegestion"
import Offerporducts from "./Offerporducts"
import Products from "./Products"
import Review from "./Review"
import { Route } from "react-router"
import Contact from "./Contact"

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
      <div>
        <Navegestion />
        <Header />
        <Banner />
        <Filterclick />
        <Products />
        <Offerporducts />
        <Help />
        <Counterbinbanner />
        <Flter2box />
        <Review />
        <Latest />
        <Footer />
      </div>
    </>
  )
}

export default App
