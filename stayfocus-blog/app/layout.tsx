import type { Metadata } from "next";
import { Inter } from 'next/font/google';
import "./globals.css";
import Header from "@/components/Header"; // Será criado depois
import Footer from "@/components/Footer"; // Será criado depois

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'),
  title: {
    default: "StayFocus Blog",
    template: "%s | StayFocus Blog",
  },
  description: "Conteúdo sobre produtividade, foco, técnicas de estudo para concursos e desenvolvimento pessoal com o StayFocus.",
  viewport: "width=device-width, initial-scale=1",
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png', // Exemplo, crie estes arquivos
    apple: '/apple-touch-icon.png', // Exemplo, crie este arquivo
  },
  openGraph: {
    title: "StayFocus Blog",
    description: "Conteúdo sobre produtividade, foco, técnicas de estudo para concursos e desenvolvimento pessoal com o StayFocus.",
    url: process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000',
    siteName: "StayFocus Blog",
    images: [
      {
        url: '/og-image.png', // Crie esta imagem em public/og-image.png (e.g., 1200x630)
        width: 1200,
        height: 630,
        alt: 'StayFocus Blog - Produtividade e Foco',
      },
    ],
    locale: 'pt_BR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "StayFocus Blog",
    description: "Conteúdo sobre produtividade, foco, técnicas de estudo para concursos e desenvolvimento pessoal com o StayFocus.",
    images: ['/og-image.png'], // Use a mesma imagem do Open Graph
    // creator: '@StayFocusApp', // Se tiver um handle do Twitter
  },
  robots: { // Adicionando diretivas de robôs aqui também, complementando robots.txt
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  // Adicione aqui outros metadados relevantes como theme-color, manifest, etc.
  // manifest: '/site.webmanifest', // Exemplo, crie este arquivo
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={inter.className}>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
