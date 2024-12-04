import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa6";
import PageHeader from "../components/PageHeader";
import { useNavigate } from "react-router-dom";
import Seo from '../components/Seo'

const About = () => {

    const navigate = useNavigate();

    const handleShop = (e) => {
        e.preventDefault();
        window.scrollTo(0, 0);
        navigate('/shop')
    }

    const handleServices = (e) => {
        e.preventDefault();
        window.scrollTo(0, 0);
        navigate('/services')
    }



  return (
    <>
     {/* SEO */}
     <Seo title="About Us - Be Ba Bo" description="This is all the information for Be Ba Bo Hair Studio" />
    <div className='about-page'>
        <PageHeader title='About Us' image_url={'/about-bg.jpg'}/>
        <div className="about-content">
            {/* About Statement */}
            <div className="about-statement-group">
                <div className="about-description">
                <h2> We are Be Ba Bo Hair Studio! </h2>
                <p>Be Ba Bo Hair Studio, located in the heart of New Plymouth, offers expert cuts, vibrant coloring, and specialized treatments in a welcoming and relaxing environment. Our creative and skilled team uses top-quality products and the latest techniques to deliver results that enhance your unique style. Whether you're after a bold transformation or a subtle refresh, we are dedicated to making you feel confident, refreshed, and ready to shine.</p>
                </div>
                <img src="/about-pic2.jpg" alt="" />
            </div>

            {/* Meet the Team */}
            <div className="meet-the-team">
                <h2> Meet The Team </h2>
                <div className="staff-cards">
                    {/* #1 */}
                    <div className="staff-card">
                        <img src="/janine.jpg" alt="staff img" />
                        <div className="card-details">
                            <h3> Janine Marshall-Johnson </h3>
                            <p>Janine, the visionary at Be Ba Bo Hair Studio, blends expertise and creativity to deliver personalized transformations, ensuring every client feels confident.</p>
                            <div className="social-icons">
                                <FaInstagram/>
                                <FaFacebook/>
                                <FaTwitter/>
                            </div>
                        </div>
                    </div>

                    {/* #2 */}
                    <div className="staff-card">
                        <img src="/zeb.jpg" alt="staff img" />
                        <div className="card-details">
                            <h3> Zeb Schimanski-Hunt </h3>
                            <p>Zeb, a skilled hairstylist at Be Ba Bo Hair Studio, delivers precise, creative, and personalized styles that leave clients feeling confident and refreshed.</p>
                            <div className="social-icons">
                                <FaInstagram/>
                                <FaFacebook/>
                                <FaTwitter/>
                            </div>
                        </div>
                    </div>

                    {/* #3 */}
                    <div className="staff-card">
                        <img src="/chloe.jpg" alt="staff img" />
                        <div className="card-details">
                            <h3> Chloe Jackson </h3>
                            <p>Chloe, a skilled hairstylist at Be Ba Bo Hair Studio, is celebrated for her creativity and knack for enhancing natural beauty, leaving clients confident and radiant.</p>
                            <div className="social-icons">
                                <FaInstagram/>
                                <FaFacebook/>
                                <FaTwitter/>
                            </div>
                        </div>
                    </div>

                    {/* #4 */}
                    <div className="staff-card">
                        <img src="/natalija.jpg" alt="staff img" />
                        <div className="card-details">
                            <h3> Natalija Wallace </h3>
                            <p>Natalija, a talented stylist at Be Ba Bo Hair Studio, combines creativity and skill to craft personalized looks that leave clients feeling confident and transformed.</p>
                            <div className="social-icons">
                                <FaInstagram/>
                                <FaFacebook/>
                                <FaTwitter/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Image Break */}
            <div className="middle-section">
                <img src="/about-pic1.jpg" alt="" />
                <img src="/about-pic3.jpg" alt="" />
            </div>

            {/* Explore Section */}
            <div className="explore-section">
                <h2> Explore Our Business! </h2>
                <p>At Be Ba Bo, we believe in celebrating individuality and empowering confidence through exceptional hair care. Let us help you shine—inside and out! Explore what we have to offer.</p>
                <div className="buttons-cont">
                    <button onClick={handleShop} className="secondary-button">Our Shop</button>
                    <button onClick={handleServices} className="primary-button">Our Services</button>
                </div>
            </div>
        </div>
    </div>
    </>
  );
};

export default About;
