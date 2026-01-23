import { motion } from "framer-motion";

const Footer = ({ 
  logo, 
  navItems = [], 
  copyright, 
  socialLinks = [], 
  className = "" 
}) => {
  const footerBaseClasses = "bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800";
  const footerClasses = `${footerBaseClasses} ${className}`;

  return (
    <footer className={footerClasses}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          {/* Logo */}
          <div className="flex-shrink-0">
            {logo}
          </div>

          {/* Navigation */}
          <nav className="flex flex-wrap justify-center gap-6">
            {navItems.map((item, index) => (
              <motion.a
                key={index}
                href={item.href}
                whileHover={{ y: -1 }}
                whileTap={{ scale: 0.98 }}
                className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white text-sm font-medium transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded"
              >
                {item.label}
              </motion.a>
            ))}
          </nav>

          {/* Social Links */}
          {socialLinks.length > 0 && (
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded"
                  aria-label={link.name}
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>
          )}
        </div>

        {/* Copyright */}
        {copyright && (
          <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-800 text-center">
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              {copyright}
            </p>
          </div>
        )}
      </div>
    </footer>
  );
};

export default Footer;