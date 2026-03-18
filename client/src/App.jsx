import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Clients from "./pages/Clients";
import Ports from "./pages/Ports";
import Contact from "./pages/Contact";

import Products from "./pages/Products";
import Orders from "./pages/Orders";
import AdminDashboard from "./pages/AdminDashboard";
import AdminRoute from "./components/AdminRoute";

import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  return (
    <BrowserRouter>

    <Toaster position="top-right" />

      <div className="bg-slate-50 min-h-screen flex flex-col">

        <Navbar />

        <div className="flex-grow">

          <Routes>

            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/clients" element={<Clients />} />
            <Route path="/ports" element={<Ports />} />
            <Route path="/contact" element={<Contact />} />

            <Route path="/products" element={<Products />} />
            <Route path="/orders" element={<Orders />} />
            <Route
  path="/admin"
  element={
    <AdminRoute>
      <AdminDashboard />
    </AdminRoute>
  }
/>

            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />

          </Routes>

        </div>

        <Footer />

      </div>

    </BrowserRouter>
  );
}

export default App;