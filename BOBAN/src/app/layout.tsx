import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import ServiceWorkerRegistration from "@/components/ServiceWorkerRegistration";

const roboto = Roboto({
  subsets: ["latin"],
  variable: "--font-roboto",
  display: "swap",
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "BOBAN - Media Library",
  description:
    "Gateway Church Organization Admin - Media Library Management System",
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "BOBAN",
  },
  formatDetection: {
    telephone: false,
  },
  openGraph: {
    type: "website",
    siteName: "BOBAN",
    title: "BOBAN - Media Library",
    description:
      "Gateway Church Organization Admin - Media Library Management System",
  },
  twitter: {
    card: "summary",
    title: "BOBAN - Media Library",
    description:
      "Gateway Church Organization Admin - Media Library Management System",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  themeColor: "#000000",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.svg" />
        <link rel="apple-touch-icon" href="/icon-192x192.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#000000" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="BOBAN" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta name="msapplication-tap-highlight" content="no" />
        <script src="/sw-patch.js" defer></script>
        <script src="/sw-register.js" defer></script>
      </head>
      <body className={roboto.className}>
        <ServiceWorkerRegistration />
        {children}
      </body>
    </html>
  );
}
