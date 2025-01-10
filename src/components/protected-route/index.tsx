import { Navigate, Outlet } from 'react-router-dom';

const token: string | null = sessionStorage.getItem('token');

const ProtectedRoute = () => {
  return token ? <Outlet /> : <Navigate to="/auth/login" />
}

export default ProtectedRoute;