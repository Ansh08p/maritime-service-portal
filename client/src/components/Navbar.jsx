import { Link, useLocation } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import logo from "../assets/logo.png";

function Navbar() {

  const { token, logout, role } = useContext(AuthContext);
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

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
      onClick={() => setMenuOpen(false)}
      className={`block py-2 ${
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
      className={`sticky top-0 z-50 ${
        scrolled
          ? "bg-slate-900/70 backdrop-blur-lg"
          : "bg-slate-900/90 backdrop-blur-md"
      } text-white`}
    >

      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* LOGO */}
        <Link to="/" className="flex items-center gap-3">
          <img src={logo} className="h-10 w-10 bg-white p-1 rounded" />
          <span className="text-sm font-semibold">
            PMS
          </span>
        </Link>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex items-center gap-8">

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

        {/* RIGHT SIDE */}
        <div className="hidden md:flex items-center gap-3">

          {!token ? (
            <>
              <Link to="/login" className="border px-3 py-1 rounded">
                Login
              </Link>
              <Link to="/register" className="bg-blue-500 px-3 py-1 rounded">
                Register
              </Link>
            </>
          ) : (
            <button onClick={logout} className="bg-white text-black px-3 py-1 rounded">
              Logout
            </button>
          )}

        </div>

        {/* MOBILE BUTTON */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>

      </div>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="md:hidden bg-slate-900 px-6 pb-4">

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
            <button onClick={logout} className="mt-2 text-left">
              Logout
            </button>
          )}

        </div>
      )}

    </nav>
  );
}

export default Navbar;