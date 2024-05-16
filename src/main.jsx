import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

import { ProductsProvider } from './context/products_context';
import { FilterProvider } from './context/filter_context';
import { CartProvider } from './context/cart_context';
import { UserProvider } from './context/user_context';
import { Auth0Provider } from '@auth0/auth0-react';
ReactDOM.createRoot(document.getElementById('root')).render(
    <Auth0Provider
        domain='dev-7ul7sc3hjw2mvz6b.us.auth0.com'
        clientId='5I1q4SvVZkVtYhicIdMNEKnY7hZ4mBV6'
        cacheLocation='localstorage'
        authorizationParams={{
            redirect_uri: window.location.origin,
        }}
    >
        <UserProvider>
            <ProductsProvider>
                <FilterProvider>
                    <CartProvider>
                        <App />
                    </CartProvider>
                </FilterProvider>
            </ProductsProvider>
        </UserProvider>
    </Auth0Provider>
);
