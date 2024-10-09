
import React, { useState } from "react";

const LoginSignup = () => {
  const [state, setState] = useState("Login");
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const changeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const login = async () => {
    console.log("login function executed", formData);
    let responseData;
    await fetch("https://cartnova.onrender.com/login", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        responseData = data;
      });
    if (responseData.success) {
      localStorage.setItem("auth-token", responseData.token);
      window.location.replace("/");
    } else {
      alert(responseData.error);
    }
  };

  const signup = async () => {
    console.log("signup function executed", formData);
    let responseData;
    await fetch("https://cartnova.onrender.com/signup", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        responseData = data;
      });
    if (responseData.success) {
      localStorage.setItem("auth-token", responseData.token);
      window.location.replace("/");
    } else {
      alert(responseData.error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="border-2 border-gray-50 bg-gray-100">
      <div className="flex justify-center items-center min-h-screen px-4">
        <form
          onSubmit={handleSubmit}
          className="border-2 bg-white shadow-lg rounded-lg p-10 w-full max-w-md"
        >
          <div className="flex flex-col items-center justify-center">
            <h1 className="text-4xl font-bold mb-8">{state}</h1>
            {state === "Sign up" && (
              <input
                name="username"
                value={formData.username}
                onChange={changeHandler}
                type="text"
                placeholder="Username"
                className="border-2 border-gray-200 rounded-lg p-2 mb-6 w-full"
              />
            )}
            <input
              name="email"
              value={formData.email}
              onChange={changeHandler}
              type="text"
              placeholder="Email"
              className="border-2 border-gray-200 rounded-lg p-2 mb-6 w-full"
            />
            <input
              name="password"
              value={formData.password}
              onChange={changeHandler}
              type="password"
              placeholder="Password"
              className="border-2 border-gray-200 rounded-lg p-2 mb-6 w-full"
            />
            <div className="mb-6 flex items-center w-full">
              <input type="checkbox" className="mr-4" />
              <label htmlFor="">
                I accept the{" "}
                <a href="" className="text-blue-800 ml-2 hover:underline">
                  terms and conditions
                </a>
              </label>
            </div>
            <button
              type="submit"
              onClick={() => {
                state === "Login" ? login() : signup();
              }}
              className="bg-blue-700 hover:bg-blue-800 text-white rounded-lg p-2 w-full mb-6 transition duration-200"
            >
              Continue
            </button>
            {state === "Sign up" ? (
              <p className="mb-6">
                Already have an account?{" "}
                <span
                  onClick={() => setState("Login")}
                  className="text-blue-800 ml-2 hover:underline cursor-pointer"
                >
                  Login
                </span>
              </p>
            ) : (
              <p className="mb-6">
                Create an account?{" "}
                <span
                  onClick={() => setState("Sign up")}
                  className="text-blue-800 ml-2 hover:underline cursor-pointer"
                >
                  Click here
                </span>
              </p>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginSignup;
