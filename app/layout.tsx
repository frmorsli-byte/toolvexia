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
      <head>
        {/* 1️⃣ Google Consent Mode (doit être chargé avant tout tracking) */}
        <Script id="consent-default" strategy="beforeInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}

            gtag('consent', 'default', {
              ad_storage: 'denied',
              analytics_storage: 'denied',
              ad_user_data: 'denied',
              ad_personalization: 'denied'
            });
          `}
        </Script>

        {/* 2️⃣ Google Analytics GA4 */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=G-GBZS0CS5B4`}
          strategy="afterInteractive"
        />
        <Script id="ga4-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-GBZS0CS5B4');
          `}
        </Script>

        {/* 3️⃣ CMP certifiée Google */}
        {/* ⚠️ Colle ici le script officiel fourni par AdSense
            AdSense > Privacy & messaging > GDPR/EEA consent banner */}
        {/* Exemple :
        <Script src="COLLE_ICI_LE_SCRIPT_ADSENSE_CMP" strategy="beforeInteractive" />
        */}
      </head>

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

            <nav className="flex gap-6 text-sm font-medium relative">
              {/* HOME */}
              <Link href="/">Home</Link>

              {/* DEV TOOLS */}
              <div className="relative group">
                <span className="cursor-pointer">Dev Tools</span>
                <div className="absolute left-0 pt-2 hidden group-hover:block z-50">
                  <div className="bg-white border shadow-lg rounded-lg p-2 w-56">
                    <Link className="block px-3 py-2 hover:bg-gray-100" href="/tools/json-formatter">JSON Formatter</Link>
                    <Link className="block px-3 py-2 hover:bg-gray-100" href="/tools/qr-generator">QR Generator</Link>
                    <Link className="block px-3 py-2 hover:bg-gray-100" href="/tools/password-generator">Password Generator</Link>
                    <Link className="block px-3 py-2 hover:bg-gray-100" href="/tools/uuid-generator">UUID Generator</Link>
                    <Link className="block px-3 py-2 hover:bg-gray-100" href="/tools/base64">Base64 Tool</Link>
                  </div>
                </div>
              </div>

              {/* SECURITY TOOLS */}
              <div className="relative group">
                <span className="cursor-pointer">Security Tools</span>
                <div className="absolute left-0 pt-2 hidden group-hover:block z-50">
                  <div className="bg-white border shadow-lg rounded-lg p-2 w-56">
                    <Link className="block px-3 py-2 hover:bg-gray-100" href="/tools/ip-lookup">IP Lookup</Link>
                    <Link className="block px-3 py-2 hover:bg-gray-100" href="/tools/what-is-my-ip">What is my IP</Link>
                    <Link className="block px-3 py-2 hover:bg-gray-100" href="/tools/dns-lookup">DNS Lookup</Link>
                  </div>
                </div>
              </div>

              {/* VIRAL TOOLS */}
              <div className="relative group">
                <span className="cursor-pointer">Viral Tools</span>
                <div className="absolute left-0 pt-2 hidden group-hover:block z-50">
                  <div className="bg-white border shadow-lg rounded-lg p-2 w-56">
                    <Link className="block px-3 py-2 hover:bg-gray-100" href="/tools/username-generator">
                      Username Generator
                    </Link>
                  </div>
                </div>
              </div>

              {/* LEGAL */}
              <div className="relative group">
                <span className="cursor-pointer">Legal</span>
                <div className="absolute left-0 pt-2 hidden group-hover:block z-50">
                  <div className="bg-white border shadow-lg rounded-lg p-2 w-56">
                    <Link className="block px-3 py-2 hover:bg-gray-100" href="/legal/privacy">Privacy Policy</Link>
                    <Link className="block px-3 py-2 hover:bg-gray-100" href="/legal/terms">Terms</Link>
                    <Link className="block px-3 py-2 hover:bg-gray-100" href="/legal/contact">Contact</Link>
                  </div>
                </div>
              </div>
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