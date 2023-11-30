import React, { useEffect, useState } from "react";
import Header from "./Header";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  async function send() {
    let item = { email, password };
    console.log(item);
    let result = await fetch("http://localhost:8000/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(item),
    });
    result = await result.json();
    localStorage.setItem("user-info", JSON.stringify(result));
    navigate("/add");
  }
  useEffect(() => {
    if (localStorage.getItem("user-info")) navigate("/add");
  }, []);
  return (
    <>
  <Header/>
    <div className="flex flex-col justify-between items-center space-y-5">
      <h1 className="text-4xl">User Login</h1>
     
      <input
        className="w-1/2 p-3 border border-gray-500"
        placeholder="email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        className="w-1/2 p-3 border border-gray-500"
        placeholder="password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={send} className="bg-gray-500 p-5 text-white font-bold">
        Sign Up
      </button>
    </div>
    </>
  );
};

export default Login;
