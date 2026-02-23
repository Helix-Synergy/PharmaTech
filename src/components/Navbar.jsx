
import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo.png";
import "../Styles/GoogleTranslate.css";

const Navbar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const nav_links = [
    { name: "Home", link: "/" },
    { name: "About", link: "/about-global-pharmaceutical-conclave/" },
    { name: "Executive Panel", link: "/executive-panel-members/" },
    { name: "Tracks", link: "/pharmaceutical-conference-tracks/" },
    { name: "Orators", link: "/world-pharmaceutical-summit-orators" },
    { name: "Schedule", link: "/pharmaceutical-event-schedule" },
    { name: "Venue", link: "/venue" },
    { name: "Event Partners", link: "/event_partners" },
    { name: "Contact", link: "/contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      requestAnimationFrame(() => {
        setScrolled(window.scrollY > 80);
      });
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  return (
    <header className="bg-white sticky top-0 z-50 w-full shadow-sm">
      <div className="flex items-center justify-evenly px-2 py-2 md:py-2 transition-all duration-300">
        {/* Logo */}
        <div
          className={`transition-all duration-300 ${scrolled ? "h-20" : "h-20"
            }`}
        >
          <img
            src={logo}
            alt="Pharma Tech Logo"
            className="rounded-full  object-cover transition-all duration-300"
            loading="lazy"
            style={{
              height:
                isOpen && window.innerWidth < 1024
                  ? "5rem" // smaller when burger menu is open
                  : scrolled
                    ? "5rem"
                    : "8rem",
              width:
                isOpen && window.innerWidth < 1024
                  ? "6rem"
                  : scrolled
                    ? "6rem"
                    : "8rem",
              marginTop:
                isOpen && window.innerWidth < 1024
                  ? "0.5rem"
                  : scrolled
                    ? "0rem"
                    : "1rem",
              border:
                isOpen && window.innerWidth < 1024
                  ? "none"
                  : scrolled
                    ? "none"
                    : "2px solid #7ab326 ",
              backgroundColor:
                isOpen && window.innerWidth < 1024
                  ? "transparent"
                  : scrolled
                    ? "transparent"
                    : "white",
              padding:
                isOpen && window.innerWidth < 1024
                  ? "0px"
                  : scrolled
                    ? "0px"
                    : "4px",
            }}
          />
        </div>

        {/* Desktop Navigation - large screens only */}
        <nav
          className={`hidden lg:flex justify-between items-center text-lg font-bold-100 ${scrolled ? "gap-8 ml-4" : "gap-6 ml-0"
            }`}
        >
          {nav_links.map((item, index) => (
            <Link
              key={index}
              to={item.link}
              className={`hover-underline-animation transition pb-1 ${location.pathname === item.link
                ? "text-one font-bold border-b-2 border-one"
                : "text-gray-700 hover:text-accent border-b-2 border-transparent"
                }`}
              style={{
                marginRight: scrolled ? "0px" : "4px",
              }}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Desktop Right Section - large screens only */}
        <div className="hidden lg:flex items-center gap-5">
          <div className="flex items-center gap-1">
            <Link
              to="https://helixconferences.com/buy-a-ticket"
              className="py-2 px-8 text-accent rounded-full bg-one text-white transition"
              target="blank"
            >
              Register
            </Link>
            <div className="flex flex-col items-start justify-center">
              <div
                id="google_translate_element"
                className="font-sm text-one"
              ></div>
            </div>
          </div>
        </div>

        {/* Mobile/Tablet Burger Menu Button */}
        <div className="lg:hidden ml-auto z-300">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile/Tablet Navigation Drawer */}
      {isOpen && (
        <div className="lg:hidden bg-white px-4 pb-4 space-y-4 shadow-md">
          {nav_links.map((item, index) => (
            <Link
              key={index}
              to={item.link}
              className={`block text-sm transition ${location.pathname === item.link
                  ? "text-one font-bold"
                  : "text-gray-800 hover:text-accent"
                }`}
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </Link>
          ))}
          <div className="flex flex-col items-center gap-2">
            <div id="google_translate_element" className="mt-2"></div>
            <Link
              to="https://helixconferences.com/buy-a-ticket"
              className="block w-full border border-accent text-center py-2 rounded-full text-accent hover:bg-one hover:text-white transition"
            >
              Register
            </Link>
            <div
              id="google_translate_element"
              className="font-sm text-one"
            ></div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;