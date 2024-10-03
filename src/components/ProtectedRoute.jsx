import { Navigate } from 'react-router-dom';
import { useUserContext } from '../Context/UserContext';

const ProtectedRoute = ({ children }) => {
  const { token } = useUserContext();
  return token ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;
