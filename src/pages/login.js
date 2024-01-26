import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login({ authenticate }) {
  const [password, setPassword] = useState("");
  const [attemptedSubmit, setAttemptedSubmit] = useState(false);
  const navigate = useNavigate();

  const handlePasswordChange = (event) => {
    setAttemptedSubmit(false);
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setAttemptedSubmit(true);
    if (authenticate(password)) {
      navigate("/designsystem");
    } else {
      setPassword("");
    }
  };

  return (
    <div className="page">
      <div className="page-title-container">
        {/* <h1 className="page-title"></h1> */}
        {/* <h2 className="page-subtitle"></h2> */}
        {/* <h2 className="page-category"></h2> */}
        <p className="page-desc">
          This page is password protected, please enter password.
        </p>
        <form onSubmit={handleSubmit} className="page-desc-password">
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
          />
          <button type="submit">Submit</button>
        </form>
        {attemptedSubmit && !authenticate(password) && (
          <p className="page-validate">Password incorrect, please try again.</p>
        )}
      </div>
    </div>
  );
}

export default Login;
