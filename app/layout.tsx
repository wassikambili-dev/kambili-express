import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://kambili-express.vercel.app"),
  title: "Livraison à domicile à Goma | Kambili Express",
  description: "Service rapide de livraison de colis, repas et courses à domicile à Goma.",
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <head>
        {/* Google Tag Manager */}
        <Script
          id="google-tag-manager"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='&l='+l?'&l='+l:'';j.asyncC=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','layer','GTM-K59VTVOJ');
            `,
          }}
        />
      </head>
      <body>
        {/* Optionnel mais recommandé pour GTM : le composant noscript tout au début du body */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-K59VTVOJ"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        {children}
      </body>
    </html>
  );
}