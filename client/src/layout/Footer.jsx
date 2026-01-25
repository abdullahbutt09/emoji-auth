import React from "react";
import { Github, Twitter, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-50 dark:bg-gray-900 py-8 px-6 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        
        {/* Logo / Name */}
        <div className="text-xl font-bold text-gray-900 dark:text-white">
          Emoji-Auth
        </div>

        {/* Links */}
        <div className="flex gap-6 text-gray-600 dark:text-gray-400">
          <a href="#features" className="hover:text-gray-900 dark:hover:text-white transition">
            Features
          </a>
          <a href="#how-it-works" className="hover:text-gray-900 dark:hover:text-white transition">
            How it Works
          </a>
        </div>

        {/* Social Icons */}
        <div className="flex gap-4">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition">
            <Github className="w-5 h-5" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition">
            <Twitter className="w-5 h-5" />
          </a>
          <a href="mailto:contact@example.com" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition">
            <Mail className="w-5 h-5" />
          </a>
        </div>
      </div>
      {/* Copyright */}
          <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-800 text-center">
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              {`© ${new Date().getFullYear()} Emoji-Auth. All rights reserved.`}
            </p>
          </div>
    </footer>
  );
}