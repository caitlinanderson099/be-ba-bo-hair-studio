import { useState } from 'react';
import PageHeader from '../components/PageHeader';
import axios from 'axios';
import Seo from '../components/Seo'

const formEndPoint = import.meta.env.VITE_APP_WP_API_BOOKING_FORM_ENDPOINT;
const contactFormEndPoint = import.meta.env.VITE_APP_WP_API_CONTACT_FORM_ENDPOINT;


const Contact = () => {

  // Booking Form Component
  const BookingForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [number, setNumber] = useState('');
  const [service, setService] = useState('');
  const [staff, setStaff] = useState('');
  const [date, setDate] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const testForm = new FormData();
      testForm.append('your-name', name);
      testForm.append('your-email', email);
      testForm.append('your-number', number);
      testForm.append('your-service', service);
      testForm.append('your-staff', staff);
      testForm.append('date-and-time', date);

    axios.post(formEndPoint, testForm, {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      }
    })

    .then(function (response) {
      setSubmitted(true);
    })
    .catch(function (error) {
      setError(true);
    });
  };

  if (submitted) {
    return (
      <div className='success-message'>
        <h3>Thank you for booking with Be Ba Bo!</h3>
        <p>We have received your booking request, an email will be sent to your provided email address with the details</p>
      </div>
    );
  };

  if (error) {
    return (
      <div className='error-message'>
        <h3>Error! Couldn't booking your appointment</h3>
        <p>Please try again later:(</p>
      </div>
    )
  };

  return (
    <form
      onSubmit={handleSubmit}
      method="POST"
    >
      <div className='form-inputs'>
        {/* Full Name */}
        <div className='form-input'>
                <label htmlFor="name">Full Name:</label>
                <input 
                  type="text" 
                  name='name'
                  onChange={(event) => setName(event.target.value)}
                  value={name}
                  required
                />
              </div>

              {/* Email Address */}
              <div className='form-input'>
                <label htmlFor="email">Email Address:</label>
                <input 
                  type="email" 
                  name="email"
                  onChange={(event) => setEmail(event.target.value)}
                  value={email}
                  required
                />
              </div>

              {/* Phone Number */}
              <div className='form-input'>
                <label htmlFor="number">Phone Number:</label>
                <input 
                  type="text" 
                  name="number"
                  onChange={(event) => setNumber(event.target.value)}
                  value={number}
                  required
                />
              </div>

              {/* Service */}
              <div className='form-input'>
                <label htmlFor="service">Choose Your Service:</label>
                <select 
                  name="service" 
                  id="service"
                  onChange={(event) => setService(event.target.value)}
                  value={service}
                  required
                >
                  <option value="">Please Select One</option>
                  <option value="Hair Spa Treatments">Hair Spa Treatments</option>
                  <option value="Keratin Smoothing Treatments">Keratin Smoothing Treatments</option>
                  <option value="Bridal and Special Occasion Styling">Bridal and Special Occasion Styling</option>
                  <option value="Textured Waves or Curls Styling">Textured Waves or Curls Styling</option>
                  <option value="Blowouts">Blowouts</option>
                  <option value="Mens Haircuts">Mens Haircuts</option>
                  <option value="Womens Haircuts">Womens Haircuts</option>
                  <option value="Global Hair Color">Global Hair Color</option>
                  <option value="Grey Blending or Camouflage">Grey Blending or Camouflage</option>
                  <option value="Bold Balayage">Bold Balayage</option>
                </select>
              </div>

              {/* Staff */}
              <div className='form-input'>
                <label htmlFor="staff">Choose Your Staff:</label>
                <select 
                  name="staff" 
                  id="staff"
                  onChange={(event) => setStaff(event.target.value)}
                  value={staff}
                  required
                >
                  <option value="">Please Select One</option>
                  <option value="Any">Any</option>
                  <option value="Janine Marshall-Johnson">Janine Marshall-Johnson</option>
                  <option value="Zeb Schimanski-Hunt">Zeb Schimanski-Hunt</option>
                  <option value="Chloe Jackson">Chloe Jackson</option>
                  <option value="Natalija Wallace">Natalija Wallace</option>
                </select>
              </div>

              {/* Date and Time */}
              <div className='form-input'>
                <label htmlFor="date">Date and Time:</label>
                <select 
                  name="date" 
                  id="date"
                  onChange={(event) => setDate(event.target.value)}
                  value={date}
                  required 
                >
                  <option value="02/12/24 10:00am">02/12/24 10:00am</option>
                  <option value="02/12/24 11:30am">02/12/24 11:30am</option>
                  <option value="02/12/24 2:00pm">02/12/24 2:00pm</option>
                  <option value="10/12/24 10:00am">10/12/24 10:00am</option>
                  <option value="10/12/24 11:30am">10/12/24 11:30am</option>
                  <option value="10/12/24 2:00pm">10/12/24 2:00pm</option>
                </select>
              </div>

              {/* Button */}
                <button
                  className='regular-button primary-button'
                  type='submit'
                >
                  Book Now
                </button>
      </div>
    </form>
  );

  };

  // Contact Form Component
  const ContactForm = () => {
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState(false);

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (event) => {
      event.preventDefault();
      const testForm = new FormData();
        testForm.append('your-name', name);
        testForm.append('your-email', email);
        testForm.append('your-subject', subject);
        testForm.append('your-message', message);
  
      axios.post(contactFormEndPoint, testForm, {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        }
      })
  
      .then(function (response) {
        setSubmitted(true);
      })
      .catch(function (error) {
        setError(true);
      });
    };

    if (submitted) {
      return (
        <div className='success-message'>
          <h3>Thank you for contacting Be Ba Bo!</h3>
          <p>We have received your message and will get back to you as soon as we can!</p>
        </div>
      );
    };
  
    if (error) {
      return (
        <div className='error-message'>
          <h3>Error! Couldn't send your message</h3>
          <p>Please try again later:(</p>
        </div>
      )
    };
  
    return (
      <form
        onSubmit={handleSubmit}
        method="POST"
      >
        <div className='form-inputs'>
          {/* Full Name */}
          <div className='form-input'>
                  <label htmlFor="name">Full Name:</label>
                  <input 
                    type="text" 
                    name='name'
                    onChange={(event) => setName(event.target.value)}
                    value={name}
                    required
                  />
                </div>
  
                {/* Email Address */}
                <div className='form-input'>
                  <label htmlFor="email">Email Address:</label>
                  <input 
                    type="email" 
                    name="email"
                    onChange={(event) => setEmail(event.target.value)}
                    value={email}
                    required
                  />
                </div>
  
                {/* Message Subject */}
                <div className='form-input'>
                  <label htmlFor="subject">Subject:</label>
                  <input 
                    type="text" 
                    name="subject"
                    onChange={(event) => setSubject(event.target.value)}
                    value={subject}
                    required
                  />
                </div>

                {/* Message */}
                <div className='form-input'>
                  <label htmlFor="message">Message:</label>
                  <textarea 
                    name="message" 
                    id="message"
                    onChange={(event) => setMessage(event.target.value)}
                    value={message}
                    required
                  />
                </div>
  
                {/* Button */}
                  <button
                    className='regular-button primary-button'
                    type='submit'
                  >
                    Send Message
                  </button>
        </div>
      </form>
    );
  };
  


  return (
    <>
     {/* SEO */}
     <Seo title="Contact Us - Be Ba Bo"/>

      <div className='contact-page'>
        <PageHeader title='Contact Us' image_url={'/contact-bg.jpg'}/>
        <div className='contact-content'>
          {/* Booking Section */}
          <div className='booking-section'>
            <h2> Book an appointment </h2>
            <BookingForm/>
            <div className='loyalty-section'>
              <h3 className='page-title'> Get 10% Off Your 10th Appointment! </h3>
              <p>We value your trust in our salon, and to show our appreciation, we’re thrilled to offer 10% off your 10th appointment! Every visit brings you closer to this special reward.
                Book your next appointment and let us pamper you while you earn your way to a well-deserved discount! Because great hair deserves great perks.
              </p>
            </div>
          </div>

          {/* Contact Section */}
          <div className='contact-section'>
          <h2> Get In Touch With Us </h2>
            <ContactForm/>
          </div>

          {/* Cancellation Section */}
          <div className='cancellation-section'>
            <div className='cancellation-info'>
              <h2> Cancellation Policy </h2>
              <p>When booking an appointment over the phone, email, online booking, facebook or in person, you are entering a verbal contract that you will turn up at that time to have that service completed.</p>
              <p>We require a minimum of 24 hours notice to cancel or reschedule an appointment. Failure to do so will result in payment of 50% of the scheduled appointment.</p>
              <h3>Missed appointments/no show</h3>
              <p>Failure to cancel an appointment and/or no-show will result in payment of 100% of the scheduled appointment.</p>
            </div>
            <div className='cancellation-img'>
              <img src="/cancellation-pic.jpg" alt="" />
            </div>
          </div>
        </div>
        
    </div>
    </>
  );
};

export default Contact
