import { Link, NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { LayoutDashboard, LogOut } from "lucide-react";
import Logo from "./Logo";
import Avatar from "./Avatar";
import { logout, selectIsLoggedIn, selectUser } from "../../features/auth/authSlice";
import { ROUTES } from "../../constants/routes";

const NAV_ITEMS = [
  { label: "Home", to: ROUTES.home, end: true },
  { label: "Courses", to: ROUTES.courses },
  { label: "Favorites", to: ROUTES.favorites },
];

export default function Header() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const user = useSelector(selectUser);

  const handleLogout = () => {
    dispatch(logout());
    navigate(ROUTES.home);
  };

  return (
    <header className="header">
      <div className="header-inner">
        <div className="header-left">
          <Logo />
          <nav className="nav">
            {NAV_ITEMS.map(({ label, to, end }) => (
              <NavLink
                key={to}
                to={to}
                end={end}
                className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
              >
                {label}
              </NavLink>
            ))}
          </nav>
        </div>

        <div className="header-right">
          {isLoggedIn ? (
            <>
              <Link to={ROUTES.dashboard} className="nav-link with-icon">
                <LayoutDashboard size={16} /> Dashboard
              </Link>
              <span className="divider-v" />
              <span className="header-user">
                <Avatar name={user.name} size={32} />
                <span>{user.name}</span>
              </span>
              <button className="btn btn-outline btn-sm" onClick={handleLogout}>
                <LogOut size={14} /> Logout
              </button>
            </>
          ) : (
            <Link to={ROUTES.login} className="btn btn-primary btn-sm">Log In</Link>
          )}
        </div>
      </div>
    </header>
  );
}
