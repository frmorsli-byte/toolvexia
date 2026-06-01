"use client";

import { useState } from "react";

export default function PasswordGenerator() {
  const [password, setPassword] = useState("");

  const generatePassword = () => {
    const chars =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";

    let generated = "";

    for (let i = 0; i < 16; i++) {
      generated += chars.charAt(
        Math.floor(Math.random() * chars.length)
      );
    }

    setPassword(generated);
  };

  const copyPassword = async () => {
    await navigator.clipboard.writeText(password);
    alert("Password copied!");
  };

  return (
    <main className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-4xl mx-auto">

        <h1 className="text-4xl font-bold mb-4">
          Password Generator
        </h1>

        <p className="text-gray-600 mb-8">
          Generate strong and secure passwords instantly.
        </p>

        <button
          onClick={generatePassword}
          className="bg-black text-white px-6 py-3 rounded-xl hover:opacity-90"
        >
          Generate Password
        </button>

        {password && (
          <div className="mt-8 bg-white border rounded-2xl p-6">

            <p className="font-mono text-xl break-all mb-4">
              {password}
            </p>

            <button
              onClick={copyPassword}
              className="bg-blue-600 text-white px-5 py-2 rounded-xl"
            >
              Copy Password
            </button>

          </div>
        )}

        <section className="mt-12 bg-white p-6 rounded-2xl border">

          <h2 className="text-2xl font-bold mb-4">
            About This Password Generator
          </h2>

          <p className="text-gray-700 leading-7">
            This free password generator helps you create strong,
            secure and random passwords instantly for better online security.
          </p>

        </section>

      </div>
    </main>
  );
}