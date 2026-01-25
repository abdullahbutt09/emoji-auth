import { useState } from "react";
import Button from "./Shared/Button";
import { useNavigate } from "react-router-dom";

const emojis = [
  "😀","😎","🥳","😍","🤔",
  "💥","🔥","💎","🎉","🌈",
  "🍕","🎸","🚀","🌸","🐱",
  "🦋","🍀","⚡","🎯","💜"
];

export default function EmojiLogin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState([]);
  const navigate = useNavigate();


  const handleEmojiClick = (emoji) => {
    if (password.length < 4) setPassword([...password, emoji]);
  };

  const clearLast = () => setPassword(password.slice(0, -1));
  const clearAll = () => setPassword([]);

  const handleLogin = () => {
    if (username && password.length === 4) {
      alert(`Logging in ${username} with emoji password: ${password.join("")}`);
      // Add actual login logic here
    } else {
      alert("Enter username and select 4 emojis!");
    }
  };

  return (
    <>
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900 px-4">
      <div className="bg-white dark:bg-gray-800 shadow-lg rounded-2xl p-8 w-full max-w-sm text-center">
        {/* Back Button */}
    <div className="text-left mb-3">
      <Button
        onClick={() => navigate(-1)}
        variant="ghost"
        className="px-4"
      >
        ← Back
      </Button>
    </div>
        <div className="mb-6">
          <span className="inline-block bg-yellow-400 p-3 rounded-full mb-2">
            🔒
          </span>
          <h2 className="text-xl font-bold text-gray-900 dark:text-white">
            Emoji Password Login
          </h2>
        </div>

        {/* Username */}
        <input
          type="text"
          placeholder="Enter your username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full mb-4 px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 focus:ring-2 focus:ring-primary focus:outline-none"
        />

        {/* Emoji password */}
        <div className="flex justify-center gap-2 mb-2">
          {[0,1,2,3].map((i) => (
            <div
              key={i}
              className="w-10 h-10 border-2 border-gray-300 dark:border-gray-600 rounded-lg flex items-center justify-center text-2xl"
            >
              {password[i] || ""}
            </div>
          ))}
        </div>
        <p className="text-xs text-gray-500 mb-4">
          Select 4 emojis in the correct order to log in
        </p>

        {/* Buttons */}
        <div className="flex justify-center gap-2 mb-4">
          <Button
            onClick={clearLast}
            className="px-3 py-1 "
          >
            Clear Last
          </Button>
          <Button
            onClick={clearAll}
            className="px-3 py-1"
            variant="secondary"
          >
            Clear All
          </Button>
        </div>

        {/* Emoji Grid */}
        <div className="grid grid-cols-5 gap-2 mb-6">
          {emojis.map((emoji) => (
            <Button
              key={emoji}
              onClick={() => handleEmojiClick(emoji)}
              className="w-10 h-10 hover:border-white flex items-center justify-center rounded-lg text-2xl"
              variant="neutral"
            >
              {emoji}
            </Button>
          ))}
        </div>

        {/* Login */}
        <Button
          onClick={handleLogin}
          className="w-full py-2 btn text-white rounded-lg transition hover:border-white"
          variant="btn-outlined"
        >
          Log In
        </Button>

        <p className="text-xs text-gray-400 mt-4">HCI Usability Testing Prototype</p>
      </div>
    </div>
    </>
  );
}