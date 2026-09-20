import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./providers";

export const metadata: Metadata = {
  title: "Caio Silveira | Soluções Digitais",
  description: "Soluções digitais simples, modernas e funcionais para negócios. Sistemas, automações e aplicações web em São Paulo.",
  openGraph: {
    title: "Caio Silveira | Soluções Digitais",
    description: "Tecnologia aplicada a problemas reais de negócios.",
    type: "website",
    locale: "pt_BR",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className="font-sans antialiased">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
