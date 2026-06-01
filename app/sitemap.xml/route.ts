const siteUrl = "https://toolvexia.com";

// 👉 Liste centrale de tes pages (facile à maintenir)
const routes = [
  "",

  // categories
  "tools/dev",
  "tools/security",
  "tools/viral",

  // Dev tools
  "tools/json-formatter",
  "tools/qr-generator",
  "tools/password-generator",
  "tools/uuid-generator",
  "tools/base64",

  // Security tools
  "tools/ip-lookup",
  "tools/what-is-my-ip",
  "tools/dns-lookup",

  // Viral tools
  "tools/username-generator",

  // legal
  "legal/privacy",
  "legal/terms",
  "legal/contact",
];

export async function GET() {
  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes
  .map((route) => {
    return `
  <url>
    <loc>${siteUrl}/${route}</loc>
    <changefreq>weekly</changefreq>
    <priority>${route === "" ? "1.0" : "0.8"}</priority>
  </url>`;
  })
  .join("")}
</urlset>`;

  return new Response(body, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}