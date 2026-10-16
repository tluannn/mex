import { Link } from "react-router-dom";
import { ROUTES } from "../constants/routes";

export default function NotFoundPage() {
  return (
    <div className="notfound">
      <h1>404</h1>
      <p>This page doesn't exist or has been moved.</p>
      <Link to={ROUTES.home} className="btn btn-primary">Back to Home</Link>
    </div>
  );
}
