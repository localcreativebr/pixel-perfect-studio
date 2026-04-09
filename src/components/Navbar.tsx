import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-center px-4 py-5 bg-background">
      <div className="flex items-center justify-between bg-background rounded-2xl px-6 py-3 shadow-sm max-w-2xl w-full">
        <Link to="/" className="text-lg font-bold tracking-tight">
          LocalCreative
        </Link>
        <div className="flex items-center gap-6">
          <Link
            to="/work"
            className={`text-sm font-medium hover:opacity-70 transition-opacity ${location.pathname.startsWith("/work") ? "opacity-100" : "opacity-80"}`}
          >
            Work
          </Link>
          <Link
            to="/about"
            className={`text-sm font-medium hover:opacity-70 transition-opacity ${location.pathname === "/about" ? "opacity-100" : "opacity-80"}`}
          >
            About
          </Link>
          <Link
            to="/contact"
            className="text-sm font-semibold bg-primary text-primary-foreground px-4 py-2 rounded-xl hover:opacity-90 transition-opacity"
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
