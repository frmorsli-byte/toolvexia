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
<header className="border-b bg-white sticky top-0 z-50">
  <div className="max-w-6xl mx-auto px-3 py-3">
    
    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
      
      {/* Logo */}
      <Link href="/" className="text-xl md:text-2xl font-bold shrink-0">
        Toolvexia 🚀
      </Link>

      {/* Navigation */}
      <nav className="flex gap-4 md:gap-6 text-sm font-medium overflow-x-auto whitespace-nowrap pb-1">
        
        <Link
          href="/"
          className="hover:text-blue-600 transition-colors"
        >
          Home
        </Link>

        <Link
          href="/tools/dev"
          className="hover:text-blue-600 transition-colors"
        >
          Dev Tools
        </Link>

        <Link
          href="/tools/security"
          className="hover:text-blue-600 transition-colors"
        >
          Security
        </Link>

        <Link
          href="/tools/viral"
          className="hover:text-blue-600 transition-colors"
        >
          Viral
        </Link>

        <Link
          href="/legal/privacy"
          className="hover:text-blue-600 transition-colors"
        >
          Legal
        </Link>

      </nav>

    </div>

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