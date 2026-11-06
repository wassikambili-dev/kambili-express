import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://kambili-express.vercel.app"),
  title: "Livraison à domicile à Goma | Kambili Express",
  description: "Service rapide de livraison de colis, repas et courses à domicile à Goma.",
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Kambili Express - Service de Livraison Rapide à Goma",
    description: "Vos colis et repas livrés directement chez vous en moins d'une heure.",
    type: "website",
    locale: "fr_CD",
    siteName: "Kambili Express",
    url: "/",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <head>
        <meta name="google-site-verification" content="10blSpJk04hOj9" />
      </head>
      <body>{children}</body>
    </html>
  );
}