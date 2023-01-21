import React from "react";
import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function Home(props) {
  const Navigate = useNavigate();

  const handleLogin = () => {
    Navigate("/login");
  };

  if (props.isLoggedIn) {
    return <div>Home</div>;
  } else {
    return (
      <div>
        {/* <Navigate to="/login" /> */}
        Please Log in <button onClick={handleLogin}>Login</button>
      </div>
    );
  }
}
