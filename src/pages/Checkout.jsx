import PageHeader from "../components/PageHeader";
import { useNavigate } from "react-router-dom";
import { useState, useContext } from "react";
import { CartContext } from "../context/CartContext";
import Seo from '../components/Seo'

const Checkout = () => {

  const [isModalVisible, setIsModalVisible] = useState(false);
  const navigate = useNavigate();
  const { clearCart } = useContext(CartContext);

  const handleBack = (e) => {
    e.preventDefault();
    navigate('/cart');
  };

  const handleConfirmation = () => {
    setIsModalVisible(true); // Show the confirmation modal
  };

  const closeModal = () => {
    setIsModalVisible(false); // Hide the modal
    clearCart();
    window.scrollTo(0, 0);
    navigate('/');
  };

  return (
    <>
     {/* SEO */}
     <Seo title="Checkout - Be Ba Bo" />
    <div className="checkout-page">
        <PageHeader title='Checkout' image_url={'/checkout-bg.jpg'}/>
        <div className="checkout-content">
            <h2 className="page-title"> Checkout Page </h2>
            <div className="question-section">
              <h2>Are You Sure You Want To Purchase?</h2>
              <div className="buttons-cont">
                <button className="secondary-button" onClick={handleBack}>No, I'm Not Sure</button>
                <button className="primary-button" onClick={handleConfirmation}>Yes, I'm Sure</button>
              </div>
            </div>
        </div>
        {/* Conditional rendering of the modal */}
      {isModalVisible && (
        <div className="confirmation-modal">
          <div className="modal-content">
            <h2>Order Has Been Placed!</h2>
            <h3>Thank you for shopping at Be Ba Bo Hair Studio</h3>
            <button className="primary-button" onClick={closeModal}>Close</button>
          </div>
        </div>
      )}
    </div>
    </>
  );
};

export default Checkout;
