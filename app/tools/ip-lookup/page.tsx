"use client";

import { useEffect, useState } from "react";

export default function IPLookup() {
  const [ip, setIp] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getIP = async () => {
      try {
        const res = await fetch("https://api64.ipify.org?format=json");
        const data = await res.json();
        setIp(data.ip);
      } catch (error) {
        setIp("Unable to fetch IP");
      } finally {
        setLoading(false);
      }
    };

    getIP();
  }, []);

  return (
    <main className="max-w-3xl mx-auto p-10 text-center">
      <h1 className="text-3xl font-bold">IP Address Lookup</h1>

      <p className="text-gray-600 mt-2">
        Find your public IP address instantly.
      </p>

      <div className="mt-8 p-6 bg-gray-100 rounded-xl">
        {loading ? "Loading..." : ip}
      </div>
    </main>
  );
}