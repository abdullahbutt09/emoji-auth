import { motion } from "framer-motion";
import Button from "../components/Shared/Button";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import Typewriter from "typewriter-effect";


const Home = () => {
  const navItems = [
    { label: "Features", href: "#features" },
    { label: "GitHub", href: "https://github.com/abdullahbutt09" },
  ];

  const footerNavItems = [
    { label: "Privacy", href: "#" },
    { label: "Terms", href: "#" },
    { label: "Docs", href: "#" },
  ];

  return (
    <div className="w-full text-gray-900 dark:text-gray-100 min-h-screen flex flex-col bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-950">
      <Header
        sticky
        logo={<span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">Emoji-Auth</span>}
        navItems={navItems}
        actions={
          <div className="flex gap-3 items-center justify-center">
            <Button variant="secondary" size="sm">Sign in</Button>
            <Button variant="primary" size="sm">Get started</Button>
          </div>
        }
      />

      {/* Hero Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 flex-grow">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h1 className="text-xl md:text-6xl font-extrabold tracking-tight p-2">
              <Typewriter
                options={{
                  strings: [
                    "Passwords, Reimagined 🧠 with Emojis 🤓",
                    "Secure Authentication 🚀, Simplified ☕",
                    "Goodbye Passwords 👋 Hello Emojis 🔐",
                  ],
                  autoStart: true,
                  loop: true,
                  delay: 70,
                  deleteSpeed: 40,
                }}
              />
            </h1>

            <p className="mt-6 text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Replace complex passwords with memorable emoji sequences. Secure, fun, and surprisingly strong.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
              <Button variant="primary" size="lg" className="px-8 py-3">
                Create Your Emoji Pass
              </Button>
              <Button variant="secondary" size="lg" className="px-8 py-3">
                View on GitHub →
              </Button>
            </div>
          </motion.div>

          {/* Hero visual mockup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            className="mt-16 relative"
          >
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 p-6 max-w-2xl mx-auto">
              <div className="flex justify-center space-x-3 text-4xl">
                <span>🔒</span>
                <span>🚀</span>
                <span>🦄</span>
                <span>🍕</span>
                <span>✨</span>
              </div>
              <p className="mt-6 text-gray-700 dark:text-gray-300 text-center font-medium">
                Your password:{" "}
                <span className="font-mono bg-gray-100 dark:bg-gray-700 px-3 py-1.5 rounded-lg">
                  🔒🚀🦄🍕✨
                </span>
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* How It Works */}
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              How It Works
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Simple, secure, and intuitive — no more forgotten passwords.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: "🎯", title: "Pick Emojis", desc: "Choose 4–6 emojis that form a story only you remember." },
              { icon: "🔐", title: "Secure Storage", desc: "We hash your sequence — never store raw emojis." },
              { icon: "✅", title: "Login Anywhere", desc: "Enter your emoji sequence to authenticate instantly." },
            ].map((step, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -8, scale: 1.03 }}
                className="group bg-gray-50 dark:bg-gray-800/50 p-8 rounded-2xl border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all duration-300"
              >
                <div className="text-5xl mb-5 group-hover:scale-110 transition-transform">{step.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">{step.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Emoji-Auth */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50/30 to-purple-50/30 dark:from-gray-900 dark:to-gray-950">
        <div className="max-w-5xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4"
          >
            Why Developers Love Emoji-Auth
          </motion.h2>
          <p className="text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
            Security meets delight in every interaction.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { emoji: "🛡️", label: "Phishing-Resistant" },
              { emoji: "🧠", label: "Memorable" },
              { emoji: "⚡", label: "Fast Login" },
              { emoji: "🎉", label: "Delightful UX" },
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -8, scale: 1.03 }}
                className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700"
              >
                <div className="text-3xl mb-3">{item.emoji}</div>
                <p className="text-sm font-medium text-gray-900 dark:text-white">{item.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer
        logo={<span className="text-lg font-bold text-gray-900 dark:text-white">Emoji-Auth</span>}
        navItems={footerNavItems}
        copyright={`© ${new Date().getFullYear()} Emoji-Auth. Open source & secure.`}
      />
    </div>
  );
};

export default Home;