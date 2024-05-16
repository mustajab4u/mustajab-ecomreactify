import { Filters, ProductList, Sort, PageHero } from '../components';

const ProductsPage = () => {
    return (
        <section className=''>
            <PageHero title='Product' />
            <div className='flex flex-col sm:flex-row p-8 py-6'>
                <Filters />
                <div>
                    <Sort />
                    <ProductList />
                </div>
            </div>
        </section>
    );ev
    
};

export default ProductsPage;
