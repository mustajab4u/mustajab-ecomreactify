import React, { useContext, useEffect, useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Loading } from '../components';
const UserContext = React.createContext();
export const UserProvider = ({ children }) => {
    const {
        isLoading,
        error,
        logout,
        isAuthenticated,
        user,
        loginWithRedirect,
    } = useAuth0();
    useEffect(() => {
        if (isAuthenticated) {
            setUser(user);
        } else setUser(false);
    }, [isAuthenticated]);
    const [User, setUser] = useState(null);
    if (isLoading) return <Loading />;
    if (error) return <div>Oops... {error.message}</div>;
    const value = { loginWithRedirect, logout, User };
    return (
        <UserContext.Provider value={value}>{children}</UserContext.Provider>
    );
};
// make sure use
export const useUserContext = () => {
    return useContext(UserContext);
};
