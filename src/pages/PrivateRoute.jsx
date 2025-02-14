import { useAuth0, withAuthenticationRequired } from '@auth0/auth0-react';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
    const { user } = useAuth0();
    if (!user) return <Navigate to={'/'} />;
    return children;
};

export default PrivateRoute;
