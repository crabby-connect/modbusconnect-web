import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Modbus Connect - Modern Modbus Monitoring Made Simple",
  description:
    "Professional Modbus TCP/IP scanner and monitoring tool for industrial automation. Discover, monitor, and analyze Modbus devices with ease.",
  keywords:
    "Modbus, TCP/IP, industrial automation, SCADA, PLC, monitoring, device scanner",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
