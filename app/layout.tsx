import "./globals.css";
import Link from "next/link";
import Script from "next/script";

export const metadata = {
  title: "Toolvexia",
  description:
    "Toolvexia offers free online developer tools including JSON formatter, QR code generator, and password generator. Fast, simple, and SEO optimized tools for everyone.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-black">

        {/* AdSense script */}
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7006821543273085"
          strategy="afterInteractive"
          crossOrigin="anonymous"
        />

        {/* Navbar */}
        <header className="border-b bg-white">
          <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">

            <Link href="/" className="text-2xl font-bold">
              Toolvexia 🚀
            </Link>

            <nav className="flex gap-6 text-sm font-medium">
              {/* Tools */}
              <Link href="/">Home</Link>
              

	      {/* Categories */}
              <Link href="/tools/dev">Dev Tools</Link>
 	      <Link href="/tools/security">Security Tools</Link>
	      <Link href="/tools/viral">Viral Tools</Link>

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