import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../views/login/Login";
import Post from "../views/post/Post";

function Router() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/post" element={<Post />} />
    </Routes>
  );
}

export default Router;
