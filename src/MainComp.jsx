import { AuthContext } from "./context/AuthContent";
import { useContext } from "react";
import MainLayout from "./components/layout/MainLayout";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

import Home from "./pages/Home";
import List from "./pages/List";
import Register from "./components/Register";
import Login from "./components/Login";

export default function MainComp() {
  const ctx = useContext(AuthContext);
  console.log(ctx.isLoggedIn);
  return (
    <BrowserRouter>
      <MainLayout>
        <Routes>
          <Route path="" exact element={<Navigate to="/home" />} />
          <Route path="/home" exact element={<Home />} />

          {ctx.isLoggedIn && <Route path="/todolist" element={<List />} />}
          <Route
            path="/auth"
            exact
            element={<Navigate to="/auth/register" />}
          />
          {!ctx.isLoggedIn && (
            <Route path="/auth/login" exact element={<Login />} />
          )}
          {!ctx.isLoggedIn && (
            <Route path="/auth/register" exact element={<Register />} />
          )}
          <Route path="*" element={<Navigate to="/home" />} />
        </Routes>
      </MainLayout>
    </BrowserRouter>
  );
}
