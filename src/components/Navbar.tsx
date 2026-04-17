import { forwardRef } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "@/assets/logo.png";

const Navbar = forwardRef<HTMLElement>((_, ref) => {
  const location = useLocation();

  return (
    <nav ref={ref} className="fixed top-0 left-0 right-0 z-50 flex items-center justify-center px-4 py-5">
      <div className="flex items-center justify-between bg-background rounded-2xl px-6 py-3 shadow-sm max-w-2xl w-full">
        <Link to="/">
          <img src={logo} alt="LocalCreative" className="h-4 sm:h-5 w-auto" />
        </Link>
        <div className="flex items-center gap-3 sm:gap-6">
          <Link
            to="/work"
            className={`text-xs sm:text-sm font-medium hover:opacity-70 transition-opacity ${location.pathname.startsWith("/work") ? "opacity-100" : "opacity-80"}`}
          >
            Work
          </Link>
          <Link
            to="/about"
            className={`text-xs sm:text-sm font-medium hover:opacity-70 transition-opacity ${location.pathname === "/about" ? "opacity-100" : "opacity-80"}`}
          >
            About
          </Link>
          <Link
            to="/contact"
            className="text-xs sm:text-sm font-semibold bg-primary text-primary-foreground px-3 sm:px-4 py-1.5 sm:py-2 rounded-xl hover:opacity-90 transition-opacity"
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
});

Navbar.displayName = "Navbar";

export default Navbar;
