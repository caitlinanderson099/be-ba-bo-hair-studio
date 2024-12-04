
import React, { useEffect, useState, useContext } from 'react';
import wooCommerceApi from '../woocommerceApi';
import {CartContext} from '../context/CartContext';
import ClipLoader from 'react-spinners/ClipLoader';
import Seo from '../components/Seo';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [modalProduct, setModalProduct] = useState(null);
  const { addToCart } = useContext(CartContext);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const response = await wooCommerceApi.get('/products');
        setProducts(response.data);
      } catch (error) {
        setError('Failed to fetch products')
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  if (loading) {
      return (
          <div className="loading">
              <ClipLoader color="#D4BC73" size={50} />
          </div>
      );
  }

  if (error) {
    return <div className="error-message">{error}</div>;
  }

  const handleAddToCart = (product) => {
    addToCart(product);
    setModalProduct(product);
  };

  const closeModal = () => {
    setModalProduct(null); // Close the modal
  };
  

  return (
    <> 
     {/* SEO */}
     <Seo title="Shop - Be Ba Bo" description="Explore the shop" />

    <div className='products-grid'>
        {products.map((product) => (
          <div key={product.id} className='product-card'>
            {product.images && product.images.length > 0 && (
              <img 
                src={product.images[0].src} 
                alt={product.images[0].alt || product.name} 
                className='product-img'
              />
            )}
            <div className='product-details'>
              {/* Product Name */}
              <h3>{product.name} {" "} </h3>

              {/* Product Category */}
              <h4> {" "} {product.categories.map((category) => category.name).join(" | ")} </h4>

              {/* Product Prices - Regular and Sale */}
              <div className='price-cont'>
                <h4 className='regular-price'>${(product.prices.regular_price /100).toFixed(2)}</h4>
                <h4>${(product.prices.sale_price /100).toFixed(2)}</h4>
              </div>

              {/* Product Tags */}
              <div className='product-tags'>
                {/* Percentage Tag */}
                <h4 className='product-tag'> {" "} {product.tags[1] && product.tags[1].name}</h4> 
                {/* Sustainable Tag */}
                <h4 className='product-tag'> {product.tags[0] && product.tags[0].name} </h4>
              </div>

              {/* Add To Cart Button */}
              <button className='primary-button' onClick={() => handleAddToCart(product)}>Add to Cart</button>  
            </div>
          </div>
        ))}
        </div>
         {/* Modal */}
      {modalProduct && (
        <div className='modal-overlay'>
          <div className='modal'>
            <h2>Product Added to Cart</h2>
            <p>{modalProduct.name} has been added to your cart.</p>
            {modalProduct.images && modalProduct.images.length > 0 && (
              <img
                src={modalProduct.images[0].src}
                alt={modalProduct.images[0].alt || modalProduct.name}
                className='modal-img'
              />
            )}
            <button className='primary-button' onClick={closeModal}>Close</button>
          </div>
        </div>
      )}
    </>     
  );
};

export default ProductList;

