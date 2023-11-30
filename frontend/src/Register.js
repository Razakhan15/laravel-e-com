import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "./Header";

const Register = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  async function send() {
    let item = { name, email, password };
    let result = await fetch("http://localhost:8000/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(item),
    });
    navigate("/login");
  }
  useEffect(() =>{
    if(localStorage.getItem("user-info"))
    navigate('/add');
  },[])
  return (<>
  <Header/>
    <div className="flex flex-col justify-between items-center space-y-5">
      <h1 className="text-4xl">User SignUp</h1>
      <input
        className="w-1/2 p-3 border border-gray-500"
        placeholder="name"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
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

export default Register;
