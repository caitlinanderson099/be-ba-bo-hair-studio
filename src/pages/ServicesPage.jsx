// Basic Imports
import { useEffect, useState } from "react";
import axios from "axios";
import PageHeader from "../components/PageHeader";
import { useNavigate } from "react-router-dom";
import ClipLoader from "react-spinners/ClipLoader";
import Seo from '../components/Seo'

// Base URL Variable
const baseURL = import.meta.env.VITE_WP_API_BASEURL;

const ServicesPage = () => {
    // Variables
    const [services, setServices] = useState([]);
    const [loading, setLoading] = useState(true);
    const [filteredServices, setFilteredServices] = useState([]);
    const [serviceCategories, setServiceCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState("All");

    const navigate = useNavigate();
    const endpoint = `${baseURL}/services?_embed`;

    // Fetching Services From EndPoint and Extracting The Unique Service Categories
    useEffect(() => {
        axios
            .get(endpoint)
            .then((res) => {
                const data = res.data;
                setServices(data);
                setFilteredServices(data);
                setLoading(false);

                // Extract unique service categories
                const categories = [
                    ...new Set(data.map((service) => service.acf.service_categories))
                ];
                setServiceCategories(["All", ...categories]);
            })
            .catch((error) => console.log(error));
    }, []);

     // Handle Dropdown Change
    const handleFilterChange = (e) => {
        const category = e.target.value;
        setSelectedCategory(category);

        if (category === "All") {
            setFilteredServices(services);
        } else {
            setFilteredServices(
                services.filter((service) => service.acf.service_categories === category)
            );
        }
    };

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
                <p> ...</p>
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

    // Navigate to Booking Page
    const handleBook = (e) => {
        e.preventDefault();
        window.scrollTo(0, 0);
        navigate('/contact');
    };

    // Mapped Out Services
    const Services = ({services}) => {
        const mappedServices = services.map((service, index) => {
            return (
                <div key={service.slug + "-" + index} className='service-card'>
                    <img src={getFeaturedImage(service)} alt={service.title.rendered} />

                    <div className="service-details">
                        <h3 className='title'> {service.title.rendered} </h3>
                        <h4>{service.acf.service_categories}</h4>

                        <div className="prices-cont">
                            <h4 className="regular-price">{service.acf.service_regular_prices}</h4>
                            <h4>{service.acf.service_sale_prices}</h4>
                        </div>

                        <div>
                            {service._links && service._links['wp:term'] ? (
                                <Duration service={service} />
                            ) : (
                                <p>Taxonomies not available for this service.</p>
                            )}
                        </div>

                        <div className="buttons-cont">
                            <button className="read-more secondary-button"> <a href={`#service/${service.id}`}> Read More </a> </button>   
                            <button className="primary-button" onClick={handleBook}>Book Now</button>
                        </div>   
                    </div>

                </div> 
            );
        });

        return (
            <>
            {mappedServices}
            </>
        )
    };

    // Get WP Featured Image
    function getFeaturedImage(service) {
        if (service && service._embedded && service._embedded['wp:featuredmedia'] && service._embedded['wp:featuredmedia'][0].source_url) {
        return service._embedded['wp:featuredmedia'][0].source_url;
        } else {
        return 'https://via.placeholder.com/150';
        }
    };


    // Master Return
    return (
        <>
         {/* SEO */}
         <Seo title="Our Services - Be Ba Bo" description="This is all the services for Be Ba Bo Hair Studio" />
        <div className="services-page">
            <PageHeader title='Our Services' image_url={'/services-bg.jpg'}/>
            <div className="services-content">

                <h2 className="page-title">Explore Our Services</h2>

                 {/* Dropdown Filter */}
                 <div className="filter-container">
                    <label htmlFor="service-filter">Service Type:</label>
                    <select
                        id="service-filter"
                        value={selectedCategory}
                        onChange={handleFilterChange}
                    >
                        {serviceCategories.map((category, index) => (
                            <option key={index} value={category}>
                                {category}
                            </option>
                        ))}
                    </select>
                </div>
  
                 {/* Service Cards */}
                <div id="serviceCont">
                    {loading ? (
                        <div className="loading">
                            <ClipLoader className="loading-icon" color="#D4BC73" size={40}/>
                        </div>
                    ) : (
                        <Services services={filteredServices} />
                    )}
                </div>

            </div>
        </div>
        </>
    );

};

export default ServicesPage;