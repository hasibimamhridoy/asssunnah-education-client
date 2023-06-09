import React, { useContext, useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../ContextProvider/AuthContextProvider";
import GoogleIcon from "@mui/icons-material/Google";
import Button from "../../../components/Button/Button";
import { saveUser } from "../../../api/auth";

const Login = () => {
  const { handleManualLogin, handleGoogleRegister, user } =
    useContext(AuthContext);
  const loc = useLocation();
  const [error, setError] = useState("");
  const location = useLocation();
  const fromPath = location.state?.from?.pathname || "/";
  const navigate = useNavigate();

  const handleGoogle = () => {
    handleGoogleRegister()
      .then((result) => {
        const user = result.user;
        saveUser(user)
        navigate(fromPath);
      })
      .catch((error) => {
        // Handle Errors here.
        setError(error.errorMessage);
      });
  };

  return (
    <section className="h-screen">
      <button onClick={handleGoogle}>Goole Login</button>
    </section>
  );
};

export default Login;
