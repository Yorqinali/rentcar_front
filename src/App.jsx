// import { useState } from 'react'
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Signup from "./components/signup/signup";
import List from "./components/list/List";
import Home from "./components/home/Home";
import Login from "./components/login/Login";
import Dashboard from "./components/dashboard/dashboard";
import { useState } from "react";

function App() {
  // const [count, setCount] = useState(0)
  const [user, setUser] = useState(null);

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/list" element={<List />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login setUser={setUser} />} />
        <Route
          path="dashboard"
          element={
            <Dashboard user={user} />
          }
        />
      </Routes>
    </>
  );
}

export default App;
