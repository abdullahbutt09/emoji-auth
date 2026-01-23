import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Button from "./Button";

const Navbar = ({ brand, links = [], actions, sticky = false, className = "" }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav
      className={[
        "w-full border-b border-gray-200 bg-white/80 backdrop-blur dark:border-gray-800 dark:bg-gray-900/80",
        sticky ? "sticky top-0 z-50" : "",
        className,
      ].join(" ")}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 h-16 sm:px-6">
        <div className="flex items-center gap-2 font-semibold text-gray-900 dark:text-gray-100">
          {brand}
        </div>

        <ul className="hidden gap-6 md:flex">
          {links.map((link) => (
            <motion.li key={link.label} whileHover={{ y: -2 }}>
              <a
                href={link.href}
                className="text-sm font-medium text-gray-700 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 dark:text-gray-300"
              >
                {link.label}
              </a>
            </motion.li>
          ))}
        </ul>

        <div className="hidden md:flex items-center gap-3">{actions}</div>

        <Button
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          variant="ghost"
          size="md"
          className="md:hidden p-2"
        >
          <span className="block h-5 w-5 relative">
            <span
              className={[
                "absolute block h-0.5 w-full bg-current transition-transform",
                menuOpen ? "translate-y-2 rotate-45" : "",
              ].join(" ")}
            />
            <span
              className={[
                "absolute top-2 block h-0.5 w-full bg-current transition-opacity",
                menuOpen ? "opacity-0" : "",
              ].join(" ")}
            />
            <span
              className={[
                "absolute top-4 block h-0.5 w-full bg-current transition-transform",
                menuOpen ? "-translate-y-2 -rotate-45" : "",
              ].join(" ")}
            />
          </span>
        </Button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.ul
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden border-t border-gray-200 dark:border-gray-800 px-4 py-4 space-y-2"
          >
            {links.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="block rounded-md px-2 py-2 text-sm font-medium text-gray-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 dark:text-gray-300"
                >
                  {link.label}
                </a>
              </li>
            ))}
            {actions && <li>{actions}</li>}
          </motion.ul>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar
