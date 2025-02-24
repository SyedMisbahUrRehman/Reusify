import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import UserManagement from "./pages/UserManagement";
import UserDetail from "./pages/UserManagement/detail"
export default function App() {
  return (
   <BrowserRouter>
  <Routes>
  <Route index element={<Home />} />

  {/* <Route element={<AuthLayout />}>
    <Route path="login" element={<Login />} />
    <Route path="register" element={<Register />} />
  </Route> */}

  <Route path="user-management">
    <Route index element={<UserManagement />} />
    <Route path=":slug" element={<UserDetail />} />
  </Route>
</Routes>

   </BrowserRouter>
  );
}
