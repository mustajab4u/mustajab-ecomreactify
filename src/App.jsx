import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar, Sidebar, Footer, AddToCart } from './components';
import {
    HomePage,
    AboutPage,
    CartPage,
    ErrorPage,
    ProductsPage,
    CheckoutPage,
    SingleProductPage,
    PrivateRoute,
} from './pages';
function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route exact path='/' element={<HomePage />} />
                <Route path='/about' element={<AboutPage />} />
                <Route path='/cart' element={<CartPage />} />
                <Route path='/products' element={<ProductsPage />} />
                <Route
                    path='/checkout'
                    element={
                        <PrivateRoute>
                            <CheckoutPage />
                        </PrivateRoute>
                    }
                />
                <Route path='/product/:id' element={<SingleProductPage />} />
                <Route path='*' element={<ErrorPage />} />
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;
