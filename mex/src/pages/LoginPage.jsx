import { useState } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { GraduationCap } from "lucide-react";
import { login, selectIsLoggedIn } from "../features/auth/authSlice";
import { validateLogin } from "../utils/validateLogin";
import { ROUTES } from "../constants/routes";

export default function LoginPage() {
  const dispatch = useDispatch();
  const location = useLocation();
  const isLoggedIn = useSelector(selectIsLoggedIn);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  // Về trang người dùng định vào trước đó, mặc định là dashboard (một nơi duy nhất: ROUTES)
  const redirectTo = location.state?.from || ROUTES.dashboard;

  // Đăng nhập thành công -> isLoggedIn = true -> tự điều hướng
  if (isLoggedIn) return <Navigate to={redirectTo} replace />;

  const canSubmit = email.trim() !== "" && password !== "";

  const handleSubmit = (event) => {
    event.preventDefault();
    const message = validateLogin(email.trim(), password);
    if (message) {
      setErrorMessage(message);
      return;
    }
    const trimmedEmail = email.trim();
    dispatch(login({ email: trimmedEmail, name: trimmedEmail.split("@")[0] }));
  };

  return (
    <div className="login">
      <span className="login-mark"><GraduationCap size={24} /></span>
      <h1>Welcome back</h1>
      <p className="muted">Sign in to access your courses and dashboard</p>

      <form className="login-card" onSubmit={handleSubmit} noValidate>
        <label>
          Email address
          <input
            type="email"
            placeholder="you@example.com"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </label>
        <label>
          Password
          <input
            type="password"
            placeholder="••••••••"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </label>

        {errorMessage && <p className="form-error" role="alert">{errorMessage}</p>}

        <div className="login-row">
          <label className="check">
            <input type="checkbox" /> Remember me
          </label>
          <a href="#forgot" className="link-primary">Forgot password?</a>
        </div>

        <button type="submit" className="btn btn-primary btn-block" disabled={!canSubmit}>
          Sign in
        </button>

        <p className="login-or"><span>Don't have an account?</span></p>
        <a href="#signup" className="link-primary center">Create a free account</a>
      </form>

      <p className="demo-note">Demo credentials: Any valid email and password (min 6 chars)</p>
    </div>
  );
}
