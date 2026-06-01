import Link from "next/link";

export default function SecurityTools() {
  return (
    <main className="max-w-5xl mx-auto p-10">
      <h1 className="text-3xl font-bold">Security Tools</h1>

      <div className="grid gap-4 mt-6">
        <Link href="/tools/ip-lookup">IP Lookup</Link>
        <Link href="/tools/what-is-my-ip">What is my IP</Link>
        <Link href="/tools/dns-lookup">DNS Lookup</Link>
      </div>
    </main>
  );
}