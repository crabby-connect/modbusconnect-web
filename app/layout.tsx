import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Modbus Connect - Modern Modbus TCP/IP Monitoring & Scanner Tool",
  description:
    "Professional Modbus TCP/IP scanner and real-time monitoring software for industrial automation. Free device discovery, data visualization, and protocol logging for SCADA, PLC, and Modbus devices. Download free beta for Windows.",
  keywords:
    "Modbus TCP/IP, Modbus scanner, Modbus monitoring tool, industrial automation software, SCADA monitoring, PLC device scanner, Modbus protocol analyzer, real-time data monitoring, Modbus register reader, industrial IoT, automation tools",
  authors: [{ name: "Crabby" }],
  creator: "Crabby",
  publisher: "Modbus Connect",
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
    title: "Modbus Connect - Modern Modbus TCP/IP Monitoring & Scanner Tool",
    description:
      "Professional Modbus TCP/IP scanner and real-time monitoring software for industrial automation. Free device discovery, data visualization, and protocol logging.",
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
    title: "Modbus Connect - Modern Modbus TCP/IP Monitoring & Scanner Tool",
    description:
      "Professional Modbus TCP/IP scanner and real-time monitoring software for industrial automation. Download free beta for Windows.",
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
