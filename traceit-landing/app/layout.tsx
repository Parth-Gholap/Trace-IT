import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TraceIT - Community-Powered Lost & Found Platform",
  description: "Reconnect with your belongings through community participation. Report lost items, search for found items, and join the TraceIT community.",
  keywords: ["lost and found", "community", "campus", "recovery", "traceit"],
  authors: [{ name: "TraceIT Team" }],
  creator: "TraceIT",
  publisher: "TraceIT",
  metadataBase: new URL("https://traceit.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "TraceIT - Community-Powered Lost & Found Platform",
    description: "Reconnect with your belongings through community participation.",
    url: "https://traceit.com",
    siteName: "TraceIT",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "TraceIT - Lost & Found Platform",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "TraceIT - Community-Powered Lost & Found Platform",
    description: "Reconnect with your belongings through community participation.",
    images: ["/og-image.jpg"],
    creator: "@traceit",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-black text-white antialiased`}>
        {children}
      </body>
    </html>
  );
}
