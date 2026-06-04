"use client";

export default function WebsiteSafetyClient() {
  return (
    <main style={{ maxWidth: "800px", margin: "0 auto", padding: "20px" }}>
      <h1>Check if Any Website is Safe or Not</h1>

      <input
        type="text"
        placeholder="Enter URL"
        style={{
          width: "100%",
          padding: "10px",
          marginBottom: "10px",
        }}
      />

      <button
        style={{
          padding: "12px 16px",
          width: "100%",
          cursor: "pointer",
          background: "linear-gradient(135deg, #2563eb, #1d4ed8)",
          color: "white",
          border: "none",
          borderRadius: "10px",
          fontWeight: "600",
        }}
      >
        🔍 Check Website Safety
      </button>
    </main>
  );
}