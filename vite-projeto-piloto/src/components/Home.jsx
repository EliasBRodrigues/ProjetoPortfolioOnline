import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import Admin from "./user/Admin";
import { AuthProvider } from "./context/AuthContext";
import Login from "./login/Login";
import PrivateRoute from "./service/PrivateRoute";
import React from "react";
import User from "./user/User";

function Home() {
  return (
    <div>
      <AuthProvider>
        <Router>
          <Routes>
            <Route path="/*" element={<Login />} />
            <Route path="/user/*" element={<PrivateRoute><User /></PrivateRoute>}/>
            <Route path="/admin/*" element={<PrivateRoute><Admin /></PrivateRoute>}/> 
          </Routes>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default Home;
