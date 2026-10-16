import { useSelector } from "react-redux";
import { selectUser } from "../features/auth/authSlice";

export default function SettingsPage() {
  const user = useSelector(selectUser);

  return (
    <>
      <h1>Settings</h1>
      <p className="muted">Manage your account information.</p>
      <div className="panel settings">
        <label>
          Display name
          <input type="text" value={user.name} readOnly />
        </label>
        <label>
          Email address
          <input type="email" value={user.email} readOnly />
        </label>
      </div>
    </>
  );
}
