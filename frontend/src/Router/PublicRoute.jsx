import { Navigate } from 'react-router-dom';

const PublicRoute = ({ children }) => {
  //   const { isAuthenticated } = useAuth();

  const isAuthenticated = false;
  if (isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  // If user is not authenticated, show the public route
  return children;
};

export default PublicRoute;
