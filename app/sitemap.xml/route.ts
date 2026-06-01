import { readdirSync } from "fs";
import path from "path";

const siteUrl = "https://toolvexia.com";

/**
 * 🔥 Fonction pour scanner automatiquement les dossiers tools
 */
function getToolPages() {
  const toolsDir = path.join(process.cwd(), "app/tools");

  const categories = readdirSync(toolsDir, { withFileTypes: true })
    .filter((dirent) => dirent.isDirectory())
    .map((dirent) => dirent.name);

  let pages: string[] = [];

  // catégories
  categories.forEach((cat) => {
    pages.push(`tools/${cat}`);

    const catPath = path.join(toolsDir, cat);

    const tools = readdirSync(catPath, { withFileTypes: true })
      .filter((d) => d.isDirectory())
      .map((d) => d.name);

    tools.forEach((tool) => {
      pages.push(`tools/${cat}/${tool}`);
    });
  });

  return pages;
}

export async function GET() {
  const toolPages = getToolPages();

  const staticPages = [
    "",
    "legal/privacy",
    "legal/terms",
    "legal/contact",
  ];

  const allPages = [...staticPages, ...toolPages];

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allPages
  .map((page) => {
    return `
  <url>
    <loc>${siteUrl}/${page}</loc>
    <changefreq>weekly</changefreq>
    <priority>${page === "" ? "1.0" : "0.8"}</priority>
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