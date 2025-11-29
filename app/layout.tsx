import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Modbus Connect - Free Modbus TCP Client, Scanner & Logger",
  description:
    "Download the free Modbus Connect tool. A professional Modbus TCP Client, Scanner, and Logger in one intuitive interface. Visualize data and diagnose problems instantly.",
  keywords:
    "Modbus TCP Client, Modbus TCP Scanner, Modbus Logger, free Modbus tool, Modbus TCP/IP, Modbus monitoring, industrial automation software, SCADA monitoring, PLC device scanner, Modbus protocol analyzer, real-time data monitoring, Modbus register reader, industrial IoT, automation tools, free Modbus software, Modbus diagnostics",
  authors: [{ name: "Crabby" }],
  creator: "Crabby",
  publisher: "Modbus Connect",
  icons: {
    icon: "/icon.png",
    apple: "/icon.png",
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
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://modbusconnect.com",
    siteName: "Modbus Connect",
    title: "Modbus Connect - Free Modbus TCP Client, Scanner & Logger",
    description:
      "Download the free Modbus Connect tool. A professional Modbus TCP Client, Scanner, and Logger in one intuitive interface. Visualize data and diagnose problems instantly.",
    images: [
      {
        url: "https://modbusconnect.com/screenshots/main-dashboard.png",
        width: 1920,
        height: 1080,
        alt: "Modbus Connect Dashboard - Real-time device monitoring interface",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Modbus Connect - Free Modbus TCP Client, Scanner & Logger",
    description:
      "Download the free Modbus Connect tool. A professional Modbus TCP Client, Scanner, and Logger in one intuitive interface. Visualize data and diagnose problems instantly.",
    images: ["https://modbusconnect.com/screenshots/main-dashboard.png"],
  },
  alternates: {
    canonical: "https://modbusconnect.com",
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://modbusconnect.com" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        {/* Inline critical CSS for above-the-fold content */}
        <style
          dangerouslySetInnerHTML={{
            __html: `
              :root{--foreground-rgb:51,51,51;--background-start-rgb:248,249,250;--background-end-rgb:255,255,255}
              body{color:rgb(var(--foreground-rgb));background:linear-gradient(to bottom,transparent,rgb(var(--background-end-rgb)))rgb(var(--background-start-rgb));margin:0;font-family:system-ui,-apple-system,sans-serif}
              *{box-sizing:border-box}
            `,
          }}
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
