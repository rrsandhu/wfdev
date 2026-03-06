import type { Metadata } from "next";
import { Manrope, Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: {
    default: "West Fraser Developments | Metro Vancouver Real Estate",
    template: "%s | West Fraser Developments",
  },
  description:
    "West Fraser Developments builds exceptional residential and commercial communities across Metro Vancouver. Explore new homes, rentals, and commercial spaces.",
  keywords: [
    "real estate development",
    "Metro Vancouver developer",
    "new homes BC",
    "commercial real estate Vancouver",
    "rental apartments Surrey",
    "construction company BC",
    "West Fraser Developments",
  ],
  metadataBase: new URL("https://www.westfraserdev.ca"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_CA",
    url: "https://www.westfraserdev.ca",
    siteName: "West Fraser Developments",
    title: "West Fraser Developments | Metro Vancouver Real Estate",
    description:
      "West Fraser Developments builds exceptional residential and commercial communities across Metro Vancouver. Explore new homes, rentals, and commercial spaces.",
    images: [{ url: "/logo-dark.png", width: 400, height: 100, alt: "West Fraser Developments" }],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${manrope.variable} ${inter.variable} antialiased`}>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
