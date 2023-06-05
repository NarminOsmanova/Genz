import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Dashboard from "./pages/admin/Dashboard";
import Login from "./pages/admin/Login";
import AddBlog from "./pages/admin/update/AddBlog";
import EditBlog from "./pages/admin/update/EditBlog";
import Contact from "./pages/Contact";
import Home from "./pages/Home";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/dashboard" element={<Dashboard />}></Route>
        <Route path="/dashboard/add" element={<AddBlog />}></Route>
        <Route path="/dashboard/edit/:id" element={<EditBlog />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
