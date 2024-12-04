import { useState, useEffect } from "react";
import axios from "axios";

const useCustomizer = () => {
    
    
    // Background Customisers
    const [bgColor, setBgColor] = useState("");
    const [footerColor, setFooterColor] = useState("");

    // Font Customisers
    const [fontFamily, setFontFamily] = useState("");
    const [headerFont, setHeaderFont] = useState("");

    // Navbar & ?MobileMenu? Customisers
    const [navColor, setNavColor] = useState("");

    // Button Customisers
    const [primaryButtonColor, setPrimaryButtonColor] = useState("");
    const [primaryButtonTextColor, setPrimaryButtonTextColor] = useState("");
    const [secondaryButtonColor, setSecondaryButtonColor] = useState("");
    const [secondaryButtonTextColor, setSecondaryButtonTextColor] = useState("");

    // ENV Import
    const baseURL = import.meta.env.VITE_WP_BASE_URL;

    // UseEffect Function
    useEffect(() => {
        axios.get(`${baseURL}/wp-json/custom-theme/v1/customizer-settings`)
        .then((response) => {
            const {backgroundColor, fontFamily, headerFont, navbarColor, footerColor, primaryButtonColor, primaryButtonTextColor, secondaryButtonColor, secondaryButtonTextColor} = response.data;
            setBgColor(backgroundColor);
            setFontFamily(fontFamily);
            setHeaderFont(headerFont);
            setNavColor(navbarColor);
            setPrimaryButtonColor(primaryButtonColor);
            setPrimaryButtonTextColor(primaryButtonTextColor);
            setSecondaryButtonColor(secondaryButtonColor);
            setSecondaryButtonTextColor(secondaryButtonTextColor);
            setFooterColor(footerColor);
        })
        .catch((error) => {
            console.error('Error Fetching customizer settings: ', error)
        })
    }, [baseURL]);

    // Customiser Return
    return {bgColor, fontFamily, headerFont, navColor, primaryButtonColor, primaryButtonTextColor, secondaryButtonColor, secondaryButtonTextColor, footerColor};
};

export default useCustomizer;