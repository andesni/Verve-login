import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Title from "./Title";
import LoginButton from "./LoginButton";
import RememberMe from "./RememberMe";
import ToastMessage from "./ToastMessage";
import { login_icons } from "../assets/assets";

const LoginForm = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState(
    location.state?.successMessage || "",
  );

  const TEST_MAIL = "username@test.com";

  // Get password from localStorage, default to 'password123'
  const getStoredPassword = () => {
    return localStorage.getItem("userPassword") || "password123";
  };

  useEffect(() => {
    if (location.state?.successMessage) {
      // Auto-dismiss after 5 seconds - CORRECT SYNTAX
      const timer = setTimeout(() => setSuccessMessage(""), 5000);

      // Clear navigation state
      window.history.replaceState({}, document.title);

      // Cleanup timer on unmount
      return () => clearTimeout(timer);
    }
  }, []);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    setError("");

    const storedPassword = getStoredPassword();

    if (email !== TEST_MAIL || password !== storedPassword) {
      setError("Invalid email or password");
      setTimeout(() => setError(""), 5000);
      return;
    }

    console.log("Log in Success!!");
    navigate("/home");
  };

  return (
    <div>
      {/* Success Toast */}
      <ToastMessage
        message={successMessage}
        type="success"
        onClose={() => setSuccessMessage("")}
      />

      {/*  Error Toast */}
      <ToastMessage message={error} type="error" onClose={() => setError("")} />

      <Title title="Log In" desc="Welcome back!" />

      <form
        onSubmit={handleSubmit}
        className="space-y-4 md:space-y-5 lg:space-y-6"
      >
        {/* Email Input */}
        <div>
          <label htmlFor="email">
            <p className="text-xs md:text-sm lg:text-base text-[#353F50] mb-1.5 md:mb-2">
              Enter Email Address
            </p>
            <input
              type="email"
              id="email"
              placeholder="username@test.com"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setError("");
              }}
              className="bg-[#F3F5F6] hover:bg-[#E1E6ED] rounded h-10 md:h-11 lg:h-12 w-full text-xs md:text-sm lg:text-base px-3 md:px-4 lg:px-4 placeholder-[#848F9F] focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </label>
        </div>

        {/* Password Input */}
        <div>
          <label htmlFor="password">
            <p className="text-xs md:text-sm lg:text-base text-[#353F50] mb-1.5 md:mb-2">
              Enter Password
            </p>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                placeholder="Enter password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  setError("");
                }}
                required
                className="bg-[#F3F5F6] hover:bg-[#E1E6ED] rounded h-10 md:h-11 lg:h-12 w-full text-xs md:text-sm lg:text-base px-3 md:px-4 lg:px-4 placeholder-[#848F9F] pr-10 md:pr-12 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                onClick={togglePasswordVisibility}
                className="absolute top-1/2 right-3 md:right-4 transform -translate-y-1/2 cursor-pointer"
                type="button"
              >
                {showPassword ? (
                  <img
                    src={login_icons.view_password}
                    alt="Hide password"
                    className="w-3 h-3 md:w-4 md:h-4 lg:w-5 lg:h-5"
                  />
                ) : (
                  <img
                    src={login_icons.hide_password}
                    alt="View password"
                    className="w-3 h-3 md:w-4 md:h-4 lg:w-5 lg:h-5"
                  />
                )}
              </button>
            </div>
          </label>
          <RememberMe />
        </div>

        <LoginButton text="Log In" />
      </form>
    </div>
  );
};

export default LoginForm;
