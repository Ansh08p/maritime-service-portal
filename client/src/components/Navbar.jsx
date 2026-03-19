import { Link, useLocation } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import logo from "../assets/logo.png";

function Navbar() {

  const { token, logout, role } = useContext(AuthContext);
  const location = useLocation();

  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  let timeout;

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleEnter = () => {
    clearTimeout(timeout);
    setServicesOpen(true);
  };

  const handleLeave = () => {
    timeout = setTimeout(() => {
      setServicesOpen(false);
    }, 200); // small delay (fixes flicker)
  };

  const navLink = (path, label) => (
    <Link
      to={path}
      onClick={() => setMenuOpen(false)}
      className="relative group"
    >
      <span
        className={`${
          location.pathname === path
            ? "text-blue-400"
            : "text-gray-300 group-hover:text-white"
        } transition`}
      >
        {label}
      </span>
      <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-blue-400 transition-all group-hover:w-full"></span>
    </Link>
  );

  return (

    <nav
      className={`sticky top-0 z-50 transition ${
        scrolled
          ? "bg-slate-900/70 backdrop-blur-lg shadow-lg"
          : "bg-slate-900/90 backdrop-blur-md"
      } text-white`}
    >

      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">

        {/* LOGO */}
        <Link to="/" className="flex items-center gap-3 -ml-2">
          <img src={logo} className="h-11 w-11 bg-white p-1 rounded" />
          <div>
            <h1 className="text-base font-semibold">
              Professional Marine Services
            </h1>
            <p className="text-xs text-gray-400">
              Maritime Solutions
            </p>
          </div>
        </Link>

        {/* DESKTOP NAV */}
        <div className="hidden md:flex items-center gap-10 text-sm font-medium">

          {navLink("/", "Home")}
          {navLink("/about", "About")}

          {/* SERVICES DROPDOWN */}
          <div
            className="relative"
            onMouseEnter={handleEnter}
            onMouseLeave={handleLeave}
          >

            <div className="relative group cursor-pointer">
              <span className="text-gray-300 group-hover:text-white transition">
                Services
              </span>
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-blue-400 transition-all group-hover:w-full"></span>
            </div>

            {servicesOpen && (
              <div className="absolute top-10 left-0 bg-slate-800 p-4 rounded-xl shadow-xl space-y-3 w-56">

                <Link to="/services" className="block hover:text-blue-400">
                  Provisions
                </Link>
                <Link to="/services" className="block hover:text-blue-400">
                  Bonded Stores
                </Link>
                <Link to="/services" className="block hover:text-blue-400">
                  Deck & Engine Stores
                </Link>
                <Link to="/services" className="block hover:text-blue-400">
                  Safety Equipments
                </Link>
                <Link to="/services" className="block hover:text-blue-400">
                  Sludge & Garbage Removal
                </Link>

              </div>
            )}

          </div>

          {navLink("/ports", "Ports")}
          {navLink("/clients", "Clients")}
          {navLink("/contact", "Contact")}

          <div className="w-px h-5 bg-gray-600"></div>

          {navLink("/products", "Products")}
          {token && navLink("/orders", "Orders")}
          {role === "admin" && navLink("/admin", "Admin")}

        </div>

        {/* AUTH */}
        <div className="hidden md:flex items-center gap-3">
          {!token ? (
            <>
              <Link to="/login" className="px-4 py-1.5 border rounded-lg">
                Login
              </Link>
              <Link to="/register" className="px-4 py-1.5 bg-blue-500 rounded-lg">
                Register
              </Link>
            </>
          ) : (
            <button onClick={logout} className="px-4 py-1.5 bg-white text-black rounded-lg">
              Logout
            </button>
          )}
        </div>

        {/* HAMBURGER */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex flex-col gap-1"
        >
          <span className={`h-[2px] w-6 bg-white transition ${menuOpen ? "rotate-45 translate-y-1.5" : ""}`}></span>
          <span className={`h-[2px] w-6 bg-white transition ${menuOpen ? "opacity-0" : ""}`}></span>
          <span className={`h-[2px] w-6 bg-white transition ${menuOpen ? "-rotate-45 -translate-y-1.5" : ""}`}></span>
        </button>

      </div>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="md:hidden bg-slate-900/95 px-6 py-6 space-y-4 border-t border-gray-700">

          {navLink("/", "Home")}
          {navLink("/about", "About")}
          {navLink("/services", "Services")}
          {navLink("/ports", "Ports")}
          {navLink("/clients", "Clients")}
          {navLink("/contact", "Contact")}

          <div className="border-t border-gray-700 my-2"></div>

          {navLink("/products", "Products")}
          {token && navLink("/orders", "Orders")}
          {role === "admin" && navLink("/admin", "Admin")}

          <div className="border-t border-gray-700 pt-4 flex flex-col gap-3">

            {!token ? (
              <>
                <Link to="/login" className="w-full text-center border py-2 rounded-lg">
                  Login
                </Link>
                <Link to="/register" className="w-full text-center bg-blue-500 py-2 rounded-lg">
                  Register
                </Link>
              </>
            ) : (
              <button onClick={logout} className="w-full bg-white text-black py-2 rounded-lg">
                Logout
              </button>
            )}

          </div>

        </div>
      )}

    </nav>
  );
}

export default Navbar;