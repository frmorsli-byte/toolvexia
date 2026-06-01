import Link from "next/link";

const tools = [
  {
    name: "JSON Formatter",
    description: "Format and beautify JSON instantly.",
    link: "/tools/json-formatter",
  },
  {
    name: "QR Code Generator",
    description: "Generate QR codes easily.",
    link: "/tools/qr-generator",
  },
  {
    name: "Password Generator",
    description: "Create secure passwords instantly.",
    link: "/tools/password-generator",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen">

      <section className="max-w-6xl mx-auto px-6 py-20 text-center">

        <h1 className="text-6xl font-bold leading-tight">
          Free Online Tools <br />
          for Developers & Creators 🚀
        </h1>

        <p className="mt-6 text-xl text-gray-600 max-w-2xl mx-auto">
          Toolvexia provides fast, simple and free productivity tools
          optimized for developers, creators and businesses.
        </p>

      </section>

      <section className="max-w-6xl mx-auto px-6 pb-20">

        <div className="grid md:grid-cols-3 gap-6">

          {tools.map((tool) => (
            <Link
              key={tool.name}
              href={tool.link}
              className="bg-white border rounded-2xl p-6 hover:shadow-lg transition"
            >
              <h2 className="text-2xl font-bold mb-3">
                {tool.name}
              </h2>

              <p className="text-gray-600">
                {tool.description}
              </p>
            </Link>
          ))}

        </div>

      </section>

      <section className="max-w-4xl mx-auto px-6 pb-24">

        <div className="bg-white border rounded-2xl p-8">

          <h2 className="text-3xl font-bold mb-4">
            Why Toolvexia?
          </h2>

          <p className="text-gray-700 leading-8">
            Toolvexia is a growing collection of free online tools
            designed to improve productivity for developers,
            designers and creators.
            Our tools are fast, responsive and optimized for SEO.
          </p>

        </div>

      </section>

    </main>
  );
}