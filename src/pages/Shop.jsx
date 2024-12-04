import ProductList from '../components/ProductList';
import PageHeader from '../components/PageHeader';
import Seo from '../components/Seo';



const Shop = () => {
    return (
        <>
         {/* SEO */}
         <Seo title="Our Shop - Be Ba Bo" description="This is shop page for Be Ba Bo Hair Studio" />
        <div className='shop-page'>
            <PageHeader title='Our Shop' image_url={'/shop-bg.jpg'}/>
            <div className='shop-content'>
                <h2 className='page-title'> Shop All Products </h2>
                {/* Product Grid */}
                <div id="productCont">
                    <ProductList/>
                </div>
            </div>   
        </div>
        </>
    );
};

export default Shop;