"use client";

import { useState } from "react";
import QRCode from "qrcode";

export default function QRGenerator() {
  const [text, setText] = useState("");
  const [qr, setQr] = useState("");

  const generateQR = async () => {
    if (!text) return;

    try {
      const url = await QRCode.toDataURL(text);
      setQr(url);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <main className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-4xl mx-auto">

        <h1 className="text-4xl font-bold mb-4">
          QR Code Generator
        </h1>

        <p className="text-gray-600 mb-8">
          Generate QR codes instantly for links, text and more.
        </p>

        <input
          type="text"
          placeholder="Enter text or URL..."
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="w-full p-4 border rounded-xl mb-4"
        />

        <button
          onClick={generateQR}
          className="bg-black text-white px-6 py-3 rounded-xl hover:opacity-90"
        >
          Generate QR Code
        </button>

        {qr && (
          <div className="mt-10 bg-white p-8 rounded-2xl border flex justify-center">
            <img src={qr} alt="QR Code" className="w-64 h-64" />
          </div>
        )}

        <section className="mt-12 bg-white p-6 rounded-2xl border">
          <h2 className="text-2xl font-bold mb-4">
            About This QR Code Generator
          </h2>

          <p className="text-gray-700 leading-7">
            This free online QR code generator allows you to create
            QR codes instantly for websites, text, emails and more.
            Fast, simple and optimized for productivity.
          </p>
        </section>

      </div>
    </main>
  );
}