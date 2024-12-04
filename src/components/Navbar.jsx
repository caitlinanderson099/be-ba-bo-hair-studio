import { useContext, useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const baseURL = import.meta.env.VITE_WP_BASE_URL;


const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const {cart} = useContext(CartContext);
    const cartCount = cart.reduce((acc, item) => acc + item.quantity, 0);
    const [logoUrl, setLogoUrl] = useState("");
    const navigate = useNavigate();

    // Logo Fetching UseEffect
    useEffect(() => {
        const fetchNavLogo = async () => {
            try {
                const response = await axios.get(`${baseURL}wp-json/custom/v1/nav-logo`)
                if (response.status === 200) {
                    const data = response.data;
                    setLogoUrl(data[0]);
                } else {
                    console.error('Failed to fetch logo URL');
                }
            } catch (error) {
                console.error('Error fetching logo', error)
            }
        };

        fetchNavLogo();
    }, []);
    
    const toggleMenu = () => {
        setIsOpen(!isOpen); 
        document.body.style.overflow = isOpen ? 'auto' : 'hidden'; 
    };
    const closeMenu = () => {
        setIsOpen(false);
        document.body.style.overflow = 'auto';
    };
    const handleBook = () => {
        navigate('/contact');
        setIsOpen(false);
        document.body.style.overflow = 'auto';
    };

    return (
        <header>
        <nav className={`navbar ${isOpen ? "menu-open" : ""}`}>
            <div className="menu-logo">
                <img src="/be_ba_bo_logo.png" alt="website logo"  className="mobile-logo"/>
            </div>
            <div className="menu-icon" onClick={toggleMenu}>
            <div className={`bar bar1 ${isOpen ? "toggle" : ""}`}></div>
            <div className={`bar bar2 ${isOpen ? "toggle" : ""}`}></div>
            <div className={`bar bar3 ${isOpen ? "toggle" : ""}`}></div>
            </div>
            <ul className={`nav-links ${isOpen ? "active" : ""}`}>
            <li>
                <NavLink
                to="/about"
                onClick={closeMenu}
                className={({ isActive }) => (isActive ? "active-link" : "")}
                >
                About Us
                </NavLink>
            </li>
            <li>
                <NavLink
                to="/services"
                onClick={closeMenu}
                className={({ isActive }) => (isActive ? "active-link" : "")}
                >
                Our Services
                </NavLink>
            </li>

            <li>
                <NavLink
                to="/contact"
                onClick={closeMenu}
                className={({ isActive }) => (isActive ? "active-link" : "")}
                >
                Contact Us
                </NavLink>
            </li>

            <NavLink to="/" onClick={closeMenu} id="logo" className={({ isActive }) => (isActive ? "active-link" : "")}>
            <img src={logoUrl} alt="website logo" />
            </NavLink>

            <li>
                <NavLink
                to="/shop"
                onClick={closeMenu}
                className={({ isActive }) => (isActive ? "active-link" : "")}
                >
                Our Shop
                </NavLink>
            </li>

            <li>
                <NavLink
                to="/cart"
                onClick={closeMenu}
                className={({ isActive }) => (isActive ? "active-link" : "")}
                >
                My Cart({cartCount})
                </NavLink>
            </li>

            <button className="primary-button" onClick={handleBook}>Book Now</button>
            </ul>
        </nav>
        {isOpen && <div className="overlay" onClick={closeMenu}></div>}
        </header>
    );
};

export default Navbar;