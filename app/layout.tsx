import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "Toolvexia",
  description: "Free online developer and productivity tools",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-black">

        {/* Navbar */}
        <header className="border-b bg-white">
          <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">

            <Link href="/" className="text-2xl font-bold">
              Toolvexia 🚀
            </Link>

            <nav className="flex gap-6 text-sm font-medium">
              {/* Tools */}
              <Link href="/">Home</Link>
              <Link href="/tools/json-formatter">JSON Formatter</Link>
              <Link href="/tools/qr-generator">QR Generator</Link>
              <Link href="/tools/password-generator">Password Generator</Link>

              {/* Pages légales */}
              <Link href="/legal/privacy">Privacy Policy</Link>
              <Link href="/legal/terms">Terms of Service</Link>
              <Link href="/legal/contact">Contact</Link>
            </nav>

          </div>
        </header>

        {/* Contenu principal */}
        {children}

        {/* Footer */}
        <footer className="border-t mt-20 bg-white">
          <div className="max-w-6xl mx-auto px-6 py-8 text-sm text-gray-500">
            © 2026 Toolvexia. All rights reserved.
          </div>
        </footer>

      </body>
    </html>
  );
}