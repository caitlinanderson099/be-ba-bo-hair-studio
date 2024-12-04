import { useState, useEffect } from "react";
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { ClipLoader } from "react-spinners";

const baseURL = import.meta.env.VITE_WP_API_BASEURL;
const formEndPoint = import.meta.env.VITE_APP_WP_API_REVIEW_FORM_ENDPOINT;


const SinglePage = () => {

    const {id} = useParams();
    const [service, setService] = useState(null);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    const endpoint = `${baseURL}/services/${id}?_embed`;

    useEffect(() => {
        axios.get(`${endpoint}`)
        .then((response) => {
            console.log(response.data);
            setService(response.data);
            setLoading(false); 
        })
        .catch((error) => console.log(error))
    }, [id]);

    // Duration Taxonomy
    const Duration = ({ service }) => {
      const [taxonomies, setTaxonomies] = useState([]);
  
      useEffect(() => {
          if (service._links && service._links['wp:term']) {
              const taxonomyEndpoint = service._links['wp:term'][0]?.href;
              if (taxonomyEndpoint) {
                  axios.get(taxonomyEndpoint)
                      .then((res) => {
                          setTaxonomies(res.data);
                      })
                      .catch((err) => console.log('Error fetching taxonomy:', err));
              }
          } else {
              console.log('No taxonomy links for this service:', service);
          }
      }, [service]);

      if (!taxonomies.length) {
          return (
              <h4>...</h4>
          )
      }
  
      const renderedTaxonomies = taxonomies.map((taxonomy, index) => {
          return (
              <div key={index}>
                  <h4 className="taxonomy-term-pill">
                      {taxonomy.name}
                  </h4>
              </div>
          );
      });
  
      return (
          <div>
              {renderedTaxonomies}
          </div>
      );
    };

    const handleBook = (e) => {
      e.preventDefault();
      window.scrollTo(0, 0);
      navigate('/contact');
    };

    const handleBack = (e) => {
      e.preventDefault();
      window.scrollTo(0, 0);
      navigate(-1);
    };

    const ReviewForm = () => {
      const [submitted, setSubmitted] = useState(false);
      const [error, setError] = useState(false);
      const [name, setName] = useState('');
      const [email, setEmail] = useState('');
      const [message, setMessage] = useState('');

      const handleSubmit = (event) => {
        event.preventDefault();
        const testForm = new FormData();
          testForm.append('your-name', name);
          testForm.append('your-email', email);
          testForm.append('your-message', message);
    
        axios.post(formEndPoint, testForm, {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          }
        })
    
        .then(function (response) {
          console.log(response);
          setSubmitted(true);
        })
        .catch(function (error) {
          console.log(error);
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

    function getFeaturedImage(service) {
        if (service && service._embedded && service._embedded['wp:featuredmedia'] && service._embedded['wp:featuredmedia'][0].source_url) {
          return service._embedded['wp:featuredmedia'][0].source_url;
        } else {
          return 'https://via.placeholder.com/150';
        }
    };

    if (loading) {
        return <div className="loading">
        <ClipLoader className="loading-icon" color="#D4BC73" size={40}/>
        </div>
    };

    const SingleHeader = ({title, image_url}) => {
      return (
          <div className="single-header" style={{backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.5)), url(${image_url})`}}>
              <button className="primary-button" onClick={handleBack}> Back </button>
              <h1> {title} </h1>
          </div>
      )
    };



  return (
    <div className='single-page'>
      <SingleHeader title={service.title.rendered} image_url={getFeaturedImage(service)} />
      <div className='single-content'>

        {/* Service Information Section */}
        <div className="information-section">
           {/* Service Details */}
              <div className='service-details'>
                <div className="img-cont">
                  <img src={getFeaturedImage(service)} alt="service photo" />
                </div>
                <div className="content-cont">
                <h2> {service.title.rendered} </h2>

                <h3>Service Details</h3>
                <div className="service-info">
              <h4 className="service-tag">{service.acf.service_categories} </h4>
              <div className="service-prices service-tag">
                <h4 className="regular-price"> {service.acf.service_regular_prices} </h4>
                <h4> {service.acf.service_sale_prices} </h4>
              </div>
              <div className="service-tag">
              {service._links && service._links['wp:term'] ? (
                <Duration service={service}/>
              ) : (
                <p>Taxonomies not available for this service.</p>
              )}
              </div>
                </div>
                  <div className="details" dangerouslySetInnerHTML={{ __html: service.content.rendered }}/>
                  <button className="primary-button" onClick={handleBook}>Book an Appointment</button>
                </div>
              </div>
        </div>

        
          <div className='review-section'>
            <h2 className='title'>Leave a Review of This Service!</h2>
            <div className='sub-form'>
              <h3>How Was Your Experience?</h3>
              <ReviewForm/>
            </div>
          </div>
          <div className='image-section'>
            <img src="/single-img1.jpg" alt="" />
            <img src="/single-img2.jpg" alt="" />
          </div>
        </div>
    </div>
  )
}

export default SinglePage
