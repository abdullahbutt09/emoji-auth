import React from "react";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import { Link } from "react-router-dom";
import Button from "../components/Shared/Button";

export default function Home() {
  const navItems = [
    { label: "Features", href: "#features" },
    { label: "Working", href: "#how-it-works" },
  ];

  const actions = (
    <>
      <Button className="btn btn-primary">Sign Up</Button>
      <Button to={"/login"} className="btn btn-outline">Login</Button>
    </>
  );

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Header
        logo={<span className="text-xl font-bold">Emoji-Auth</span>}
        navItems={navItems}
        actions={actions}
        sticky
      />

      <main>
        {/* Your page content */}
        <section
        id="hero"
        className="relative min-h-[90vh] flex items-center justify-center bg-linear-to-b from-gray-900 via-gray-800 to-gray-900"
      >
        {/* Subtle glow effect */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(99,102,241,0.15),transparent_60%)]" />

        {/* Content */}
        <div className="relative z-10 max-w-4xl text-center px-6">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-6">
            Passwords Are Dead.
            <br />
            <span className="text-primary">Authenticate with Emojis</span>
          </h1>

          <p className="text-gray-300 text-lg md:text-xl mb-8">
            Emoji-Auth is a secure, memorable authentication system designed
            for modern applications and developers.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
            className="px-8 btn-outline"
            variant="primary">
              Get Started
            </Button>
            {/* <button className="btn btn-outline btn-white px-8">
              Read Docs
            </button> */}
          </div>

          {/* Trust text */}
          <p className="mt-10 text-sm text-gray-400">
            Open-source • Developer-friendly • Secure by design
          </p>
        </div>
      </section>

      <div className="w-full h-1 my-5">
        <div className="h-1 bg-linear-to-r from-primary via-purple-500 to-pink-500 animate-[slide_2s_ease-in-out_infinite]"></div>
      </div>

      <section
        id="features"
        className="py-24 px-6 bg-gray-50 dark:bg-gray-900"
      >
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Why Emoji-Auth?
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              A modern authentication system designed for usability, security,
              and developer experience.
            </p>
          </div>

          {/* Features grid */}
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {/* Feature 1 */}
            <div className="rounded-2xl p-6 bg-white dark:bg-gray-800 shadow-sm hover:shadow-md transition">
              <div className="text-3xl mb-4">🔐</div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Passwordless
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                No more weak or reused passwords. Users authenticate using
                secure emoji patterns.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="rounded-2xl p-6 bg-white dark:bg-gray-800 shadow-sm hover:shadow-md transition">
              <div className="text-3xl mb-4">🧠</div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Easy to Remember
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Emoji sequences are naturally memorable, reducing login
                friction and reset requests.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="rounded-2xl p-6 bg-white dark:bg-gray-800 shadow-sm hover:shadow-md transition">
              <div className="text-3xl mb-4">⚡</div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Developer Friendly
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Simple API, clean docs, and easy integration with modern
                frontend frameworks.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="w-full h-1 my-5">
        <div className="h-1 bg-linear-to-r from-primary via-purple-500 to-pink-500 animate-[slide_2s_ease-in-out_infinite]"></div>
      </div>

      <section
        id="how-it-works"
        className="py-24 px-6 bg-gray-50 dark:bg-gray-900"
      >
        
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              How Emoji-Auth Works
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              A simple and secure authentication flow designed for humans.
            </p>
          </div>

          {/* Grid */}
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {/* Step 1 */}
            <div className="rounded-2xl p-6 bg-white dark:bg-gray-800 shadow-sm hover:shadow-md transition">
              <div className="text-3xl mb-4">😀</div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Choose Emojis
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Users create a unique emoji sequence instead of a traditional password.
              </p>
            </div>

            {/* Step 2 */}
            <div className="rounded-2xl p-6 bg-white dark:bg-gray-800 shadow-sm hover:shadow-md transition">
              <div className="text-3xl mb-4">🔐</div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Secure Encoding
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Emoji patterns are hashed and stored securely — never in plain text.
              </p>
            </div>

            {/* Step 3 */}
            <div className="rounded-2xl p-6 bg-white dark:bg-gray-800 shadow-sm hover:shadow-md transition">
              <div className="text-3xl mb-4">⚡</div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Instant Login
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Users log in faster with a memorable emoji pattern — no resets needed.
              </p>
            </div>
          </div>
        </div>
      </section>

    <div className="w-full h-1 my-5">
      <div className="h-1 bg-linear-to-r from-primary via-purple-500 to-pink-500 animate-[slide_2s_ease-in-out_infinite]"></div>
    </div>

    <section
      id="cta"
      className="py-24 px-6 bg-gray-50 dark:bg-gray-900"
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
          Ready to get started?
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-8">
          Start using Emoji-Auth today and make authentication secure, simple, and fun.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button 
          className="px-8"
          variant="primary">
            Get Started
          </Button>
          
          <Button 
          className="btn-outline px-8"
          variant="primary"
          to={"/login"}>
            Login
          </Button>
        </div>
      </div>
    </section>

    <Footer />

      </main>
    </div>
  );
}