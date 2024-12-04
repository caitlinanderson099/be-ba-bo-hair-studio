import PageHeader from '../components/PageHeader'
import axios from 'axios';
import { useState } from 'react';
import Seo from '../components/Seo'

const formEndPoint = import.meta.env.VITE_APP_WP_API_SECOND_REVIEW_FORM_ENDPOINT;



const ReviewPage = () => {

    const ReviewForm = () => {
        const [submitted, setSubmitted] = useState(false);
        const [error, setError] = useState(false);
        const [name, setName] = useState('');
        const [email, setEmail] = useState('');
        const [service, setService] = useState('');
        const [message, setMessage] = useState('');
  
        const handleSubmit = (event) => {
          event.preventDefault();
          const testForm = new FormData();
            testForm.append('your-name', name);
            testForm.append('your-email', email);
            testForm.append('your-service', service);
            testForm.append('your-message', message);
      
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
        }
  
        if (submitted) {
          return (
            <div className='success-message'>
              <h3>Thank you for review!</h3>
              <p>We really appreciate your feedback!</p>
            </div>
          );
        }
      
        if (error) {
          return (
            <div className='error-message'>
              <h3>Error! Couldn't post your review</h3>
              <p>Please try again later:(</p>
            </div>
          )
        }
  
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
                        Submit Review
                      </button>
            </div>
          </form>
        );
    };




  return (
    <>
     {/* SEO */}
     <Seo title="Review - Be Ba Bo" description="This is review page for Be Ba Bo Hair Studio" />
    <div className='review-page'>
        <PageHeader title='Leave a Review' image_url={'/review-bg.jpg'}/>
        <div className='review-content'>
            <h2>Tell us what you think of our business!</h2>

            <div className='review-form'>
                <ReviewForm/>
            </div>
        </div>
    </div>
    </>
  )
}

export default ReviewPage
