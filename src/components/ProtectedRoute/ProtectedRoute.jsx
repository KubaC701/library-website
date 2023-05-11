import { Navigate } from 'react-router-dom';
import useAuthContext from '../../contexts/AuthContext';

const ProtectedRoute = ({ children }) => {
  const { user } = useAuthContext();

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedRoute;
