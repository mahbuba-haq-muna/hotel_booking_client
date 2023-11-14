import  { useContext } from 'react';
import { AuthContext } from '../components/AuthProvider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {

    const{user, loading} = useContext(AuthContext);

    const location = useLocation();
    console.log(location)
    if(loading){
        return <span className="loading loading-ring loading-lg"></span>
    }

    if(user){
        return children;
    }
    return <Navigate to="/login" replace></Navigate>;
    
};

export default PrivateRoute;