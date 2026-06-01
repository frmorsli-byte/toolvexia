"use client";

import { useState } from "react";

export default function Base64Tool() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");

  const encode = () => {
    try {
      setOutput(btoa(input));
    } catch {
      setOutput("Invalid input");
    }
  };

  const decode = () => {
    try {
      setOutput(atob(input));
    } catch {
      setOutput("Invalid Base64 string");
    }
  };

  return (
    <main className="max-w-3xl mx-auto p-10 text-center">
      <h1 className="text-3xl font-bold">Base64 Encoder / Decoder</h1>

      <p className="text-gray-600 mt-2">
        Encode or decode text to Base64 instantly.
      </p>

      <textarea
        className="w-full mt-6 p-3 border rounded-xl"
        rows={5}
        placeholder="Enter text or Base64..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      <div className="flex gap-4 justify-center mt-4">
        <button
          onClick={encode}
          className="px-6 py-2 bg-black text-white rounded-xl"
        >
          Encode
        </button>

        <button
          onClick={decode}
          className="px-6 py-2 bg-gray-700 text-white rounded-xl"
        >
          Decode
        </button>
      </div>

      {output && (
        <div className="mt-6 p-4 bg-gray-100 rounded-xl break-all">
          {output}
        </div>
      )}
    </main>
  );
}