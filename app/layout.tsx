import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Arfikriawan | IT Engineer",
  description:
    "Arfikriawan is an IT Engineer working across IT operations, workflow automation, dashboards, and mobile tools for field engineers.",
  openGraph: {
    title: "Arfikriawan — Systems in Motion",
    description:
      "IT operations, workflow automation, dashboards, and mobile tools for field engineers.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Arfikriawan — Systems in Motion",
    description:
      "IT operations, workflow automation, dashboards, and mobile tools for field engineers.",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#f7f7f8",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link href="https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=Inter:wght@400;500;600;700&family=Space+Grotesk:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  );
}
