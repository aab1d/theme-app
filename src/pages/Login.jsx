import { useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = () => {
    login();
    navigate("/dashboard");
  };

  return (
    <div className="page login-page">
      <h1>Login</h1>
      <p>Please login to access the dashboard.</p>
      <button onClick={handleLogin}>Log In</button>
    </div>
  );
};

export default Login;
