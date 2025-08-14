import {useAuthStore} from "../store/auth";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const { user, logout } = useAuthStore();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Welcome, {user}!</h2>
      <p>This is your dashboard.</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}