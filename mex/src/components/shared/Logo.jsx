import { Link } from "react-router-dom";
import { GraduationCap } from "lucide-react";
import { ROUTES } from "../../constants/routes";

export default function Logo() {
  return (
    <Link to={ROUTES.home} className="logo">
      <span className="logo-mark"><GraduationCap size={18} /></span>
      <span className="logo-text">EduPro</span>
    </Link>
  );
}
