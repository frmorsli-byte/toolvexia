export const metadata = {
  title: "JSON Formatter - Toolvexia",
  description: "Format, validate, and beautify your JSON instantly online. Free, fast, and easy-to-use JSON formatter for developers and APIs.",
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Next.js App Router exige que ce soit un JSX valide
  return <>{children}</>;
}