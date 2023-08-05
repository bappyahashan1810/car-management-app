import React, { useContext } from 'react';
import { AuthContext } from '../../../Context/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
    const { user, loader } = useContext(AuthContext);
    const location = useLocation();
    if (loader) {
        return <div>
            <progress className="progress progress-primary w-56" value={0} max="100"></progress>
            <progress className="progress progress-primary w-56" value="10" max="100"></progress>
            <progress className="progress progress-primary w-56" value="40" max="100"></progress>
            <progress className="progress progress-primary w-56" value="70" max="100"></progress>
            <progress className="progress progress-primary w-56" value="100" max="100"></progress>
        </div>
    }
    if (user?.email) {
        return children;
    }
    return <Navigate to='/login' state={{ from: location }} replace></Navigate>
};

export default PrivateRoute;