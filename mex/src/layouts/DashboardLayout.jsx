import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { LayoutDashboard, BookOpen, Settings, LogOut } from "lucide-react";
import Header from "../components/shared/Header";
import Avatar from "../components/shared/Avatar";
import { useDispatch, useSelector } from "react-redux";
import { logout, selectUser } from "../features/auth/authSlice";
import { ROUTES } from "../constants/routes";

const MENU = [
  { label: "Overview", to: ROUTES.dashboard, icon: LayoutDashboard, end: true },
  { label: "My Courses", to: ROUTES.myCourses, icon: BookOpen },
  { label: "Settings", to: ROUTES.settings, icon: Settings },
];

export default function DashboardLayout() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const navigate = useNavigate();

  const handleSignOut = () => {
    dispatch(logout());
    navigate(ROUTES.home);
  };

  return (
    <div className="app-shell">
      <Header />
      <div className="dash">
        <aside className="dash-sidebar">
          <p className="dash-menu-label">MENU</p>
          <nav className="dash-menu">
            {MENU.map(({ label, to, icon: Icon, end }) => (
              <NavLink
                key={to}
                to={to}
                end={end}
                className={({ isActive }) => `dash-link ${isActive ? "active" : ""}`}
              >
                <Icon size={18} /> {label}
              </NavLink>
            ))}
          </nav>

          <div className="dash-user">
            <div className="dash-user-info">
              <Avatar name={user.name} size={36} />
              <div>
                <strong>{user.name}</strong>
                <small>student</small>
              </div>
            </div>
            <button className="dash-signout" onClick={handleSignOut}>
              <LogOut size={16} /> Sign Out
            </button>
          </div>
        </aside>

        <section className="dash-content">
          <Outlet />
        </section>
      </div>
    </div>
  );
}
