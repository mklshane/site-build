import { useEffect, useRef, useState } from "react";
import ThemeToggle from "./ThemeToggle";

const links = [
  { title: "Home", index: "#home" },
  { title: "About", index: "#about" },
  { title: "Officers", index: "#officers" },
  { title: "Announcements", index: "#announcements" },
  { title: "Contact", index: "#contact" },
];

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < lastScrollY.current) {
        setShowNavbar(true);
      } else {
        setShowNavbar(false);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-transform duration-300 ${
        showNavbar ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="bg-background py-3 px-10 flex justify-between items-center">
        <p className="text-primary font-bold text-2xl">JPCS</p>
        <div className="flex gap-10 justify-center">
          {links.map((link) => (
            <a
              key={link.index}
              className="link text-foreground font-medium"
              href={link.index}
            >
              {link.title}
            </a>
          ))}
        </div>
        <ThemeToggle />
      </div>
    </nav>
  );
};

export default Navbar;
