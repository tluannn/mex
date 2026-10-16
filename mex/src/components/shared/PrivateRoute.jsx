import { Navigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../features/auth/authSlice";
import { ROUTES } from "../../constants/routes";

export default function PrivateRoute({ children }) {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const location = useLocation();

  if (!isLoggedIn) {
    return <Navigate to={ROUTES.login} replace state={{ from: location.pathname }} />;
  }
  return children;
}
