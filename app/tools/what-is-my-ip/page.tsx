"use client";

import { useEffect, useState } from "react";

export default function WhatIsMyIP() {
  const [ip, setIp] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchIP = async () => {
      try {
        const res = await fetch("https://api64.ipify.org?format=json");
        const data = await res.json();
        setIp(data.ip);
      } catch (err) {
        setIp("Unable to fetch IP");
      } finally {
        setLoading(false);
      }
    };
    fetchIP();
  }, []);

  return (
    <main className="max-w-3xl mx-auto p-10 text-center">
      <h1 className="text-3xl font-bold">What is my IP?</h1>
      <p className="text-gray-600 mt-2">
        Quickly check your public IP address.
      </p>

      <div className="mt-8 p-6 bg-gray-100 rounded-xl text-lg font-mono">
        {loading ? "Loading..." : ip}
      </div>
    </main>
  );
}