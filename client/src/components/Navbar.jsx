import { Link, useLocation } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import logo from "../assets/logo.png";

function Navbar() {

  const { token, logout, role } = useContext(AuthContext);
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false); // mobile menu

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLink = (path, label) => (
    <Link
      to={path}
      onClick={() => setMenuOpen(false)} // close mobile menu
      className={`transition ${
        location.pathname === path
          ? "text-blue-400"
          : "text-gray-300 hover:text-white"
      }`}
    >
      {label}
    </Link>
  );

  return (

    <nav
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-slate-900/70 backdrop-blur-lg shadow-lg"
          : "bg-slate-900/90 backdrop-blur-md"
      } text-white`}
    >

      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">

        {/* LOGO (slightly left + bigger text) */}

        <Link to="/" className="flex items-center gap-3 -ml-2">

          <img
            src={logo}
            alt="PMS Logo"
            className="h-11 w-11 object-contain bg-white p-1 rounded"
          />

          <div>
            <h1 className="text-base font-semibold leading-tight">
              Professional Marine Services
            </h1>
            <p className="text-xs text-gray-400">
              Maritime Solutions
            </p>
          </div>

        </Link>

        {/* NAV LINKS (DESKTOP) */}

        <div className="hidden md:flex items-center gap-10 text-sm font-medium">

          {navLink("/", "Home")}
          {navLink("/services", "Services")}
          {navLink("/ports", "Ports")}
          {navLink("/clients", "Clients")}
          {navLink("/contact", "Contact")}

          <div className="w-px h-5 bg-gray-600"></div>

          {navLink("/products", "Products")}
          {token && navLink("/orders", "Orders")}
          {role === "admin" && navLink("/admin", "Admin")}

        </div>

        {/* AUTH BUTTONS (DESKTOP) */}

        <div className="hidden md:flex items-center gap-3">

          {!token ? (
            <>
              <Link
                to="/login"
                className="px-4 py-1.5 border border-gray-400 rounded-lg hover:bg-white hover:text-black transition"
              >
                Login
              </Link>

              <Link
                to="/register"
                className="px-4 py-1.5 bg-blue-500 rounded-lg hover:bg-blue-600 transition"
              >
                Register
              </Link>
            </>
          ) : (
            <button
              onClick={logout}
              className="px-4 py-1.5 bg-white text-black rounded-lg hover:bg-gray-200 transition"
            >
              Logout
            </button>
          )}

        </div>

        {/* MOBILE MENU BUTTON */}

        <button
          className="md:hidden text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>

      </div>

      {/* MOBILE MENU */}

      {menuOpen && (
        <div className="md:hidden bg-slate-900 px-6 pb-4 space-y-2">

          {navLink("/", "Home")}
          {navLink("/services", "Services")}
          {navLink("/ports", "Ports")}
          {navLink("/clients", "Clients")}
          {navLink("/contact", "Contact")}
          {navLink("/products", "Products")}

          {token && navLink("/orders", "Orders")}
          {role === "admin" && navLink("/admin", "Admin")}

          {!token ? (
            <>
              {navLink("/login", "Login")}
              {navLink("/register", "Register")}
            </>
          ) : (
            <button onClick={logout} className="block text-left mt-2">
              Logout
            </button>
          )}

        </div>
      )}

    </nav>

  );

}

export default Navbar;