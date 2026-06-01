"use client";

import { useState } from "react";

export default function UsernameGenerator() {
  const [username, setUsername] = useState("");

  const adjectives = [
    "cool",
    "fast",
    "smart",
    "dark",
    "silent",
    "bright",
    "happy",
    "fancy",
    "wild",
    "epic"
  ];

  const nouns = [
    "dev",
    "coder",
    "ninja",
    "master",
    "player",
    "builder",
    "creator",
    "hacker",
    "wizard",
    "pilot"
  ];

  const generateUsername = () => {
    const adj = adjectives[Math.floor(Math.random() * adjectives.length)];
    const noun = nouns[Math.floor(Math.random() * nouns.length)];
    const number = Math.floor(Math.random() * 999);

    setUsername(`${adj}${noun}${number}`);
  };

  return (
    <main className="max-w-3xl mx-auto p-10 text-center">
      <h1 className="text-3xl font-bold">Username Generator</h1>

      <p className="text-gray-600 mt-2">
        Generate unique usernames instantly for gaming, social media or apps.
      </p>

      <button
        onClick={generateUsername}
        className="mt-6 px-6 py-3 bg-black text-white rounded-xl hover:bg-gray-800"
      >
        Generate Username
      </button>

      {username && (
        <div className="mt-6 p-4 bg-gray-100 rounded-xl text-lg font-mono">
          {username}
        </div>
      )}
    </main>
  );
}