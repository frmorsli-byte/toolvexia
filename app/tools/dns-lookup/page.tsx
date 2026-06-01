"use client";

import { useState } from "react";

export default function DNSLookup() {
  const [domain, setDomain] = useState("");
  const [records, setRecords] = useState<string[] | null>(null);
  const [loading, setLoading] = useState(false);

  const fetchDNS = async () => {
    setLoading(true);
    setRecords(null);
    try {
      const res = await fetch(
        `https://dns.google/resolve?name=${domain}&type=A`
      );
      const data = await res.json();
      if (data.Answer) {
        setRecords(data.Answer.map((r: any) => r.data));
      } else {
        setRecords(["No records found"]);
      }
    } catch (err) {
      setRecords(["Error fetching DNS"]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="max-w-3xl mx-auto p-10 text-center">
      <h1 className="text-3xl font-bold">DNS Lookup Tool</h1>
      <p className="text-gray-600 mt-2">
        Lookup A records for any domain quickly.
      </p>

      <input
        type="text"
        className="mt-6 w-full p-3 border rounded-xl"
        placeholder="Enter domain (e.g. example.com)"
        value={domain}
        onChange={(e) => setDomain(e.target.value)}
      />

      <button
        onClick={fetchDNS}
        className="mt-4 px-6 py-2 bg-black text-white rounded-xl hover:bg-gray-800"
      >
        Lookup
      </button>

      {loading && <p className="mt-4">Loading...</p>}

      {records && (
        <div className="mt-6 p-4 bg-gray-100 rounded-xl break-all">
          {records.map((r, i) => (
            <div key={i}>{r}</div>
          ))}
        </div>
      )}
    </main>
  );
}