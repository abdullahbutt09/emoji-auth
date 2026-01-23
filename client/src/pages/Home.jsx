import { motion } from "framer-motion";
import Button from "../components/Shared/Button";

const Home = () => {
  return (
    <div className="w-full text-gray-900 dark:text-gray-100">
      {/* Hero Section */}
      <section className="bg-white dark:bg-gray-900 py-20 px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <h1 className="text-4xl font-extrabold sm:text-5xl">
            Emoji-Based Authentication
          </h1>
          <p className="mt-4 text-lg sm:text-xl text-gray-600 dark:text-gray-400">
            Memorably secure passwords using sequences of emojis. Fun, visual, and hard to guess.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Button variant="primary" size="lg">Get Started</Button>
            <Button variant="secondary" size="lg">View GitHub</Button>
          </div>
        </motion.div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-5xl text-center"
        >
          <h2 className="text-3xl font-bold mb-12">How It Works</h2>
          <div className="grid gap-8 sm:grid-cols-3">
            <div className="flex flex-col items-center">
              <div className="text-5xl mb-4">🎯</div>
              <h3 className="font-semibold text-lg mb-2">Choose Emojis</h3>
              <p className="text-gray-600 dark:text-gray-400 text-center">Select a sequence of emojis that you’ll use as your password.</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-5xl mb-4">🔒</div>
              <h3 className="font-semibold text-lg mb-2">Create Password</h3>
              <p className="text-gray-600 dark:text-gray-400 text-center">Save your emoji sequence securely and start using it to login.</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-5xl mb-4">✅</div>
              <h3 className="font-semibold text-lg mb-2">Login</h3>
              <p className="text-gray-600 dark:text-gray-400 text-center">Authenticate easily by entering the same emoji sequence.</p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Why Emoji-Auth */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 dark:bg-gray-900">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-5xl text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-9">Why Emoji-Auth</h2>
          <div className="grid gap-8 sm:grid-cols-4 mt-15">
            <motion.div whileHover={{ y: -4 }} className="p-6 bg-white dark:bg-gray-900 rounded-lg border-2 transition-shadow">
              <div className="text-4xl mb-2">🛡️</div>
              <p>No traditional passwords</p>
            </motion.div>
            <motion.div whileHover={{ y: -4 }} className="p-6 bg-white dark:bg-gray-900 rounded-lg border-2 transition-shadow">
              <div className="text-4xl mb-2">🔐</div>
              <p>Harder to brute-force</p>
            </motion.div>
            <motion.div whileHover={{ y: -4 }} className="p-6 bg-white dark:bg-gray-900 rounded-lg border-2 transition-shadow">
              <div className="text-4xl mb-2">🧠</div>
              <p>Easy to remember</p>
            </motion.div>
            <motion.div whileHover={{ y: -4 }} className="p-6 bg-white dark:bg-gray-900 rounded-lg border-2 transition-shadow shadow-white">
              <div className="text-4xl mb-2">🎉</div>
              <p>Fun UX experience</p>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Security & Tech */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <h2 className="text-3xl font-bold mb-6">Security & Technology</h2>
          <ul className="space-y-4 text-gray-600 dark:text-gray-400">
            <li>Emoji sequences are hashed for secure storage</li>
            <li>Appwrite backend handles authentication</li>
            <li>Built with modern React, Tailwind CSS, and Framer Motion</li>
          </ul>
        </motion.div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 dark:bg-gray-700">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <h2 className="text-3xl font-bold mb-6">Ready to get started?</h2>
          <Button variant="primary" size="lg">Get Started</Button>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="py-6 px-4 sm:px-6 lg:px-8 bg-gray-100 dark:bg-gray-900 text-center text-gray-700 dark:text-gray-300">
        <p className="mb-2 font-semibold">Emoji-Auth</p>
        <a href="https://github.com" className="underline hover:text-gray-900 dark:hover:text-gray-100 transition-colors">GitHub</a>
        <p className="mt-2 text-sm">&copy; {new Date().getFullYear()} Emoji-Auth. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;