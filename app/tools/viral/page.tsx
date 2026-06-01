import Link from "next/link";

export default function ViralTools() {
  return (
    <main className="max-w-5xl mx-auto p-10">
      <h1 className="text-3xl font-bold">Viral Tools</h1>

      <div className="grid gap-4 mt-6">
        <Link href="/tools/username-generator">Username Generator</Link>
      </div>
    </main>
  );
}