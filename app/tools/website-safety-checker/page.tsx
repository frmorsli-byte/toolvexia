export const metadata = {
  title: "Website Safety Checker - Check if a Website is Safe or Suspicious",
  description:
    "Free website safety checker tool to analyze if a website is safe or suspicious. Check SSL, domain reputation, and security signals instantly.",
};

import WebsiteSafetyClient from "./WebsiteSafetyClient";

export default function Page() {
  return (
    <main style={{ maxWidth: "900px", margin: "0 auto", padding: "20px" }}>
      
      {/* SEO CONTENT */}
      <h1>Website Safety Checker</h1>

      <p>
        This free Website Safety Checker helps you analyze any website and
        determine if it is safe, suspicious, or potentially harmful. It is
        designed to protect users from phishing, malware, and unsafe domains.
      </p>

      <h2>How it works</h2>
      <ul>
        <li>Checks if HTTPS is enabled</li>
        <li>Analyzes domain structure</li>
        <li>Detects basic security signals</li>
        <li>Provides a simple risk indicator</li>
      </ul>

      <h2>Why use this tool?</h2>
      <ul>
        <li>Protect yourself from phishing websites</li>
        <li>Verify links before clicking them</li>
        <li>Improve your online security awareness</li>
      </ul>

      {/* TOOL UI */}
      <WebsiteSafetyClient />

      {/* FAQ SECTION */}
      <h2>Frequently Asked Questions</h2>

      <h3>Is this Website Safety Checker free?</h3>
      <p>Yes, it is completely free to use.</p>

      <h3>Does it store my data?</h3>
      <p>No, we do not store any URLs entered in the tool.</p>

      <h3>Can it detect malware?</h3>
      <p>
        It provides basic safety signals but not full antivirus-level scanning.
      </p>

      <h3>Is this tool accurate?</h3>
      <p>
        It uses simple security checks and is designed for quick risk
        assessment.
      </p>

    </main>
  );
}