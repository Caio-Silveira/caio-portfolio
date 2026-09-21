import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import { Providers } from "./providers";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}`
      : "http://localhost:3010");

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Caio Silveira | Desenvolvedor Full Stack",
    template: "%s | Caio Silveira",
  },
  description:
    "Portfólio de Caio Silveira, desenvolvedor Full Stack em São Paulo. Aplicações web, software, APIs e soluções digitais construídas com foco em produto e execução.",
  keywords: [
    "Caio Silveira",
    "desenvolvedor full stack",
    "desenvolvedor São Paulo",
    "Next.js",
    "React",
    "Node.js",
    "TypeScript",
    "C++",
    "software",
    "aplicações web",
  ],
  authors: [{ name: "Caio Silveira" }],
  creator: "Caio Silveira",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Caio Silveira | Desenvolvedor Full Stack",
    description:
      "Aplicações web, software e soluções digitais construídas do problema à entrega.",
    url: "/",
    siteName: "Caio Silveira",
    type: "website",
    locale: "pt_BR",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Caio Silveira — Desenvolvedor Full Stack" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Caio Silveira | Desenvolvedor Full Stack",
    description: "Aplicações web, software e soluções digitais construídas do problema à entrega.",
    images: ["/opengraph-image"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className="font-sans antialiased">
        <Providers>{children}</Providers>
        <Analytics />
      </body>
    </html>
  );
}
