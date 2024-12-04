import React, {useContext}from 'react';
import PageHeader from './PageHeader';
import { CartContext } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';
import Seo from '../components/Seo';

const Cart = () => {

  const {cart, updateCart, removeFromCart} = useContext(CartContext);
  const navigate = useNavigate();

  const handleIncrement = (item) => {
    updateCart(item.id, item.quantity + 1);
  };

  const handleDecrement = (item) => {
    if (item.quantity > 1) {
      updateCart(item.id, item.quantity - 1);
    } else {
      removeFromCart(item.id);
    }
  };

  const handleCheckout = (e) => {
    e.preventDefault();
    navigate('/checkout');
  };

  const handleContinue = (e) => {
    e.preventDefault();
    navigate('/shop');
  };

  const handleShop = (e) => {
    e.preventDefault();
    navigate('/shop');
  };

   // Calculate total amount
  const totalAmount = cart.reduce(
    (acc, item) => acc + (item.prices.sale_price / 100) * item.quantity,
    0
  );

  return (
    <>
    {/* SEO */}
    <Seo title="My Cart - Be Ba Bo"/>
    <div className='cart-page'>
        <PageHeader title='My Cart' image_url={'/cart-bg.jpg'}/>
        <div className='cart-content'>
          <h2 className='page-title'> My Cart </h2>
          <div>
            {cart.length === 0 ? (
              <div className='empty-message'>
              <h3>Oops! There Are No Items In Your Cart!</h3>
              <h4>Browse Our Shop To Add Items</h4>
              <button className='primary-button' onClick={handleShop}>Browse Our Shop</button>
              </div>
            ): (
              <div className='cart-cont'>
                <div className='cart-inner'>
                  <div className='cart-grid'>
                    {cart.map((item) => (
                    <div key={item.id} className='cart-card'>
                      {item.images && item.images.length > 0 && (
                                <img
                                    src={item.images[0].src}
                                    alt={item.images[0].alt || item.name}
                                />  
                            )} 
                      <div className='cart-details'>
                        <h2>{item.name}</h2>
                        <h4>
                          {" "}
                          {item.categories
                          .map((category) => category.name)
                          .join(", ")}
                        </h4>
                        <div className='price-cont'>
                          <h4 className='regular-price'>${(item.prices.regular_price /100).toFixed(2)}</h4>
                          <h4>${(item.prices.sale_price /100).toFixed(2)}</h4>
                        </div>  
                        <p>Quantity: {item.quantity}</p>
                        <div className='cart-buttons'>
                          <button className='primary-button' onClick={() => handleDecrement(item)}>-</button>
                          <button className='primary-button' onClick={() => handleIncrement(item)}>+</button>
                          <button className='primary-button' onClick={() => removeFromCart(item.id)}>Remove</button>
                        </div>  
                      </div>
                    </div>
                  ))}
                  </div>
                  <div className='cart-total-section'>
                  <h2 className='title'>Total Amount:</h2>  
                  <h4>${totalAmount.toFixed(2)} GST(15%)</h4>   
                  <div className="buttons-cont">
                    <button className='secondary-button' onClick={handleContinue}>Continue Shopping</button>  
                    <button className='primary-button' onClick={handleCheckout}>Proceed To Checkout</button>
                  </div>      
                </div>
                </div>
              </div>
            )}
          </div>
        </div>
    </div>
    </>
  );
}; 

export default Cart;
