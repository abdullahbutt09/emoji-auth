import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Button from "../components/Shared/Button";

const Header = ({
  logo,
  navItems = [],
  actions,
  sticky = false,
  className = "",
}) => {
  const [open, setOpen] = useState(false);

  return (
    <header
      className={[
        "w-full border-b border-gray-200 bg-white/80 backdrop-blur",
        "dark:border-gray-800 dark:bg-gray-900/80",
        sticky ? "sticky top-0 z-50" : "",
        className,
      ].join(" ")}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6">
        <div className="flex items-center gap-2 font-semibold text-gray-900 dark:text-gray-100">
          {logo}
        </div>

        <nav className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <motion.a
              key={item.label}
              href={item.href}
              whileHover={{ y: -2 }}
              className="text-sm font-medium text-gray-700 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 dark:text-gray-300"
            >
              {item.label}
            </motion.a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">{actions}</div>

        <Button
        onClick={() => setOpen((v) => !v)}
        aria-label="Toggle menu"
        aria-expanded={open}
        variant="ghost"
        size="md"
        className="md:hidden p-2"
        >
        <span className="block h-5 w-5">
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
        </Button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden"
          >
            <div className="space-y-2 border-t border-gray-200 px-4 py-4 dark:border-gray-800">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="block rounded-md px-2 py-2 text-sm font-medium text-gray-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 dark:text-gray-300"
                >
                  {item.label}
                </a>
              ))}
              {actions && <div className="pt-2">{actions}</div>}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;