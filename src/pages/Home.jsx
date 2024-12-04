import PageHeader from '../components/PageHeader';
import { Navigation, Pagination} from 'swiper/modules';
import Seo from '../components/Seo'

import { Swiper, SwiperSlide } from 'swiper/react';

import { useNavigate } from 'react-router-dom';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { FaStar } from 'react-icons/fa';

const Home = () => {

  // Variables
  const navigate = useNavigate();

  // Handle Explore Navigation
  const handleExplore = (e) => {
    e.preventDefault();
    window.scrollTo(0, 0);
    navigate('/services');
  };

  // Handle Book Navigation
  const handleBook = (e) => {
    e.preventDefault();
    window.scrollTo(0, 0);
    navigate('/contact');
  };

  // Handle Review Navigation
  const handleReview = (e) => {
    e.preventDefault();
    window.scrollTo(0, 0);
    navigate('/review');
  }

  // Handle Shop Navigation
  const handleShop = (e) => {
    e.preventDefault();
    window.scrollTo(0, 0);
    navigate('/shop');
  };

  // Master Return
  return (
    <>
     {/* SEO */}
     <Seo title="Home - Be Ba Bo" description="This is home page for Be Ba Bo Hair Studio" />
    <div className='home-page'>
      <PageHeader title='Be Ba Bo Hair Studio' image_url={'/home-bg.jpg'}/>
      <div className="home-content">
        <div className='mission-section'>
          <div className='img-cont'>
            <img src="/home-img1.jpg" alt="Person straightening customer's hair" />
          </div>
          <div className='mission-header-text'>
            <h2> Enhancing Natural Beauty Through Creativity </h2>
            <p>Welcome to Be Ba Bo Hair Studio, where expert cuts, colors, and transformations highlight your unique style. Our skilled team delivers top-quality results with the latest techniques to help you shine with confidence!</p>
            <div className='buttons-cont'>
            <button className="secondary-button" onClick={handleShop}>Shop Products</button>
            <button className='primary-button' onClick={handleBook}>Book Now</button>
          </div>
          </div>
        </div>

        <div className='portfolio-section'>
          <h2> Our Portfolio </h2>
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={30}
            slidesPerView={4}
            breakpoints={{
              0: {
                slidesPerView: 1, // For all screens up to 600px, show 1 slide
              },
              601: {
                slidesPerView: 2, // From 601px and above, show 4 slides
              },
              901: {
                slidesPerView: 3,
              },
              1081: {
                slidesPerView: 4,
              }
            }}
            navigation
            pagination={{ clickable: true }}
          >
            <SwiperSlide><img src="/portfolio-img1.jpg" alt="" /></SwiperSlide> {/* Slide #1 */}
            <SwiperSlide><img src="/portfolio-img2.jpg" alt="" /></SwiperSlide> {/* Slide #2 */}
            <SwiperSlide><img src="/portfolio-img7.jpg" alt="" /></SwiperSlide> {/* Slide #3 */}
            <SwiperSlide><img src="/portfolio-img4.jpg" alt="" /></SwiperSlide> {/* Slide #4 */}
            <SwiperSlide><img src="/portfolio-img5.jpg" alt="" /></SwiperSlide> {/* Slide #5 */}
            <SwiperSlide><img src="/portfolio-img3.jpg" alt="" /></SwiperSlide> {/* Slide #6 */}
          </Swiper>
        </div>

        <div className="middle-section">
          <img src="/home-img2.jpg" alt="" />
          <img src="/home-img3.jpg" alt="" />
        </div>

        <div className="services-section">
          <h2> Our Services </h2>
          <div className='service-groups'>
            {/* #1 */}
            <div className='service-group'>
              <img src="/portfolio-img5.jpg" alt="" />
              <div className='sub-info'>
                <h3>Cut & Styling</h3>
                <p>Transform your look with our expert cut and styling services, designed to complement your unique features and personal style.</p>
              </div>
            </div>
            {/* #2 */}
            <div className='service-group'>
              <img src="/portfolio-img7.jpg" alt="" />
              <div className='sub-info'>
                <h3>Custom Colouring</h3>
                <p>Custom coloring services designed to enhance your style with vibrant, personalized hues</p>
              </div>
            </div>
            {/* #3 */}
            <div className='service-group'>
              <img src="/hair-treatment.jpg" alt="" />
              <div className='sub-info'>
                <h3>Hair Treatments</h3>
                <p>Nourishing hair treatments to restore strength, shine, and overall health to your locks.</p>
              </div>
            </div>
            {/* #4 */}
            <div className='service-group'>
              <img src="/take-home.jpg" alt="" />
              <div className='sub-info'>
                <h3>Take Home Haircare</h3>
                <p>Premium take-home haircare products to maintain salon-quality results every day.</p>
              </div>
            </div>
         
       
          </div>
          <button className='primary-button' onClick={handleExplore}> Explore More </button>
        </div>

        <div className="review-section">
          <h2> Customer Testimonials </h2>

          <div className='testimonial-row'>

            {/* Group #1 */}
            <div className="testimonial-group">
              <div className='details'>
                <div className="profile">
                  <img src="/persona-1.jpg" alt="pfp img" />
                  <div className='profile-details'>
                    <h5>Lucy Reed</h5>
                    <div className='stars-date'>
                      <FaStar/>
                      <FaStar/>
                      <FaStar/>
                      <FaStar/>
                      <p>02/03/24</p>
                    </div>
                  </div>
                </div>
                <p>"Be Ba Bo Hair Studio is fantastic! The team is skilled, friendly, and always makes me feel pampered. I leave every time loving my hair!" </p>
              </div>
            </div>

            {/* Group #2 */}
            <div className="testimonial-group">
              <div className='details'>
                <div className="profile">
                  <img src="/persona-2.jpg" alt="pfp img" />
                  <div className='profile-details'>
                    <h5>Dave Kettle</h5>
                    <div className='stars-date'>
                      <FaStar/>
                      <FaStar/>
                      <FaStar/>
                      <p>02/03/24</p>
                    </div>
                  </div>
                </div>
                <p>"Be Ba Bo Hair Studio is incredible! The staff is friendly, professional, and always delivers amazing results. I’m always thrilled with my hair after every visit!" </p>
              </div>
            </div>

            {/* Group #3 */}
            <div className="testimonial-group">
              <div className='details'>
                <div className="profile">
                  <img src="/persona-3.jpg" alt="pfp img" />
                  <div className='profile-details'>
                    <h5>Neve Tilly</h5>
                    <div className='stars-date'>
                      <FaStar/>
                      <FaStar/>
                      <FaStar/>
                      <p>02/03/24</p>
                    </div>
                  </div>
                </div>
                <p>"Love Be Ba Bo Hair Studio! The team is welcoming, and they always know exactly what I need. My hair looks perfect every time I leave!" </p>
              </div>
            </div>

            {/* Group #4 */}
            <div className="testimonial-group">
              <div className='details'>
                <div className="profile">
                  <img src="/persona-4.jpg" alt="pfp img" />
                  <div className='profile-details'>
                    <h5>Nathan McGhee</h5>
                    <div className='stars-date'>
                      <FaStar/>
                      <FaStar/>
                      <FaStar/>
                      <FaStar/>
                      <p>02/03/24</p>
                    </div>
                  </div>
                </div>
                <p>"Be Ba Bo Hair Studio is my go-to! The stylists are talented, attentive, and make every visit a great experience. Highly recommend!" </p>
              </div>
            </div>

          </div>
          <button onClick={handleReview} className='primary-button'> Leave Us a Review </button>
        </div>

      </div>

      </div> 
      </>
  );
};

export default Home
