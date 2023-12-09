import { FC } from "react";

import "./LandingAuth.scss";
import { useNavigate } from "react-router-dom";

export const LandingAuth: FC = () => {
  const navigate = useNavigate();

  return (
    <div className="auth-text">
      <h1>Sign In or Register</h1>

      <div className="auth-text-buttons">
        <button onClick={() => navigate("/login")}>Login</button>
        <button onClick={() => navigate("/register")}>Register</button>
      </div>
    </div>
  );
};
