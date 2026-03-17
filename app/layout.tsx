import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
  // Título e Descrição Básica
  title: "Envidrace | Fechamento de Sacadas em Londrina, Cambé e Região",
  description: "Sistemas de envidraçamento manuais e automatizados de alto padrão. Representante exclusivo HS.",
  
  // Configuração dos Ícones da Aba (Favicon)
  icons: {
    icon: "/favicon.ico", // O arquivo de 32x32 que criamos
  },

  // Configuração para Compartilhamento (WhatsApp, Facebook, LinkedIn)
  openGraph: {
    title: "Envidrace | Fechamento de Sacadas Premium",
    description: "Sistemas de envidraçamento de alto padrão em Londrina, Cambé e Região.",
    url: "https://envidrace.com.br", // Substitua pelo domínio real depois do deploy
    siteName: "Envidrace",
    images: [
      {
        url: "/og-image.png", // A imagem grande de 1200x630 que criamos
        width: 1200,
        height: 630,
        alt: "Envidrace Fechamento de Sacadas",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
