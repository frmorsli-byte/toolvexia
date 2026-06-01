"use client";

import { useState } from "react";

export default function UUIDGenerator() {
  const [uuid, setUuid] = useState("");

  const generateUUID = () => {
    const newUuid = crypto.randomUUID();
    setUuid(newUuid);
  };

  return (
    <main className="max-w-3xl mx-auto p-10 text-center">
      <h1 className="text-3xl font-bold">UUID Generator</h1>

      <p className="text-gray-600 mt-2">
        Generate a unique UUID instantly for your projects.
      </p>

      <button
        onClick={generateUUID}
        className="mt-6 px-6 py-3 bg-black text-white rounded-xl hover:bg-gray-800"
      >
        Generate UUID
      </button>

      {uuid && (
        <div className="mt-6 p-4 bg-gray-100 rounded-xl break-all">
          {uuid}
        </div>
      )}
    </main>
  );
}