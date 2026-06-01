"use client";

import { useState } from "react";

export default function JsonFormatter() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");

  const formatJson = () => {
    try {
      const parsed = JSON.parse(input);
      const formatted = JSON.stringify(parsed, null, 2);
      setOutput(formatted);
    } catch (error) {
      setOutput("Invalid JSON");
    }
  };

  const copyOutput = async () => {
    await navigator.clipboard.writeText(output);
    alert("Copied!");
  };

  const clearAll = () => {
    setInput("");
    setOutput("");
  };

  return (
    <main className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-5xl mx-auto">

        <h1 className="text-4xl font-bold mb-4">
          JSON Formatter
        </h1>

        <p className="text-gray-600 mb-8">
          Format, validate and beautify JSON instantly with Toolvexia.
        </p>

        <textarea
          className="w-full h-64 p-4 border rounded-xl mb-4 font-mono bg-white"
          placeholder="Paste your JSON here..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />

        <div className="flex gap-4 mb-6 flex-wrap">
          <button
            onClick={formatJson}
            className="bg-black text-white px-6 py-3 rounded-xl hover:opacity-90"
          >
            Format JSON
          </button>

          <button
            onClick={copyOutput}
            className="bg-blue-600 text-white px-6 py-3 rounded-xl hover:opacity-90"
          >
            Copy
          </button>

          <button
            onClick={clearAll}
            className="bg-red-500 text-white px-6 py-3 rounded-xl hover:opacity-90"
          >
            Clear
          </button>
        </div>

        <textarea
          className="w-full h-64 p-4 border rounded-xl font-mono bg-white"
          value={output}
          readOnly
        />

        <section className="mt-12 bg-white p-6 rounded-2xl border">
          <h2 className="text-2xl font-bold mb-4">
            About This JSON Formatter
          </h2>

          <p className="text-gray-700 leading-7">
            This free online JSON formatter helps developers format,
            validate and beautify JSON data instantly.
            Toolvexia tools are fast, simple and optimized for productivity.
          </p>
        </section>

      </div>
    </main>
  );
}