import { Route, Routes } from "react-router-dom";

// Pages
import Home from "./pages/Home";
import ServicesPage from "./pages/ServicesPage";
import Shop from "./pages/Shop";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Cart from "./components/Cart";
import SinglePage from "./pages/SinglePage";
import Checkout from "./pages/Checkout";
import ReviewPage from "./pages/ReviewPage";

const Links = () => {
    return (
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/services" element={<ServicesPage/>}/>
            <Route path="/shop" element={<Shop/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/cart" element={<Cart/>}/>
            {/* Single Page */}
            <Route path='/service/:id' element={<SinglePage/>}/>
            <Route path="/checkout" element={<Checkout/>}/>
            <Route path="/review" element={<ReviewPage/>}/>
        </Routes>
    );
};

export default Links;