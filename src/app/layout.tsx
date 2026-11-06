import type { Metadata } from "next";
import localFont from "next/font/local";
import Script from "next/script";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { withBasePath } from "@/lib/utils";

const gtmId = process.env.NEXT_PUBLIC_GTM_ID;

const poppins = localFont({
  src: [
    { path: "./fonts/poppins-500-latin.woff2", weight: "500" },
    { path: "./fonts/poppins-600-latin.woff2", weight: "600" },
    { path: "./fonts/poppins-700-latin.woff2", weight: "700" },
    { path: "./fonts/poppins-800-latin.woff2", weight: "800" },
  ],
  variable: "--font-poppins",
  display: "swap",
});

const roboto = localFont({
  src: "./fonts/roboto-latin.woff2",
  variable: "--font-roboto",
  weight: "100 900",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Orbit Technologies — Analytical instruments for coal, mineral & material analysis",
    template: "%s · Orbit Technologies",
  },
  description:
    "For more than 30 years, Orbit Technologies Pvt. Ltd. has provided complete solutions for coal, mineral, material and environmental analysis — manufacturing and distributing elemental analysers and analytical instruments across India.",
  icons: {
    icon: withBasePath("/icon.svg"),
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${roboto.variable} antialiased`}
    >
      <body className="flex min-h-dvh flex-col">
        {gtmId && (
          <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${gtmId}`}
              height="0"
              width="0"
              style={{ display: "none", visibility: "hidden" }}
            />
          </noscript>
        )}
        {gtmId && (
          <Script id="google-tag-manager" strategy="afterInteractive">
            {`
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'dataLayer','${gtmId}');
            `}
          </Script>
        )}
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}