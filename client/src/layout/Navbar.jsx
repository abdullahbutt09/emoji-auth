import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = ({ brand, links = [], actions, className = "", sticky = false }) => {
  const [open, setOpen] = useState(false);

  return (
    <nav
      className={[
        className,
        "w-full z-50", // always above content
        sticky ? "sticky top-0 bg-white dark:bg-gray-900 shadow-md" : "",
        "transition-colors", // smooth bg color changes in dark mode
      ].join(" ")}
    >
      {/* Desktop Navbar */}
      <div className="hidden md:flex items-center justify-between max-w-7xl mx-auto h-16 px-4 sm:px-6 border-b border-gray-200 dark:border-gray-800">
        <div className="flex items-center gap-2 font-semibold text-gray-900 dark:text-gray-100">
          {brand}
        </div>
        <ul className="flex items-center gap-6">
          {links.map((link) => (
            <motion.li key={link.label} whileHover={{ y: -2 }}>
              <a
                href={link.href}
                className="text-sm font-medium text-gray-700 dark:text-gray-300 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
              >
                {link.label}
              </a>
            </motion.li>
          ))}
        </ul>
        <div className="flex items-center gap-3">{actions}</div>
      </div>

      {/* Mobile toggle */}
      <div className="flex md:hidden justify-between items-center max-w-7xl mx-auto h-16 px-4 sm:px-6 border-b border-gray-200 dark:border-gray-800">
        <div className="flex items-center gap-2 font-semibold text-gray-900 dark:text-gray-100">
          {brand}
        </div>
        <button
          className="p-2"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          <span className="block h-5 w-5 relative">
            <span
              className={[
                "block h-0.5 w-full bg-current transition-transform",
                open ? "translate-y-2 rotate-45" : "",
              ].join(" ")}
            />
            <span
              className={[
                "mt-1.5 block h-0.5 w-full bg-current transition-opacity",
                open ? "opacity-0" : "",
              ].join(" ")}
            />
            <span
              className={[
                "mt-1.5 block h-0.5 w-full bg-current transition-transform",
                open ? "-translate-y-2 -rotate-45" : "",
              ].join(" ")}
            />
          </span>
        </button>
      </div>

      {/* Slide-in menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ x: "-100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "-100%", opacity: 0 }}
            transition={{ type: "tween", duration: 0.3 }}
            className="md:hidden w-64 bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-800 shadow-lg absolute top-full left-0 z-50"
          >
            <div className="flex flex-col p-4 space-y-4">
              {links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                >
                  {link.label}
                </a>
              ))}
              {actions && <div className="pt-2 flex gap-3">{actions}</div>}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Optional overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.3 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black z-40 md:hidden"
            onClick={() => setOpen(false)}
          />
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;