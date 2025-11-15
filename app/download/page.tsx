import Link from "next/link";
import Image from "next/image";
import { Download, CheckCircle2, ArrowLeft, Monitor, Cpu } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Download Modbus Connect - Free Modbus TCP/IP Monitoring Software",
  description:
    "Download Modbus Connect free beta for Windows and macOS. Professional Modbus TCP/IP scanner and monitoring tool for industrial automation. Native performance, supports Windows 7/8/10/11 and macOS.",
  keywords:
    "download Modbus software, Modbus TCP/IP tool download, free Modbus scanner, Windows Modbus monitoring, macOS Modbus tool, industrial automation software download, SCADA tool download, PLC monitoring software",
  alternates: {
    canonical: "https://modbusconnect.com/download",
  },
  openGraph: {
    title: "Download Modbus Connect - Free Modbus TCP/IP Monitoring Software",
    description:
      "Download Modbus Connect free beta for Windows and macOS. Professional Modbus TCP/IP scanner and monitoring tool. Native performance.",
    url: "https://modbusconnect.com/download",
    type: "website",
  },
};

export default function DownloadPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center space-x-3">
              <Image
                src="/icon.png"
                alt="Modbus Connect Logo"
                width={40}
                height={40}
                className="rounded-lg"
              />
              <span className="text-xl font-bold text-gray-900">
                Modbus Connect
              </span>
            </Link>
            <Link
              href="/"
              className="flex items-center text-gray-600 hover:text-primary-600 transition"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Link>
          </div>
        </div>
      </nav>

      {/* Download Section */}
      <section
        className="py-20 px-4 sm:px-6 lg:px-8"
        aria-label="Download section"
      >
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-2 bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <CheckCircle2 className="w-4 h-4" />
              <span>Free During Development</span>
            </div>
            <h1 className="text-5xl font-bold text-gray-900 mb-4">
              Download Modbus Connect
            </h1>
            <p className="text-xl text-gray-600">
              Get started with the free beta. Available for Windows and macOS.
            </p>
          </div>

          {/* Download Cards */}
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-12">
            {/* Windows */}
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition border-2 border-primary-600 flex flex-col items-center justify-center">
              <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Monitor className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 text-center mb-2">
                Windows
              </h3>
              <p className="text-sm text-gray-600 text-center mb-4">
                Windows 7/8/10/11 (64-bit)
              </p>
              <a
                href="/downloads/Modbus Connect_0.2.0_x64-setup.exe"
                className="w-full bg-primary-600 text-white px-6 py-3 rounded-lg hover:bg-primary-700 transition font-medium flex items-center justify-center"
                download
                title="Download Modbus Connect v0.2.0 for Windows"
                aria-label="Download Modbus Connect installer for Windows 64-bit"
              >
                <Download className="w-5 h-5 mr-2" />
                Download .exe
              </a>
              <p className="text-xs text-gray-500 text-center mt-3">
                v0.2.0-beta • ~2.7 MB
              </p>
            </div>

            {/* macOS */}
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition border-2 border-gray-300 flex flex-col">
              <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <svg
                  className="w-8 h-8 text-blue-600"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 text-center mb-2">
                macOS
              </h3>
              <p className="text-sm text-gray-600 text-center mb-4">
                macOS (Intel & Apple Silicon)
              </p>
              <a
                href="/downloads/Modbus Connect_0.3.0_x64.dmg"
                className="w-full bg-primary-600 text-white px-6 py-3 rounded-lg hover:bg-primary-700 transition font-medium flex items-center justify-center"
                download
                title="Download Modbus Connect v0.3.0 for macOS"
                aria-label="Download Modbus Connect DMG for macOS"
              >
                <Download className="w-5 h-5 mr-2" />
                Download .dmg
              </a>
              <p className="text-xs text-gray-500 text-center mt-3 mb-3">
                v0.3.0-beta • Unsigned
              </p>
              <div className="p-3 bg-yellow-50 border border-yellow-200 rounded-lg mt-auto">
                <p className="text-xs text-yellow-800 leading-relaxed">
                  <strong>⚠️ Unsigned:</strong> Right-click app → Show Package
                  Contents → MacOS folder → run "modbus-connect". See below.
                </p>
              </div>
            </div>
          </div>

          {/* System Requirements */}
          <div className="bg-white rounded-xl p-8 shadow-sm mb-12">
            <div className="flex items-center justify-center mb-6">
              <Cpu className="w-6 h-6 text-primary-600 mr-3" />
              <h2
                className="text-2xl font-bold text-gray-900"
                id="system-requirements"
              >
                Modbus Connect System Requirements
              </h2>
            </div>
            <div className="text-center mb-6">
              <p className="text-lg text-gray-700 mb-4">
                Thanks to the absolute wizardry of Tauri, this thing is so
                lightweight you could probably run it on a potato.
              </p>
              <p className="text-gray-600">
                Seriously. 2.7 MB download. Native performance. Minimal memory
                footprint.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600 mb-2">
                  2.7 MB
                </div>
                <p className="text-sm text-gray-600">
                  Download size (not a typo)
                </p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600 mb-2">
                  ~30 MB
                </div>
                <p className="text-sm text-gray-600">RAM usage (yes, really)</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600 mb-2">
                  Native
                </div>
                <p className="text-sm text-gray-600">
                  Performance (chef's kiss)
                </p>
              </div>
            </div>
          </div>

          {/* Installation Instructions */}
          <div className="bg-primary-50 rounded-xl p-8 border border-primary-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Installation Instructions
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-semibold text-gray-900 mb-3 flex items-center">
                  <Monitor className="w-5 h-5 mr-2 text-blue-600" />
                  Windows Installation
                </h3>
                <ol className="list-decimal list-inside space-y-2 text-sm text-gray-700">
                  <li>Download the .exe installer</li>
                  <li>Run the installer and follow the setup wizard</li>
                  <li>Launch Modbus Connect from the Start menu</li>
                </ol>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-3 flex items-center">
                  <svg
                    className="w-5 h-5 mr-2 text-gray-600"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
                  </svg>
                  macOS Installation (Unsigned App)
                </h3>
                <ol className="list-decimal list-inside space-y-2 text-sm text-gray-700">
                  <li>Download and open the .dmg file</li>
                  <li>
                    Right-click the app package and select "Show Package
                    Contents"
                  </li>
                  <li>Navigate to the "MacOS" folder</li>
                  <li>
                    Double-click the "modbus-connect" file to launch the app
                  </li>
                </ol>
                <div className="mt-3 p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
                  <p className="text-xs text-yellow-800">
                    <strong>Note:</strong> The app is not signed, so macOS
                    Gatekeeper will block it if you try to open it normally.
                    Follow the steps above to run it.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* What's Included */}
          <div className="mt-12 bg-white rounded-xl p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              What's Included in Beta
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex items-start">
                <CheckCircle2 className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900">
                    Device Scanner
                  </h4>
                  <p className="text-sm text-gray-600">
                    Automatic network device discovery
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle2 className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900">
                    Real-Time Monitoring
                  </h4>
                  <p className="text-sm text-gray-600">
                    Multi-session device monitoring
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle2 className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900">
                    Data Visualization
                  </h4>
                  <p className="text-sm text-gray-600">
                    Real-time charts with 12 series
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle2 className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900">
                    Workspace Management
                  </h4>
                  <p className="text-sm text-gray-600">
                    Save and restore sessions
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle2 className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900">
                    Protocol Logging
                  </h4>
                  <p className="text-sm text-gray-600">
                    TX/RX traffic inspection
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle2 className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900">
                    All Register Types
                  </h4>
                  <p className="text-sm text-gray-600">
                    Coils, Discrete, Holding, Input
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Support */}
          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-4">
              Need help? Check out the{" "}
              <Link href="/docs" className="text-primary-600 hover:underline">
                documentation
              </Link>
              .
            </p>
            <p className="text-sm text-gray-500 mt-4">
              Software provided as-is without warranty. Use at your own risk.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
