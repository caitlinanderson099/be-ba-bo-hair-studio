
const Footer = () => {
  return (
    <footer>
     <div className="footer-content">

      <div className="footer-left">
        <div className="logo-location">
          <img src='/be_ba_bo_logo.png' alt="" />
          <div className="subtitle-info">
          <h3>Head Office</h3>
          <p>123 Devon Street East, New Plymouth, New Zealand</p>
          <p>06-758 2341</p>
          <p>bebabo.hairstudio@xtra.co.nz</p>
          </div>
        </div>
      </div>

      <div className="footer-right">

        
      <div className="group">
          <h3>Socials</h3>
          <p>Instagram</p>
          <p>LinkedIn</p>
          <p>Twitter</p>
          <p>Facebook</p>
          <p>Email</p>
        </div>

        <div className="group">
          <h3>Sitemap</h3>
          <p>Home</p>
          <p>About Us</p>
          <p>Contact Us</p>
          <p>Our Services</p>
          <p>Our Shop</p>
        </div>
      </div>
     </div>

      <p className='copyright'>© 2024 Be Ba Bo Hair Studio All rights reserved.</p>
     
    </footer>
  );
};

export default Footer
