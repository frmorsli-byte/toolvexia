import Link from "next/link";

export default function DevTools() {
  return (
    <main className="max-w-5xl mx-auto p-10">
      <h1 className="text-3xl font-bold">Dev Tools</h1>
      <p className="mt-2 text-gray-600">
        Free developer tools for JSON, encoding, and utilities.
      </p>

      <div className="grid gap-4 mt-6">
        <Link href="/tools/json-formatter">JSON Formatter</Link>
        <Link href="/tools/qr-generator">QR Generator</Link>
        <Link href="/tools/password-generator">Password Generator</Link>
        <Link href="/tools/uuid-generator">UUID Generator</Link>
        <Link href="/tools/base64">Base64 Encoder/Decoder</Link>
      </div>
    </main>
  );
}