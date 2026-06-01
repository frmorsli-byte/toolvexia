export const metadata = {
  title: "JSON Formatter - Toolvexia",
  description: "Free online JSON formatter and validator tool.",
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Next.js App Router exige que ce soit un JSX valide
  return <>{children}</>;
}